import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-black text-center px-6 overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      {/* Yellow glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,200,0,0.08) 0%, transparent 65%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-8">
          {/* Bridge SVG */}
          <svg width="24" height="24" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="14" width="12" height="6.7" rx="2" fill="#AE1C28"/>
            <rect x="0" y="20.7" width="12" height="6.6" fill="#fff"/>
            <rect x="0" y="27.3" width="12" height="6.7" rx="2" fill="#21468B"/>
            <path d="M11,24 Q22,7 33,24" fill="none" stroke="#F5C800" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="11" y1="24" x2="33" y2="24" stroke="#F5C800" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="24" x2="16" y2="17" stroke="#F5C800" strokeWidth="1.5"/>
            <line x1="22" y1="24" x2="22" y2="11" stroke="#F5C800" strokeWidth="1.5"/>
            <line x1="28" y1="24" x2="28" y2="17" stroke="#F5C800" strokeWidth="1.5"/>
            <rect x="32" y="14" width="12" height="6.7" rx="2" fill="#C1272D"/>
            <rect x="32" y="20.7" width="12" height="13.3" rx="2" fill="#C1272D"/>
            <polygon points="38,17 39.2,20.5 43,20.5 40,22.5 41.2,26 38,24 34.8,26 36,22.5 33,20.5 36.8,20.5"
              fill="#006233" transform="scale(0.48) translate(41,16)"/>
          </svg>
          Pays-Bas &nbsp;×&nbsp; Maroc
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-5">
          L&apos;expertise{' '}
          <span className="text-yellow-400">BI & IA</span>
          <br />
          au service de votre
          <br />
          transformation digitale
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Formations certifiantes Power BI, IA et Microsoft Office.
          E-learning Power Up. Conseil et accompagnement data.
          De l&apos;apprentissage à l&apos;impact mesurable.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all hover:-translate-y-0.5 no-underline">
            Essayer la démo gratuite
          </Link>
          <Link href="/academy"
            className="border border-zinc-700 text-white px-8 py-4 rounded-xl font-medium text-sm hover:border-zinc-400 transition-all no-underline">
            Voir le catalogue 2026
          </Link>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-800 rounded-2xl overflow-hidden max-w-2xl mx-auto">
          {[
            { num: '20 000+', label: 'professionnels formés' },
            { num: '8,5/10', label: 'satisfaction moyenne' },
            { num: '300+', label: 'organisations clientes' },
            { num: '7M+', label: 'vues LinkedIn & YouTube' },
          ].map((stat, i) => (
            <div key={i} className="py-5 px-4 text-center border-r border-zinc-800 last:border-r-0 bg-white/[0.02]">
              <div className="text-2xl font-bold text-yellow-400">{stat.num}</div>
              <div className="text-xs text-zinc-500 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}