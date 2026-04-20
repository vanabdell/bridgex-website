'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Une erreur est survenue.')
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ name: '', email: '', company: '', service: '', message: '' })

    } catch {
      setErrorMsg('Erreur réseau. Veuillez réessayer.')
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-white mb-3">
            Parlons de votre projet
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Démo gratuite, question sur une formation ou projet de conseil —
            nous répondons dans les 24h.
          </p>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-white font-bold text-xl mb-2">
              Message envoyé !
            </h2>
            <p className="text-zinc-400 text-sm mb-6">
              Nous vous répondons dans les 24 heures.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-colors"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@entreprise.com"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            {/* Company + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Votre entreprise"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Sélectionner...</option>
                  <option value="academy">BridgeX Academy</option>
                  <option value="conseil">BridgeX Conseil</option>
                  <option value="scan">Maturity Scan</option>
                  <option value="demo">Démo gratuite</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Décrivez votre projet ou votre question..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="bg-red-400/10 border border-red-400/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>

            <p className="text-zinc-600 text-xs text-center">
              Réponse garantie sous 24h · Pas de spam
            </p>

          </form>
        )}

      </div>
    </main>
  )
}