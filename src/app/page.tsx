import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const marqueeItems = [
  'Next.js', 'Tailwind CSS', 'TypeScript', 'SEO-geoptimaliseerd', 'Maatwerk CMS',
  'Mobiel-first', 'Snelle laadtijden', 'Framer Motion', 'Maatwerk Design',
  'Performance', 'Toegankelijkheid', 'LLM SEO', 'AI-zichtbaarheid',
]

function MarqueeStrip() {
  const repeated = [...marqueeItems, ...marqueeItems]
  return (
    <div className="py-5 border-y border-white/5 bg-slate-900/30 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 text-xs font-medium text-slate-500 uppercase tracking-widest"
          >
            <span className="w-1 h-1 rounded-full bg-indigo-500/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const serviceHighlights = [
  { label: 'Maatwerk CMS',             color: 'bg-orange-500/10  text-orange-400'  },
  { label: 'SEO-geoptimaliseerd',       color: 'bg-indigo-500/10  text-indigo-400'  },
  { label: 'Website beheer',            color: 'bg-emerald-500/10 text-emerald-400' },
  { label: 'AI-zichtbaarheid (LLM SEO)', color: 'bg-violet-500/10  text-violet-400'  },
]

function ServiceTeaser() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">Wat wij doen</p>
            <h2 className="text-3xl font-bold">Alles wat uw bedrijf online nodig heeft</h2>
          </div>
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium shrink-0"
          >
            Bekijk alle diensten <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {serviceHighlights.map((s) => (
            <Link
              key={s.label}
              href="/diensten"
              className="flex items-center gap-3 bg-slate-900/50 border border-white/5 hover:border-white/10 rounded-xl px-4 py-4 group transition-all hover:-translate-y-0.5"
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${s.color.split(' ')[0]}`} style={{ background: 'currentColor' }} />
              <span className={`text-sm font-medium ${s.color.split(' ')[1]}`}>{s.label}</span>
              <ArrowRight size={12} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsStrip() {
  const stats = [
    { value: '1+',     label: 'Opgeleverde projecten' },
    { value: '< 2s',   label: 'Gemiddelde laadtijd'   },
    { value: '100%',   label: 'Tevreden klanten'       },
    { value: 'Gratis', label: 'Eerste kennismaking'    },
  ]
  return (
    <div className="px-4 sm:px-6 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
        {stats.map((s) => (
          <div key={s.label} className="bg-slate-900/70 px-6 py-6 text-center">
            <div className="text-2xl font-extrabold text-indigo-400">{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CtaBanner() {
  return (
    <section className="px-4 sm:px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-indigo-500/15 bg-gradient-to-br from-indigo-500/8 to-transparent overflow-hidden px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2">Klaar om online te gaan?</h2>
            <p className="text-slate-400 text-sm max-w-md">
              Gratis eerste gesprek. Wij luisteren naar uw noden en geven u een eerlijke offerte — zonder verplichtingen.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative shrink-0 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            Offerte aanvragen <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <ServiceTeaser />
      <StatsStrip />
      <CtaBanner />
      <Footer />
    </main>
  )
}
