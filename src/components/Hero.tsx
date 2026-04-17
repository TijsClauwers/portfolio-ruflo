'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Search, Smartphone, LayoutDashboard, Clock, Star } from 'lucide-react'

/* ── Floating feature cards ────────────────────────────────── */

function FloatCard({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function VisualPanel() {
  return (
    <div className="relative w-full h-[380px] select-none">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Performance score card */}
      <FloatCard delay={0.5} className="absolute top-4 left-0">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/30 w-44">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-emerald-500/15 rounded-lg flex items-center justify-center">
              <Zap size={14} className="text-emerald-400" />
            </div>
            <span className="text-xs font-semibold text-slate-300">Performance</span>
          </div>
          <div className="flex items-end gap-1.5 mb-2">
            <span className="text-3xl font-black text-white">98</span>
            <span className="text-slate-500 text-sm mb-0.5">/100</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '98%' }} />
          </div>
        </div>
      </FloatCard>

      {/* Mobile-first card */}
      <FloatCard delay={0.7} className="absolute top-2 right-0">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/30 w-40">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 bg-indigo-500/15 rounded-lg flex items-center justify-center">
              <Smartphone size={14} className="text-indigo-400" />
            </div>
            <span className="text-xs font-semibold text-slate-300">Mobiel-first</span>
          </div>
          {/* Mini phone outline */}
          <div className="mx-auto w-12 h-16 rounded-xl border-2 border-indigo-500/30 flex flex-col items-center justify-center gap-1">
            <div className="w-6 h-1 bg-indigo-500/40 rounded-full" />
            <div className="w-5 h-1 bg-indigo-500/20 rounded-full" />
            <div className="w-6 h-1 bg-indigo-500/20 rounded-full" />
            <div className="w-4 h-4 bg-indigo-500/20 rounded-lg mt-1" />
          </div>
        </div>
      </FloatCard>

      {/* SEO card */}
      <FloatCard delay={0.9} className="absolute top-1/2 -translate-y-1/2 left-4">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/30 w-48">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-violet-500/15 rounded-lg flex items-center justify-center">
              <Search size={14} className="text-violet-400" />
            </div>
            <span className="text-xs font-semibold text-slate-300">SEO-score</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { label: 'Indexeerbaar', ok: true },
              { label: 'Meta tags', ok: true },
              { label: 'Snelheid', ok: true },
              { label: 'Structured data', ok: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{item.label}</span>
                <span className="text-[10px] font-semibold text-emerald-400">✓</span>
              </div>
            ))}
          </div>
        </div>
      </FloatCard>

      {/* CMS card */}
      <FloatCard delay={1.1} className="absolute bottom-8 right-4">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/30 w-44">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-orange-500/15 rounded-lg flex items-center justify-center">
              <LayoutDashboard size={14} className="text-orange-400" />
            </div>
            <span className="text-xs font-semibold text-slate-300">Maatwerk CMS</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-2 bg-slate-700 rounded-full w-full" />
            <div className="h-2 bg-slate-700 rounded-full w-3/4" />
            <div className="flex gap-1.5 mt-1">
              <div className="h-6 bg-indigo-500/20 border border-indigo-500/20 rounded-md flex-1 flex items-center justify-center">
                <span className="text-[9px] text-indigo-400">Opslaan</span>
              </div>
              <div className="h-6 bg-slate-800 rounded-md flex-1" />
            </div>
          </div>
        </div>
      </FloatCard>

      {/* Laadtijd badge */}
      <FloatCard delay={1.3} className="absolute bottom-4 left-2">
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
          <Clock size={12} className="text-indigo-400" />
          <span className="text-xs font-semibold text-indigo-300">{'< 2s'} laadtijd</span>
        </div>
      </FloatCard>

      {/* Stars badge */}
      <FloatCard delay={1.5} className="absolute top-1/2 right-2 -translate-y-4">
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-lg">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
      </FloatCard>
    </div>
  )
}

/* ── Hero ──────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Left: copy ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            Beschikbaar voor nieuwe projecten
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-light leading-[1.08] tracking-tight mb-6"
          >
            Websites die mensen
            <br />
            <span className="font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              bijblijven.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md"
          >
            Van lokale KMO&apos;s tot gedurfde merken — wij bouwen snelle, mooie digitale ervaringen
            op maat van uw verhaal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Offerte aanvragen
              <ArrowRight size={16} />
            </a>
            <a
              href="#diensten"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Onze aanpak bekijken
            </a>
          </motion.div>
        </div>

        {/* ── Right: floating cards ── */}
        <VisualPanel />
      </div>
    </section>
  )
}
