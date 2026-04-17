'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-black border-b border-zinc-800 sticky top-0 z-50">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center"
          style={{ clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)' }}>
          <span className="text-black font-bold text-sm">B</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-base">BridgeX</span>
          <span className="text-yellow-400 text-[9px] font-semibold tracking-widest uppercase">
            Powered by Get Responsive
          </span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        <li><Link href="/academy" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">Academy</Link></li>
        <li><Link href="/conseil" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">Conseil</Link></li>
        <li><Link href="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">Contact</Link></li>
      </ul>

      {/* CTA button */}
      <Link href="/contact"
        className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-yellow-500 transition-colors no-underline">
        Démo gratuite
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black border-b border-zinc-800 px-10 py-6 flex flex-col gap-4 md:hidden">
          <Link href="/academy" className="text-zinc-400 hover:text-white text-sm no-underline" onClick={() => setMenuOpen(false)}>Academy</Link>
          <Link href="/conseil" className="text-zinc-400 hover:text-white text-sm no-underline" onClick={() => setMenuOpen(false)}>Conseil</Link>
          <Link href="/contact" className="text-zinc-400 hover:text-white text-sm no-underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact"
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg text-sm font-bold text-center no-underline"
            onClick={() => setMenuOpen(false)}>
            Démo gratuite
          </Link>
        </div>
      )}

    </nav>
  )
}