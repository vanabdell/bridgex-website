'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Grâce à l'Academy, notre équipe maîtrise Power BI en quelques semaines. Les formations sont pratiques, directement applicables à nos données.",
    name: "Sarah M.",
    role: "Business Controller",
    company: "Danone",
    rating: 5,
  },
  {
    quote: "Le Maturity Scan nous a donné une vision claire de nos lacunes data. L'équipe conseil est réactive et vraiment orientée résultats.",
    name: "Thomas K.",
    role: "Head of Analytics",
    company: "ABN·AMRO",
    rating: 4.5,
  },
  {
    quote: "Power Up est une plateforme excellente. Les vidéos courtes et les exercices pratiques permettent d'apprendre à son rythme. Certificat obtenu en 3 semaines.",
    name: "Fatima B.",
    role: "Data Analyst",
    company: "SBM Offshore",
    rating: 5,
  },
  {
    quote: "La formation DAX avancé a transformé notre reporting financier. Nos tableaux de bord sont maintenant 10x plus rapides et bien plus lisibles.",
    name: "Marc V.",
    role: "CFO",
    company: "Louwman Group",
    rating: 4,
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star
        const half = !filled && rating >= star - 0.5
        return (
          <span key={star} className="text-sm relative inline-block">
            <span className="text-zinc-700">★</span>
            {(filled || half) && (
              <span
                className="absolute inset-0 text-yellow-400 overflow-hidden"
                style={{ width: filled ? '100%' : '50%' }}
              >
                ★
              </span>
            )}
          </span>
        )
      })}
      <span className="text-zinc-500 text-xs ml-1 mt-0.5">{rating}/5</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-6 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ce que disent nos clients
          </h2>
          <p className="text-zinc-400 text-sm">
            8,5/10 de satisfaction moyenne sur 20 000+ participants
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-yellow-400/20 transition-colors"
            >
              <Stars rating={t.rating} />

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400 font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
