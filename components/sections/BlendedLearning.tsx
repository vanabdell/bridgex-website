'use client'

const steps = [
  {
    num: '1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
    title: 'Formation structurée',
    desc: 'En salle ou à distance avec nos experts certifiés',
  },
  {
    num: '2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" opacity="0.7" />
      </svg>
    ),
    title: 'Plateforme E-Learning',
    desc: 'Power Up — vidéos courtes & exercices pratiques',
  },
  {
    num: '3',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    title: 'Application pratique',
    desc: 'Sur vos propres données et cas métier réels',
  },
  {
    num: '4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Coaching & accompagnement',
    desc: 'Ateliers post-formation, sessions Q&A, suivi personnalisé',
  },
  {
    num: '5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Impact Business',
    desc: 'Autonomie réelle, décisions plus rapides, valeur data mesurable',
    isOutcome: true,
  },
]

export default function BlendedLearning() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-yellow-400" />
            <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
              Notre méthode en 5 étapes
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Blended Learning : vers une adoption durable
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
            De l&apos;expertise à l&apos;impact mesurable. Une approche en 5 étapes
            qui garantit que vos équipes appliquent vraiment ce qu&apos;elles apprennent.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on md+ */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-stretch flex-1">

              {/* Card */}
              <div
                className={`
                  group relative flex-1 flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border
                  transition-all duration-200 cursor-default
                  hover:-translate-y-1
                  ${step.isOutcome
                    ? 'border-yellow-400/40 bg-yellow-400/[0.06] hover:border-yellow-400/60 hover:bg-yellow-400/10'
                    : 'border-white/[0.07] bg-white/[0.03] hover:border-yellow-400/30 hover:bg-yellow-400/[0.04]'
                  }
                `}
                style={{ backdropFilter: 'blur(12px)' }}
              >
                {/* Résultat badge for step 5 */}
                {step.isOutcome && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[9px] font-bold px-3 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
                    Résultat
                  </div>
                )}

                {/* Top row: number left, icon right */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border
                      ${step.isOutcome
                        ? 'bg-yellow-400 border-yellow-400 text-black'
                        : 'bg-yellow-400/10 border-yellow-400/35 text-yellow-400'
                      }
                    `}
                  >
                    {step.num}
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                    ${step.isOutcome ? 'bg-yellow-400/15 text-yellow-400' : 'bg-white/5 text-zinc-400 group-hover:text-yellow-400'}
                    transition-colors duration-200
                  `}>
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h4 className={`text-sm font-semibold leading-snug ${step.isOutcome ? 'text-yellow-400' : 'text-white'}`}>
                    {step.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                </div>

                {/* Outcome chips for step 5 */}
                {step.isOutcome && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/25 px-2.5 py-1 rounded-full font-semibold">
                      ROI mesurable
                    </span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/25 px-2.5 py-1 rounded-full font-semibold">
                      Autonomie data
                    </span>
                  </div>
                )}

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-colors duration-200
                  ${step.isOutcome ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' : 'bg-transparent group-hover:bg-yellow-400/20'}
                `} />
              </div>

              {/* Connector — horizontal arrow on desktop, vertical line on mobile */}
              {i < steps.length - 1 && (
                <>
                  {/* Desktop: horizontal arrow between cards */}
                  <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0 mb-10">
                    <div className="relative w-full">
                      <div className="h-px bg-gradient-to-r from-yellow-400/30 via-yellow-400/60 to-yellow-400/30 w-full" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                          <path d="M1 1L5 5L1 9" stroke="#F5C800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: vertical line between cards */}
                  <div className="flex md:hidden justify-center py-1">
                    <div className="relative flex flex-col items-center">
                      <div className="w-px h-6 bg-gradient-to-b from-yellow-400/60 to-yellow-400/20" />
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                        <path d="M1 1L5 5L9 1" stroke="#F5C800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                      </svg>
                    </div>
                  </div>
                </>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
