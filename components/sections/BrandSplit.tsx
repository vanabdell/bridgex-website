'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = {
  academy: [
    'E-learning via Power Up (8 000 participants actifs)',
    'Formations en présentiel — Amersfoort, Casablanca ou chez vous',
    'Parcours IA : AI Aware → AI Skilled → AI Expert',
    'Préparation à la certification PL-300 Microsoft',
    'Contenu mis à jour toutes les 2 semaines',
    'Certificat numérique à l\'issue de chaque formation',
  ],
  conseil: [
    'BI & IA Maturity Scan pour évaluer votre maturité actuelle',
    'Mise en place de pipelines de données et Microsoft Fabric',
    'Hyperautomatisation et RPA pour réduire le travail manuel',
    'Migration Qlik / Tableau → Power BI',
    'Proof of Concept → déploiement progressif',
    'Consultants avec 10–20 ans d\'expérience terrain',
  ],
}

export default function BrandSplit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800"
    >

      {/* Academy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-zinc-900 p-14 relative overflow-hidden group hover:bg-zinc-800 transition-colors duration-300"
      >
        <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded tracking-widest uppercase mb-6">
          Academy
        </span>

        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          BridgeX <span className="text-yellow-400">Academy</span>
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
          Des formations Power BI, IA et Microsoft Office pour tous les niveaux —
          en salle, en ligne ou en parcours sur mesure pour vos équipes.
        </p>

        <ul className="space-y-3 mb-10">
          {features.academy.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
              {item}
            </motion.li>
          ))}
        </ul>

        <Link href="/academy"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all hover:-translate-y-0.5 no-underline">
          Découvrir l&apos;Academy →
        </Link>

        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-yellow-400/5 transition-all duration-300 group-hover:bg-yellow-400/10"
          style={{ clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)' }} />
      </motion.div>

      {/* Conseil */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-zinc-950 p-14 relative overflow-hidden group hover:bg-zinc-800 transition-colors duration-300"
      >
        <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded tracking-widest uppercase mb-6">
          Conseil
        </span>

        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          BridgeX <span className="text-yellow-400">Conseil</span>
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
          Experts Power BI, Power Apps et IA pour vous accompagner
          de l&apos;évaluation à l&apos;impact. Missions courtes ou longues,
          orientées autonomie de vos équipes.
        </p>

        <ul className="space-y-3 mb-10">
          {features.conseil.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
              {item}
            </motion.li>
          ))}
        </ul>

        <Link href="/conseil"
          className="inline-flex items-center gap-2 border border-zinc-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:border-zinc-300 hover:bg-white/5 transition-all no-underline">
          Parler à un expert →
        </Link>

        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-yellow-400/5 transition-all duration-300 group-hover:bg-yellow-400/10"
          style={{ clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)' }} />
      </motion.div>

    </motion.div>
  )
}