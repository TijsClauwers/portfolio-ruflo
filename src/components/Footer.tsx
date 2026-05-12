import Link from 'next/link'

function LunevoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="13" height="13" rx="2.5" stroke="#ff9e3b" strokeWidth="1.8" />
      <rect x="8" y="1" width="13" height="13" rx="2.5" fill="rgba(255,158,59,0.18)" stroke="#ff9e3b" strokeWidth="1.8" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <LunevoMark />
          <span className="font-bold text-sm">
            Lu<span style={{ color: '#ff9e3b' }}>nevo</span>
          </span>
        </Link>
        <p className="text-slate-400 text-xs text-center">
          © {new Date().getFullYear()} Lunevo — Webbureau, België
          <span className="block sm:inline sm:ml-2 text-slate-500">BTW BE 1036.645.433</span>
        </p>
        <a
          href="#contact"
          className="text-xs text-slate-400 underline underline-offset-2 hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  )
}
