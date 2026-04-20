import Link from 'next/link'

const services = [
  {
    icon: '🔍',
    title: 'BI & IA Maturity Scan',
    description: 'Évaluez votre niveau de maturité actuel en BI et IA. Obtenez un plan d\'action concret avec des recommandations personnalisées.',
    pillars: ['Stratégie', 'Architecture', 'Équipe & méthode', 'Qualité des données', 'Adoption', 'Culture data-driven'],
    cta: 'Demander un scan gratuit',
  },
  {
    icon: '📊',
    title: 'Tableaux de bord Power BI',
    description: 'Création, amélioration ou refonte de vos dashboards Power BI. Des tableaux de bord que vos équipes adorent utiliser.',
    pillars: ['Design UX/UI', 'DAX avancé', 'Data modelling', 'Storytelling', 'Performance', 'Formation incluse'],
    cta: 'Discuter de votre projet',
  },
  {
    icon: '⚡',
    title: 'Hyperautomatisation',
    description: 'Réduisez le travail manuel avec RPA, Power Automate et des solutions IA. De l\'automatisation traditionnelle à l\'entreprise autonome.',
    pillars: ['Process Mining', 'RPA', 'Power Automate', 'AI & ML', 'Low-Code', 'BPM'],
    cta: 'Explorer les possibilités',
  },
  {
    icon: '🔄',
    title: 'Migration BI',
    description: 'Migration complète de Qlik, Tableau ou autres solutions vers Power BI. Votre équipe repart plus forte et autonome.',
    pillars: ['Audit existant', 'Mapping des rapports', 'Migration données', 'Formation équipes', 'Go-live', 'Support post-migration'],
    cta: 'Évaluer votre migration',
  },
  {
    icon: '🤖',
    title: 'AI Talent Program',
    description: 'Programme sur mesure pour développer les compétences IA de vos équipes. De AI Aware à AI Expert en 4 à 12 mois.',
    pillars: ['Niveau 1 — AI Aware', 'Niveau 2 — AI Skilled', 'Niveau 3 — AI Expert', 'Format hybride', 'Coaching inclus', '4 à 12 mois'],
    cta: 'Concevoir votre programme',
  },
  {
    icon: '☁️',
    title: 'Microsoft Fabric & Data Platform',
    description: 'Mise en place complète de votre plateforme data avec Microsoft Fabric, Databricks et pipelines de données modernes.',
    pillars: ['Data Factory', 'Lakehouse', 'Warehouse', 'Power BI intégré', 'Databricks', 'Azure'],
    cta: 'Parler à un architecte',
  },
]

const reasons = [
  {
    title: 'Experts terrain',
    desc: 'Nos consultants ont 10 à 20 ans d\'expérience en finance, ventes et opérations. Ils parlent votre langage.',
  },
  {
    title: 'Orientés autonomie',
    desc: 'Notre objectif n\'est pas de créer de la dépendance. Vos équipes repartent capables de continuer seules.',
  },
  {
    title: 'Approche Assess → Build → Impact',
    desc: 'On commence toujours par comprendre votre situation avant de proposer une solution.',
  },
  {
    title: 'Proof of Concept d\'abord',
    desc: 'On démarre sur un cas d\'usage ciblé, on prouve la valeur, puis on étend progressivement.',
  },
]

export default function ConseilPage() {
  return (
    <main className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <section className="bg-black px-6 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            BridgeX Conseil
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            De l&apos;évaluation à l&apos;impact
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-8">
            Experts Power BI, Power Apps et IA pour accompagner votre transformation.
            Missions courtes ou longues — toujours orientées autonomie de vos équipes.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all hover:-translate-y-0.5 no-underline">
            Parler à un expert →
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Nos services
            </p>
            <h2 className="text-3xl font-bold text-white">
              Ce que nous pouvons faire pour vous
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-zinc-800 transition-all duration-200 flex flex-col">

                {/* Icon */}
                <div className="text-3xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Pillars */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.pillars.map((pillar, j) => (
                    <span key={j}
                      className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md border border-zinc-700">
                      {pillar}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link href="/contact"
                  className="text-yellow-400 text-xs font-semibold hover:text-yellow-300 transition-colors no-underline mt-auto">
                  {service.cta} →
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BridgeX */}
      <section className="bg-zinc-900 border-t border-zinc-800 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Pourquoi BridgeX
            </p>
            <h2 className="text-3xl font-bold text-white">
              Notre approche est différente
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div key={i}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">
                      {reason.title}
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-yellow-400 px-6 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Prêt à transformer vos données en impact ?
          </h2>
          <p className="text-black/60 text-sm mb-7">
            Commençons par un échange de 30 minutes — gratuit, sans engagement.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-zinc-900 transition-all hover:-translate-y-0.5 no-underline">
            Planifier un appel gratuit →
          </Link>
        </div>
      </section>

    </main>
  )
}