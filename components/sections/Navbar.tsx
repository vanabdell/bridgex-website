'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-8 py-2 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline group">

        {/* Logo image */}
        <div className="relative h-12 w-44 flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="Get Responsive"
            fill
            className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Divider + subtitle */}
        <div className="hidden md:flex flex-col justify-center border-l border-gray-200 pl-3">
          <span
            className="text-xs font-black tracking-wide"
            style={{ color: '#1B3A8C' }}
          >
            MOROCCO
          </span>
          <span className="text-gray-400 text-[10px] tracking-wide">
            Powered by BridgeX
          </span>
        </div>

      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <Link href="/academy"
            className="text-gray-500 hover:text-[#1B3A8C] text-sm font-medium transition-colors no-underline">
            Academy
          </Link>
        </li>
        <li>
          <Link href="/conseil"
            className="text-gray-500 hover:text-[#1B3A8C] text-sm font-medium transition-colors no-underline">
            Conseil
          </Link>
        </li>
        <li>
          <Link href="/contact"
            className="text-gray-500 hover:text-[#1B3A8C] text-sm font-medium transition-colors no-underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <Link href="/contact"
        className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-bold transition-all no-underline hover:-translate-y-0.5"
        style={{ background: '#F5C800', color: '#1B3A8C' }}>
        Démo gratuite
      </Link>

      {/* Mobile burger */}
      <button
        className="md:hidden text-2xl"
        style={{ color: '#1B3A8C' }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 px-8 py-6 flex flex-col gap-4 md:hidden shadow-md">
          <Link href="/academy"
            className="text-gray-500 text-sm font-medium no-underline"
            onClick={() => setMenuOpen(false)}>
            Academy
          </Link>
          <Link href="/conseil"
            className="text-gray-500 text-sm font-medium no-underline"
            onClick={() => setMenuOpen(false)}>
            Conseil
          </Link>
          <Link href="/contact"
            className="text-gray-500 text-sm font-medium no-underline"
            onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/contact"
            className="text-sm font-bold text-center px-5 py-2.5 rounded-lg no-underline"
            style={{ background: '#F5C800', color: '#1B3A8C' }}
            onClick={() => setMenuOpen(false)}>
            Démo gratuite
          </Link>
        </div>
      )}

    </nav>
  )
}