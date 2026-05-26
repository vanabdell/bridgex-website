'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-yellow-400 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-black/60 text-xs font-semibold tracking-widest uppercase mb-3">
          Prêt à commencer ?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          Transformez vos données en
          <br />
          avantage compétitif
        </h2>
        <p className="text-black/60 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
          Rejoignez 300+ organisations qui font confiance à BridgeX pour
          leur transformation data & IA. Démo gratuite — réponse sous 24h.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact"
            className="bg-black text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-zinc-900 transition-all hover:-translate-y-1 no-underline">
            Planifier une démo gratuite →
          </Link>
          <Link href="/academy"
            className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-black/10 transition-all no-underline">
            Explorer les formations
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap">
          {[
            '✓ Sans engagement',
            '✓ Réponse sous 24h',
            '✓ 20 000+ formés',
            '✓ Certifié Microsoft',
          ].map((item, i) => (
            <span key={i} className="text-black/60 text-xs font-medium">
              {item}
            </span>
          ))}
        </div>

      </motion.div>
    </section>
  )
}