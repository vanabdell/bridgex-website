const steps = [
  {
    num: '1',
    icon: '🎓',
    title: 'Formation structurée',
    desc: 'En salle ou à distance avec nos experts certifiés',
  },
  {
    num: '2',
    icon: '💻',
    title: 'Plateforme E-Learning',
    desc: 'Power Up — vidéos courtes & exercices pratiques',
  },
  {
    num: '3',
    icon: '🛠️',
    title: 'Application pratique',
    desc: 'Sur vos propres données et cas métier réels',
  },
  {
    num: '4',
    icon: '🤝',
    title: 'Coaching & accompagnement',
    desc: 'Ateliers post-formation, sessions Q&A, suivi personnalisé',
  },
  {
    num: '5',
    icon: '🚀',
    title: 'Impact Business',
    desc: 'Autonomie réelle, décisions plus rapides, valeur data mesurable',
  },
]

export default function BlendedLearning() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Notre méthode
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Blended Learning : vers une adoption durable
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
            De l&apos;expertise à l&apos;impact mesurable. Une approche en 5 étapes
            qui garantit que vos équipes appliquent vraiment ce qu&apos;elles apprennent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-zinc-800 rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-8 relative
                ${i === 4
                  ? 'bg-yellow-400/10 border border-yellow-400/30'
                  : 'bg-zinc-900 hover:bg-zinc-800'
                } transition-colors duration-200`}
            >
              {/* Number */}
              <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-black font-bold text-sm">{step.num}</span>
              </div>

              {/* Icon */}
              <span className="text-2xl mb-3">{step.icon}</span>

              {/* Text */}
              <h4 className="text-white text-sm font-semibold mb-2">{step.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{step.desc}</p>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}