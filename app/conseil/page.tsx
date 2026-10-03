import Link from 'next/link'

// ── SVG Icons ────────────────────────────────────────────────────────────────

const IconMaturity = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5C800" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
    <path d="M11 8v6M8 11h6"/>
  </svg>
)

const IconDashboard = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="2"/>
    <rect x="14" y="3" width="7" height="5" rx="2"/>
    <rect x="14" y="12" width="7" height="9" rx="2"/>
    <rect x="3" y="16" width="7" height="5" rx="2"/>
  </svg>
)

const IconAutomation = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

const IconMigration = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3l4 4-4 4"/>
    <path d="M3 11V9a4 4 0 014-4h14"/>
    <path d="M7 21l-4-4 4-4"/>
    <path d="M21 13v2a4 4 0 01-4 4H3"/>
  </svg>
)

const IconAI = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="14" rx="3"/>
    <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
    <circle cx="9" cy="13" r="1" fill="#38bdf8"/>
    <circle cx="15" cy="13" r="1" fill="#38bdf8"/>
    <path d="M9 17c0-1 .8-2 3-2s3 1 3 2"/>
  </svg>
)

const IconCloud = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
  </svg>
)

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconMaturity />,
    iconBg: 'rgba(245,200,0,0.1)',
    glowColor: '#F5C800',
    title: 'BI & IA Maturity Scan',
    description: "Évaluez votre niveau de maturité actuel en BI et IA. Obtenez un plan d'action concret avec des recommandations personnalisées.",
    pillars: ['Stratégie', 'Architecture', 'Équipe & méthode', 'Qualité des données', 'Adoption', 'Culture data-driven'],
    cta: 'Demander un scan gratuit',
  },
  {
    icon: <IconDashboard />,
    iconBg: 'rgba(99,102,241,0.12)',
    glowColor: '#818cf8',
    title: 'Tableaux de bord Power BI',
    description: "Création, amélioration ou refonte de vos dashboards Power BI. Des tableaux de bord que vos équipes adorent utiliser.",
    pillars: ['Design UX/UI', 'DAX avancé', 'Data modelling', 'Storytelling', 'Performance', 'Formation incluse'],
    cta: 'Discuter de votre projet',
  },
  {
    icon: <IconAutomation />,
    iconBg: 'rgba(34,197,94,0.1)',
    glowColor: '#4ade80',
    title: 'Hyperautomatisation',
    description: "Réduisez le travail manuel avec RPA, Power Automate et des solutions IA. De l'automatisation traditionnelle à l'entreprise autonome.",
    pillars: ['Process Mining', 'RPA', 'Power Automate', 'AI & ML', 'Low-Code', 'BPM'],
    cta: 'Explorer les possibilités',
  },
  {
    icon: <IconMigration />,
    iconBg: 'rgba(251,146,60,0.1)',
    glowColor: '#fb923c',
    title: 'Migration BI',
    description: "Migration complète de Qlik, Tableau ou autres solutions vers Power BI. Votre équipe repart plus forte et autonome.",
    pillars: ['Audit existant', 'Mapping des rapports', 'Migration données', 'Formation équipes', 'Go-live', 'Support post-migration'],
    cta: 'Évaluer votre migration',
  },
  {
    icon: <IconAI />,
    iconBg: 'rgba(56,189,248,0.1)',
    glowColor: '#38bdf8',
    title: 'AI Talent Program',
    description: "Programme sur mesure pour développer les compétences IA de vos équipes. De AI Aware à AI Expert en 4 à 12 mois.",
    pillars: ['Niveau 1 — AI Aware', 'Niveau 2 — AI Skilled', 'Niveau 3 — AI Expert', 'Format hybride', 'Coaching inclus', '4 à 12 mois'],
    cta: 'Concevoir votre programme',
  },
  {
    icon: <IconCloud />,
    iconBg: 'rgba(168,85,247,0.1)',
    glowColor: '#c084fc',
    title: 'Microsoft Fabric & Data Platform',
    description: "Mise en place complète de votre plateforme data avec Microsoft Fabric, Databricks et pipelines de données modernes.",
    pillars: ['Data Factory', 'Lakehouse', 'Warehouse', 'Power BI intégré', 'Databricks', 'Azure'],
    cta: 'Parler à un architecte',
  },
]

const reasons = [
  {
    title: 'Experts terrain',
    desc: "Nos consultants ont 10 à 20 ans d'expérience en finance, ventes et opérations. Ils parlent votre langage.",
  },
  {
    title: 'Orientés autonomie',
    desc: "Notre objectif n'est pas de créer de la dépendance. Vos équipes repartent capables de continuer seules.",
  },
  {
    title: 'Approche Assess → Build → Impact',
    desc: "On commence toujours par comprendre votre situation avant de proposer une solution.",
  },
  {
    title: "Proof of Concept d'abord",
    desc: "On démarre sur un cas d'usage ciblé, on prouve la valeur, puis on étend progressivement.",
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ConseilPage() {
  return (
    <main className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <section className="bg-black px-6 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Get Responsive Conseil
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
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-200 flex flex-col relative overflow-hidden"
                style={{ ['--glow' as string]: service.glowColor }}>

                {/* Subtle corner glow */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-[0.07] translate-x-8 translate-y-8"
                  style={{ background: service.glowColor }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: service.iconBg }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-2.5 leading-snug">
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
                      className="text-xs bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-lg border border-zinc-700/60">
                      {pillar}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link href="/contact"
                  className="text-yellow-400 text-xs font-bold hover:text-yellow-300 transition-colors no-underline mt-auto">
                  {service.cta} →
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Get Responsive */}
      <section className="bg-zinc-900 border-t border-zinc-800 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Pourquoi Get Responsive
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
