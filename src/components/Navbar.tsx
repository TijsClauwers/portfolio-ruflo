'use client'

import { useState } from 'react'
import Link from 'next/link'

function LunevoLogo() {
  return (
    <span
      style={{ width: 22, height: 22, position: 'relative', display: 'inline-block', flexShrink: 0 }}
      aria-hidden="true"
    >
      <span
        style={{
          position: 'absolute', left: 0, bottom: 0, width: 14, height: 14,
          border: '1.5px solid var(--accent)', borderRadius: 3,
        }}
      />
      <span
        style={{
          position: 'absolute', right: 0, top: 0, width: 14, height: 14,
          border: '1.5px solid var(--accent)', borderRadius: 3,
          background: 'rgba(255,158,59,.16)',
        }}
      />
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 50,
          display: 'flex', alignItems: 'center', gap: 12, padding: '8px 8px 8px 20px',
          background: 'rgba(19,19,23,.75)', backdropFilter: 'blur(18px)',
          border: '1px solid var(--rule-2)', borderRadius: 999,
          whiteSpace: 'nowrap',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            paddingRight: 16, borderRight: '1px solid var(--rule-2)',
          }}
        >
          <LunevoLogo />
          <span
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em',
              color: 'var(--ink)',
            }}
          >
            Lu<span style={{ color: 'var(--accent)' }}>nevo</span>
          </span>
        </Link>

        <ul
          style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden-mobile"
        >
          {[
            { label: 'Diensten', href: '#diensten' },
            { label: 'Proces',   href: '#proces'   },
            { label: 'Over',     href: '#over-mij' },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  display: 'block', padding: '8px 14px', fontSize: 13,
                  color: 'var(--ink-2)', borderRadius: 999,
                  transition: 'background .15s, color .15s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(242,236,224,.06)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--ink)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = ''
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '9px 16px', fontSize: 13, fontWeight: 500,
            background: 'var(--accent)', color: 'var(--bg)',
            borderRadius: 999, transition: 'background .15s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-2)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
        >
          Offerte →
        </Link>
      </nav>

      <style>{`
        @media (max-width: 820px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
