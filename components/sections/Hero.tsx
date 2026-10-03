'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const stats = [
  { num: 20000, suffix: '+', label: 'professionnels formés' },
  { num: 8.5, suffix: '/10', label: 'satisfaction moyenne' },
  { num: 300, suffix: '+', label: 'organisations clientes' },
  { num: 7, suffix: 'M+', label: 'vues LinkedIn & YouTube' },
]

const carouselSlides = [
  {
    url: '/photos/FBNL1327.jpg',
    title: 'Sessions Interactives',
    subtitle: 'Apprentissage engagé & participatif',
    tag: 'Live',
  },
  {
    url: '/photos/FBNL0761.jpg',
    title: 'Power Up Live',
    subtitle: 'Conférences & formations expertes',
    tag: 'Academy',
  },
  {
    url: '/photos/FBNL0674.jpg',
    title: 'Formation Power BI',
    subtitle: 'Session en présentiel — ABN-AMRO',
    tag: 'Academy',
  },
  {
    url: '/photos/FBNL1341.jpg',
    title: 'Expertise BI & Data',
    subtitle: 'Apprentissage pratique',
    tag: 'Conseil',
  },
  {
    url: '/photos/FBNL1726.jpg',
    title: 'Communauté BI',
    subtitle: '300+ organisations clientes',
    tag: 'Team',
  },
]

const tagColors: Record<string, string> = {
  Academy: 'bg-yellow-400 text-black',
  Live: 'bg-red-500 text-white',
  Conseil: 'bg-blue-500 text-white',
  Team: 'bg-green-500 text-white',
  Digital: 'bg-purple-500 text-white',
}

function Counter({ num, suffix }: { num: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 60
          const increment = num / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= num) { setCount(num); clearInterval(timer) }
            else setCount(parseFloat(current.toFixed(1)))
          }, 2000 / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [num])

  const display = num % 1 !== 0
    ? count.toFixed(1)
    : Math.round(count).toLocaleString('fr-FR')

  return (
    <div ref={ref} className="text-2xl font-bold text-yellow-400">
      {display}{suffix}
    </div>
  )
}

function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setCurrent(c => (c + 1) % carouselSlides.length)
      }, 800)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="relative w-full h-[420px] rounded-2xl overflow-hidden"
      style={{
        boxShadow: '0 0 60px rgba(245,200,0,0.15), 0 25px 50px rgba(0,0,0,0.5)',
      }}
    >
      {carouselSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: i === current
                ? 'kenBurns 8s ease-in-out infinite alternate'
                : 'none',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tagColors[slide.tag]}`}>
              {slide.tag}
            </span>
          </div>

          {/* Caption */}
          <div
            className="absolute bottom-5 left-5 right-5 z-10"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.6s ease 0.3s',
            }}
          >
            <h3 className="text-white font-bold text-lg mb-0.5">{slide.title}</h3>
            <p className="text-zinc-300 text-sm">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full bg-yellow-400"
          style={{ animation: 'progress 4s linear forwards' }}
        />
      </div>

      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1)    translateX(0px)  translateY(0px); }
          25%  { transform: scale(1.06) translateX(-8px) translateY(-4px); }
          50%  { transform: scale(1.08) translateX(4px)  translateY(-8px); }
          75%  { transform: scale(1.05) translateX(-4px) translateY(4px); }
          100% { transform: scale(1.1)  translateX(8px)  translateY(0px); }
        }
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, t = 0
    let animId: number
    const YELLOW = '#F5C800'
    const BLUE = '#1B3A8C'

    const particles: {
      x: number; y: number; vx: number; vy: number
      size: number; alpha: number; color: string; pulse: number
    }[] = []

    const lights: {
      progress: number; speed: number; size: number
      color: string; trail: { x: number; y: number }[]; reverse: boolean
    }[] = []

    const wordList = [
      'Power BI','BI & IA','DAX','Fabric','KPI','Data',
      'Analytics','Power Up','Excel','Azure','Maturity',
    ]

    const floatingWords: {
      x: number; y: number; vy: number; alpha: number; maxAlpha: number
      word: string; size: number; color: string; fadingIn: boolean
    }[] = []

    function getBridgePoint(
      progress: number,
      nlX: number, nlY: number,
      maX: number, maY: number
    ) {
      const cx = (nlX + maX) / 2
      const cy = nlY - H * 0.55
      const tt = progress
      return {
        x: (1-tt)*(1-tt)*nlX + 2*(1-tt)*tt*cx + tt*tt*maX,
        y: (1-tt)*(1-tt)*nlY + 2*(1-tt)*tt*cy + tt*tt*maY,
      }
    }

    function resize() {
      if (!canvas) return
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight

      particles.length = 0
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.3 + 0.05,
          color: Math.random() > 0.6 ? YELLOW : BLUE,
          pulse: Math.random() * Math.PI * 2,
        })
      }

      lights.length = 0
      for (let i = 0; i < 6; i++) {
        lights.push({
          progress: Math.random(),
          speed: 0.0015 + Math.random() * 0.002,
          size: Math.random() * 3 + 1.5,
          color: i % 3 === 0 ? YELLOW : i % 3 === 1 ? '#93AADC' : '#ffffff',
          trail: [],
          reverse: i % 2 === 0,
        })
      }

      floatingWords.length = 0
      for (let i = 0; i < 10; i++) {
        floatingWords.push({
          x: Math.random() * W, y: Math.random() * H,
          vy: -(0.2 + Math.random() * 0.4),
          alpha: Math.random() * 0.08,
          maxAlpha: 0.05 + Math.random() * 0.08,
          word: wordList[Math.floor(Math.random() * wordList.length)],
          size: 10 + Math.random() * 12,
          color: Math.random() > 0.5 ? YELLOW : '#ffffff',
          fadingIn: Math.random() > 0.5,
        })
      }
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      t += 0.005

      const nlX = W * 0.02
      const nlY = H * 0.92
      const maX = W * 0.98
      const maY = H * 0.92
      const cx = (nlX + maX) / 2
      const cy = nlY - H * 0.55

      const nlG = ctx.createRadialGradient(nlX, nlY, 0, nlX, nlY, W * 0.35)
      nlG.addColorStop(0, 'rgba(27,58,140,0.2)')
      nlG.addColorStop(1, 'transparent')
      ctx.fillStyle = nlG
      ctx.fillRect(0, 0, W, H)

      const maG = ctx.createRadialGradient(maX, maY, 0, maX, maY, W * 0.35)
      maG.addColorStop(0, 'rgba(193,39,45,0.14)')
      maG.addColorStop(1, 'transparent')
      ctx.fillStyle = maG
      ctx.fillRect(0, 0, W, H)

      const cG = ctx.createRadialGradient(W/2, H*0.5, 0, W/2, H*0.5, W*0.5)
      cG.addColorStop(0, `rgba(245,200,0,${0.03 + 0.02 * Math.sin(t * 2)})`)
      cG.addColorStop(1, 'transparent')
      ctx.fillStyle = cG
      ctx.fillRect(0, 0, W, H)

      ctx.save()
      ctx.globalAlpha = 0.04
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 70) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 70) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }
      ctx.restore()

      floatingWords.forEach(w => {
        w.y += w.vy
        if (w.fadingIn) {
          w.alpha += 0.003
          if (w.alpha >= w.maxAlpha) w.fadingIn = false
        } else {
          w.alpha -= 0.002
        }
        if (w.alpha <= 0 || w.y < -20) {
          w.x = Math.random() * W
          w.y = H + 20
          w.alpha = 0
          w.fadingIn = true
          w.word = wordList[Math.floor(Math.random() * wordList.length)]
        }
        ctx.save()
        ctx.globalAlpha = w.alpha
        ctx.fillStyle = w.color
        ctx.font = `${w.size}px Segoe UI`
        ctx.textAlign = 'center'
        ctx.fillText(w.word, w.x, w.y)
        ctx.restore()
      })

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.pulse += 0.02
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.save()
        ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      const pulse = 0.3 + 0.12 * Math.sin(t * 1.5)
      ctx.save()
      ctx.globalAlpha = pulse
      ctx.strokeStyle = YELLOW
      ctx.lineWidth = 3
      ctx.shadowColor = YELLOW
      ctx.shadowBlur = 12
      ctx.beginPath()
      ctx.moveTo(nlX, nlY)
      ctx.quadraticCurveTo(cx, cy, maX, maY)
      ctx.stroke()
      ctx.restore()

      ctx.save()
      ctx.globalAlpha = pulse * 0.35
      ctx.strokeStyle = YELLOW
      ctx.lineWidth = 1.5
      ctx.setLineDash([8, 5])
      ctx.beginPath()
      ctx.moveTo(nlX, nlY)
      ctx.lineTo(maX, maY)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      for (let i = 1; i < 10; i++) {
        const tt = i / 10
        const bx = (1-tt)*(1-tt)*nlX + 2*(1-tt)*tt*cx + tt*tt*maX
        const by = (1-tt)*(1-tt)*nlY + 2*(1-tt)*tt*cy + tt*tt*maY
        const dx = nlX + tt * (maX - nlX)
        ctx.save()
        ctx.globalAlpha = pulse * 0.25
        ctx.strokeStyle = YELLOW
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(bx, by)
        ctx.lineTo(dx, nlY)
        ctx.stroke()
        ctx.restore()
      }

      lights.forEach(l => {
        const p = l.reverse ? 1 - l.progress : l.progress
        const pos = getBridgePoint(p, nlX, nlY, maX, maY)
        l.trail.push({ x: pos.x, y: pos.y })
        if (l.trail.length > 25) l.trail.shift()
        l.progress += l.speed
        if (l.progress > 1) l.progress = 0

        l.trail.forEach((pt, i) => {
          ctx.save()
          ctx.globalAlpha = (i / l.trail.length) * 0.5
          ctx.fillStyle = l.color
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, l.size * (i / l.trail.length), 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })

        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, l.size * 4)
        grad.addColorStop(0, l.color)
        grad.addColorStop(1, 'transparent')
        ctx.save()
        ctx.globalAlpha = 0.85
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, l.size * 4, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center bg-black overflow-hidden">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="text-left">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              L&apos;expertise{' '}
              <span className="text-yellow-400">BI & IA</span>
              <br />
              <span className="text-zinc-400">pour votre transformation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-zinc-400 text-base leading-relaxed mb-6 max-w-lg"
            >
              Formations certifiantes Power BI, IA et Microsoft Office.
              E-learning Power Up. Conseil et accompagnement data.{' '}
              <span className="text-zinc-300 font-medium">
                De l&apos;apprentissage à l&apos;impact mesurable.
              </span>
            </motion.p>

            {/* Stats — animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-zinc-800 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(9,9,11,0.7)', backdropFilter: 'blur(8px)' }}
                >
                  <Counter num={stat.num} suffix={stat.suffix} />
                  <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex gap-4 flex-wrap mb-4"
            >
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-7 py-4 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/25 no-underline"
              >
                Essayer la démo gratuite →
              </Link>
              <Link
                href="/academy"
                className="border border-zinc-700 text-white px-7 py-4 rounded-xl font-medium text-sm hover:border-zinc-400 hover:bg-white/5 transition-all no-underline"
              >
                Voir le catalogue 2026
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-zinc-600 text-xs"
            >
              ✓ Sans engagement &nbsp;·&nbsp;
              ✓ Réponse sous 24h &nbsp;·&nbsp;
              ✓ Certifié Microsoft
            </motion.p>

          </div>

          {/* Right — carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <PhotoCarousel />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">
          Découvrir
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>

    </section>
  )
}
