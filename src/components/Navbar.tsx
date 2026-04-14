'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Werk', href: '#portfolio' },
  { label: 'Over ons', href: '#over-mij' },
]

function LunevoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="13" height="13" rx="2.5" stroke="#6366f1" strokeWidth="1.8" />
      <rect x="8" y="1" width="13" height="13" rx="2.5" fill="rgba(99,102,241,0.18)" stroke="#6366f1" strokeWidth="1.8" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <LunevoMark />
          <span className="font-bold text-lg tracking-tight">
            Lu<span className="text-indigo-400">nevo</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-md hover:shadow-indigo-500/25"
        >
          Offerte aanvragen
        </a>

        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/5 px-4 pb-4"
          >
            <ul className="flex flex-col gap-3 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-1 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors"
                >
                  Offerte aanvragen
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
