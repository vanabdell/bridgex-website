'use client'

import { useState } from 'react'

type Training = {
  name: string
  duration: string
  formats: string[]
  category: string
  description: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux'
}

const trainings: Training[] = [
  // Power BI
  { name: 'Power BI Utilisateur final', duration: '1h', formats: ['Power Up'], category: 'Power BI', level: 'Débutant', description: 'Apprenez à utiliser un tableau de bord Power BI de manière optimale.' },
  { name: 'Power BI Base 1', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Débutant', description: 'Des données au tableau de bord — les bases essentielles de Power BI.' },
  { name: 'Power BI Base 2', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Débutant', description: 'Bonnes pratiques pour des tableaux de bord performants et maintenables.' },
  { name: 'Power BI Base 3', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Intermédiaire', description: 'Les dernières fonctionnalités Power BI avec conseils IA intégrés.' },
  { name: 'DAX 1', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Intermédiaire', description: 'Maîtrisez le langage DAX pour créer vos propres calculs avancés.' },
  { name: 'DAX Avancé', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Avancé', description: 'DAX Query View, Calculation Groups et fonctions WINDOW.' },
  { name: 'Dashboard Design', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Intermédiaire', description: 'UX et UI design pour des tableaux de bord efficaces et convaincants.' },
  { name: 'Storytelling avec data', duration: '4h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Tous niveaux', description: 'Appliquez le storytelling à vos rapports pour convaincre avec les données.' },
  { name: 'Data Modelling', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Avancé', description: 'Modélisation avancée, Power Query et optimisation des performances.' },
  { name: 'Power BI Financier', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Intermédiaire', description: 'P&L, bilan et prévisions financières dans Power BI.' },
  { name: 'Power Query Avancé', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Power BI', level: 'Avancé', description: 'Langage M, API REST, fonctions personnalisées et gestion des erreurs.' },
  { name: 'PL-300 Préparation', duration: '8h', formats: ['Power Up'], category: 'Power BI', level: 'Avancé', description: 'Préparez et réussissez la certification officielle Microsoft Power BI.' },
  // IA & Digital
  { name: 'Littératie en IA (EU AI Act)', duration: '4h', formats: ['Présentiel', 'Power Up'], category: 'IA & Digital', level: 'Tous niveaux', description: 'Utilisez l\'IA de manière responsable et éthique dans votre organisation.' },
  { name: 'Fondamentaux IA', duration: '4h', formats: ['Présentiel', 'Power Up'], category: 'IA & Digital', level: 'Débutant', description: 'Méthode ROCK, prompt engineering, génération d\'images et chatbots IA.' },
  { name: 'Leadership en IA', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'IA & Digital', level: 'Intermédiaire', description: 'Déployez l\'IA stratégiquement avec l\'AI Model Canvas.' },
  { name: 'Powerful Prompting', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'IA & Digital', level: 'Tous niveaux', description: 'Maîtrisez ChatGPT avec des techniques concrètes et des exercices pratiques.' },
  { name: 'Adoption nouvelles technologies', duration: '4h', formats: ['Power Up'], category: 'IA & Digital', level: 'Tous niveaux', description: 'Accompagnez vos équipes dans l\'adoption de nouvelles technologies.' },
  { name: 'Certified KPI Professional', duration: '8h', formats: ['Power Up'], category: 'IA & Digital', level: 'Intermédiaire', description: 'Développez et exécutez une stratégie efficace de management par les KPI.' },
  // Power Platform
  { name: 'Introduction à Fabric', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Power Platform', level: 'Avancé', description: 'Solution d\'analyse tout-en-un Microsoft pour Data Engineers et développeurs.' },
  { name: 'Power Apps Base', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power Platform', level: 'Débutant', description: 'Créez votre première application sans code avec Power Apps et Automate.' },
  { name: 'Power Apps Avancé', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Power Platform', level: 'Avancé', description: 'Dataverse, performance, validation et composants avancés.' },
  { name: 'Figma pour Power BI', duration: '4h', formats: ['Power Up'], category: 'Power Platform', level: 'Intermédiaire', description: 'Concevez vos tableaux de bord dans Figma et transférez-les vers Power BI.' },
  // Microsoft Office
  { name: 'Excel Base Plus', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Microsoft Office', level: 'Débutant', description: 'Tableaux croisés dynamiques, XLOOKUP et tableaux dynamiques.' },
  { name: 'Excel Avancé 1', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Microsoft Office', level: 'Intermédiaire', description: 'Power Query, Power Pivot et modèles de données dans Excel.' },
  { name: 'Excel Avancé 2', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Microsoft Office', level: 'Avancé', description: 'Analyse What-If, macros VBA et lien avec Power BI.' },
  { name: 'Outlook efficace', duration: '1 jour / 8-12h', formats: ['Présentiel', 'Power Up'], category: 'Microsoft Office', level: 'Tous niveaux', description: 'Réduisez le temps passé dans Outlook et gagnez en productivité.' },
  { name: 'PowerPoint efficace', duration: '1 jour / 8h', formats: ['Présentiel', 'Power Up'], category: 'Microsoft Office', level: 'Tous niveaux', description: 'Créez des présentations percutantes et travaillez plus vite.' },
]

const categories = ['Tous', 'Power BI', 'IA & Digital', 'Power Platform', 'Microsoft Office']

const levelColors: Record<string, string> = {
  'Débutant': 'bg-green-400/10 text-green-400 border-green-400/20',
  'Intermédiaire': 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  'Avancé': 'bg-red-400/10 text-red-400 border-red-400/20',
  'Tous niveaux': 'bg-zinc-400/10 text-zinc-400 border-zinc-400/20',
}

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? trainings
    : trainings.filter(t => t.category === activeCategory)

  return (
    <main className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <section className="bg-black px-6 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            BridgeX Academy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Catalogue de formations 2026
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-8">
            Du débutant à l&apos;expert — en présentiel ou via Power Up.
            Curriculum mis à jour toutes les 2 semaines.
          </p>
          {/* Stats */}
          <div className="flex gap-6 flex-wrap">
            {[
              { num: '27', label: 'formations disponibles' },
              { num: '8 000+', label: 'utilisateurs Power Up' },
              { num: '2 semaines', label: 'cycle de mise à jour' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold text-lg">{s.num}</span>
                <span className="text-zinc-500 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs + Grid */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border
                  ${activeCategory === cat
                    ? 'bg-yellow-400 text-black border-yellow-400 font-bold'
                    : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white'
                  }`}
              >
                {cat}
                {cat !== 'Tous' && (
                  <span className="ml-2 text-xs opacity-60">
                    {trainings.filter(t => t.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-zinc-500 text-xs mb-6">
            {filtered.length} formation{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((training, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-zinc-800 transition-all duration-200 flex flex-col"
              >
                {/* Category label */}
                <p className="text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-3">
                  {training.category}
                </p>

                {/* Name */}
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {training.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">
                  {training.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800">

                  {/* Duration */}
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    ⏱ {training.duration}
                  </span>

                  {/* Level badge */}
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[training.level]}`}>
                    {training.level}
                  </span>

                </div>

                {/* Format badges */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {training.formats.map((format, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-1 rounded-md font-medium
                        ${format === 'Power Up'
                          ? 'bg-yellow-400/10 text-yellow-400'
                          : 'bg-blue-400/10 text-blue-400'
                        }`}
                    >
                      {format}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}