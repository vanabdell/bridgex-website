const clients = [
  { name: 'Rabobank', bg: 'bg-zinc-900', text: 'text-orange-500', border: 'border-orange-500/20' },
  { name: 'ABN·AMRO', bg: 'bg-zinc-900', text: 'text-teal-400', border: 'border-teal-400/20' },
  { name: 'Danone', bg: 'bg-zinc-900', text: 'text-blue-500', border: 'border-blue-500/20' },
  { name: 'Ahold Delhaize', bg: 'bg-zinc-900', text: 'text-green-500', border: 'border-green-500/20' },
  { name: 'CTOUCH', bg: 'bg-zinc-900', text: 'text-white', border: 'border-zinc-600' },
  { name: 'ONVZ', bg: 'bg-zinc-900', text: 'text-yellow-400', border: 'border-yellow-400/20' },
  { name: 'Qbuzz', bg: 'bg-yellow-400', text: 'text-black', border: 'border-transparent' },
  { name: 'hcs.', bg: 'bg-zinc-900', text: 'text-blue-900', border: 'border-zinc-700' },
  { name: 'for farmers', bg: 'bg-zinc-900', text: 'text-green-500', border: 'border-green-500/20' },
  { name: 'FITZ', bg: 'bg-blue-900', text: 'text-white', border: 'border-transparent' },
  { name: 'Louwman', bg: 'bg-blue-900', text: 'text-white', border: 'border-transparent' },
  { name: 'Enza Zaden', bg: 'bg-zinc-900', text: 'text-green-400', border: 'border-green-400/20' },
  { name: 'Brunel', bg: 'bg-zinc-900', text: 'text-red-500', border: 'border-red-500/20' },
  { name: 'SBM Offshore', bg: 'bg-zinc-900', text: 'text-orange-400', border: 'border-orange-400/20' },
  { name: 'ConQuaestor', bg: 'bg-zinc-900', text: 'text-zinc-200', border: 'border-zinc-600' },
  { name: 'HAN University', bg: 'bg-zinc-900', text: 'text-pink-500', border: 'border-pink-500/20' },
  { name: 'HU Utrecht', bg: 'bg-zinc-900', text: 'text-cyan-400', border: 'border-cyan-400/20' },
  { name: 'HvA Amsterdam', bg: 'bg-zinc-900', text: 'text-red-400', border: 'border-red-400/20' },
  { name: 'Zeeman', bg: 'bg-yellow-400', text: 'text-black', border: 'border-transparent' },
  { name: 'Van Lanschot', bg: 'bg-zinc-900', text: 'text-teal-600', border: 'border-teal-600/20' },
]

export default function ClientLogos() {
  return (
    <section className="bg-zinc-900 border-t border-b border-zinc-800 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ils nous font confiance
          </h2>
          <p className="text-zinc-400 text-sm mb-4">
            Des organisations leaders en Europe et au Maroc
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 px-4 py-2 rounded-full text-xs font-semibold">
            ⭐ 300+ organisations &nbsp;·&nbsp; 20 000+ professionnels formés
          </div>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-4 md:grid-cols-5 gap-px bg-zinc-700 border border-zinc-700 rounded-2xl overflow-hidden">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`${client.bg} flex items-center justify-center p-6 min-h-[80px] hover:brightness-110 transition-all duration-200`}
            >
              <span className={`${client.text} font-bold text-sm text-center leading-tight`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}