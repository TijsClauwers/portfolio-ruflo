function LunevoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="13" height="13" rx="2.5" stroke="#6366f1" strokeWidth="1.8" />
      <rect x="8" y="1" width="13" height="13" rx="2.5" fill="rgba(99,102,241,0.18)" stroke="#6366f1" strokeWidth="1.8" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LunevoMark />
          <span className="font-bold text-sm">
            Lu<span className="text-indigo-400">nevo</span>
          </span>
        </div>
        <p className="text-slate-500 text-xs text-center">
          © {new Date().getFullYear()} Lunevo — Webbureau, België
        </p>
        <div className="flex gap-4 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
          <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
