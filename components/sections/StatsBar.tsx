const stats = [
  { num: '20 000+', label: 'participants formés' },
  { num: '8,5/10', label: 'score de satisfaction' },
  { num: '300+', label: 'organisations clientes' },
  { num: '7M+', label: 'vues sur les réseaux' },
]

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-yellow-400 -mt-16 relative z-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="py-10 px-6 text-center border-r border-black/10 last:border-r-0"
        >
          <div className="text-3xl font-bold text-black">{stat.num}</div>
          <div className="text-xs text-black/60 mt-1 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}