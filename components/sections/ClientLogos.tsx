'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Rabobank', color: '#FF6600' },
  { name: 'ABN·AMRO', color: '#009B8D' },
  { name: 'Danone', color: '#003087' },
  { name: 'Ahold Delhaize', color: '#00853E' },
  { name: 'CTOUCH', color: '#ffffff' },
  { name: 'ONVZ', color: '#F4A81D' },
  { name: 'Qbuzz', color: '#F4A81D' },
  { name: 'hcs.', color: '#1A3A5C' },
  { name: 'for farmers', color: '#5AAA28' },
  { name: 'FITZ', color: '#ffffff' },
  { name: 'Louwman', color: '#ffffff' },
  { name: 'Enza Zaden', color: '#5BBD2E' },
  { name: 'Brunel', color: '#E30613' },
  { name: 'SBM Offshore', color: '#E86B1F' },
  { name: 'ConQuaestor', color: '#ffffff' },
  { name: 'HAN University', color: '#E8003D' },
  { name: 'HU Utrecht', color: '#00A5D9' },
  { name: 'HvA Amsterdam', color: '#E63329' },
  { name: 'Zeeman', color: '#1A1A1A' },
  { name: 'Van Lanschot', color: '#006868' },
]

// Double the array for seamless infinite scroll
const doubled = [...clients, ...clients]

export default function ClientLogos() {
  return (
    <section className="bg-zinc-950 border-t border-b border-zinc-800/50 py-16 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-10 px-6">
        <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-3">
          Ils nous font confiance
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          300+ organisations en Europe & au Maroc
        </h2>
        <p className="text-zinc-500 text-sm">
          Des start-ups aux multinationales — 20 000+ professionnels formés
        </p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(90deg, rgb(9,9,11) 0%, transparent 100%)' }} />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(270deg, rgb(9,9,11) 0%, transparent 100%)' }} />

        {/* Ticker */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl px-8 py-4 flex items-center justify-center min-w-[160px] hover:border-zinc-600 transition-colors"
            >
              <span
                className="font-bold text-sm whitespace-nowrap"
                style={{ color: client.color }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="flex justify-center gap-10 mt-10 flex-wrap px-6">
        {[
          { num: '20 000+', label: 'professionnels formés' },
          { num: '8,5/10', label: 'score de satisfaction' },
          { num: '300+', label: 'organisations clientes' },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-yellow-400 font-bold text-xl">{s.num}</div>
            <div className="text-zinc-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}