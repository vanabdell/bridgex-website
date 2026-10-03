'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '/academy', label: 'Academy' },
    { href: '/conseil', label: 'Conseil' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="flex items-center justify-between px-5 sm:px-8 py-2 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group flex-shrink-0">
          <div className="relative h-10 sm:h-12 w-36 sm:w-44 flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Get Responsive"
              fill
              className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors no-underline
                  ${pathname === link.href
                    ? 'text-[#1B3A8C] font-semibold'
                    : 'text-gray-500 hover:text-[#1B3A8C]'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-bold transition-all no-underline hover:-translate-y-0.5 flex-shrink-0"
          style={{ background: '#F5C800', color: '#1B3A8C' }}
        >
          Démo gratuite
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          style={{ color: '#1B3A8C' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen
            ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )
          }
        </button>

      </nav>

      {/* Mobile menu — full-screen overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white z-40 flex flex-col px-6 pt-8 pb-10 overflow-y-auto">

          <div className="flex flex-col gap-1 flex-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold py-4 border-b border-gray-100 no-underline transition-colors
                  ${pathname === link.href ? 'text-[#1B3A8C]' : 'text-gray-700 hover:text-[#1B3A8C]'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 text-base font-bold text-center py-4 rounded-xl no-underline block"
            style={{ background: '#F5C800', color: '#1B3A8C' }}
            onClick={() => setMenuOpen(false)}
          >
            Démo gratuite →
          </Link>

          <p className="text-center text-xs text-gray-400 mt-4">
            ✓ Sans engagement &nbsp;·&nbsp; ✓ Réponse sous 24h
          </p>

        </div>
      )}
    </>
  )
}
