'use client'

import { motion } from 'framer-motion'
import { MapPin, MessageCircle, EuroIcon, Palette, LayoutDashboard, Shield, Wrench, Search } from 'lucide-react'

type SanityService = {
  _id: string
  title: string
  description: string
  tags: string[]
  colorTheme: 'indigo' | 'violet' | 'emerald' | 'orange'
  iconName: 'Palette' | 'LayoutDashboard' | 'Shield' | 'Wrench' | 'Search'
}

const defaultServices: SanityService[] = [
  {
    _id: 'default-1',
    title: 'Maatwerk CMS',
    description: "Beheer uw eigen content via een eenvoudig dashboard. Teksten, afbeeldingen en pagina's aanpassen wanneer u wil — geen technische kennis nodig.",
    tags: ['Sanity CMS', 'Eigen beheer', 'Geen technische kennis'],
    colorTheme: 'orange',
    iconName: 'LayoutDashboard',
  },
  {
    _id: 'default-2',
    title: 'SEO-geoptimaliseerd',
    description: 'Next.js-sites laden razendsnel en scoren uitstekend op Google. Wij implementeren structured data, correcte meta-tags en een sitemap voor maximale vindbaarheid.',
    tags: ['Structured data', 'Meta-tags', 'Sitemap', 'Core Web Vitals'],
    colorTheme: 'indigo',
    iconName: 'Search',
  },
  {
    _id: 'default-3',
    title: 'Website beheer',
    description: 'Geen zorgen over updates, beveiliging of downtime. Wij houden alles draaiende zodat u zich volledig op uw zaak kunt focussen.',
    tags: ['Onderhoud', 'Monitoring', 'Geen zorgen'],
    colorTheme: 'emerald',
    iconName: 'Wrench',
  },
]

const colorMap = {
  indigo:  { gradientFrom: 'rgba(99,102,241,0.12)',  iconColor: 'text-indigo-400',  iconBg: 'bg-indigo-500/10',  border: 'border-indigo-500/20'  },
  violet:  { gradientFrom: 'rgba(139,92,246,0.12)',  iconColor: 'text-violet-400',  iconBg: 'bg-violet-500/10',  border: 'border-violet-500/20'  },
  emerald: { gradientFrom: 'rgba(16,185,129,0.10)',  iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  orange:  { gradientFrom: 'rgba(249,115,22,0.10)',  iconColor: 'text-orange-400',  iconBg: 'bg-orange-500/10',  border: 'border-orange-500/20'  },
}

const iconMap = { Palette, LayoutDashboard, Shield, Wrench, Search }

const steps = [
  { number: '01', title: 'Vrijblijvend gesprek',  description: 'We leren uw bedrijf kennen. Wat moet de site bereiken? Wie is uw klant? Geen technische kennis vereist.' },
  { number: '02', title: 'Ontwerp op maat',       description: 'We ontwerpen vanuit uw merk. U ziet het eindresultaat voor we ook maar één regel code schrijven.' },
  { number: '03', title: 'Ontwikkeling',           description: 'We bouwen in Next.js — snel, veilig, volledig op maat. U volgt de voortgang en geeft feedback.' },
  { number: '04', title: 'Lancering & beheer',     description: 'Live op uw domein, getest op elk toestel. Daarna zorgen wij voor onderhoud zodat u zich kunt focussen.' },
]

const pillars = [
  { icon: MapPin,          title: 'Lokale partner',        description: 'Persoonlijke afspraken zijn altijd mogelijk — geen gezichtsloos bureau.',                      color: 'text-indigo-400',  bg: 'bg-indigo-500/10'  },
  { icon: MessageCircle,   title: 'Direct contact',         description: 'Geen contactformulieren die verdwijnen. U bereikt ons direct — snel en eerlijk.',              color: 'text-violet-400',  bg: 'bg-violet-500/10'  },
  { icon: EuroIcon,        title: 'Geen verborgen kosten',  description: 'Transparante offertes, heldere communicatie en geen verrassingen op de factuur.',              color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
]

const stats = [
  { value: '1+',     label: 'Opgeleverde projecten' },
  { value: '< 2s',   label: 'Gemiddelde laadtijd'   },
  { value: '100%',   label: 'Tevreden klanten'       },
  { value: 'Gratis', label: 'Eerste kennismaking'    },
]

function fadeUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0  },
    viewport:   { once: true, margin: '-40px' },
    transition: { duration: 0.55, delay },
  }
}

export default function BentoGrid({ services }: { services: SanityService[] }) {
  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <section id="diensten" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* ── A: Services — 2 cols wide ── */}
        <motion.div
          {...fadeUp(0)}
          className="md:col-span-2 bg-slate-900/50 border border-white/10 rounded-3xl p-8 flex flex-col gap-6"
        >
          <div>
            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Wat wij aanbieden
            </p>
            <h2 className="text-2xl font-bold">Alles wat uw bedrijf online nodig heeft</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 flex-1">
            {displayServices.map((service, i) => {
              const colors = colorMap[service.colorTheme] ?? colorMap.indigo
              const Icon = iconMap[service.iconName] ?? Palette
              return (
                <motion.div
                  key={service._id}
                  {...fadeUp(0.1 + i * 0.08)}
                  className={`border ${colors.border} rounded-2xl p-4 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-200`}
                  style={{ background: `linear-gradient(150deg, ${colors.gradientFrom} 0%, transparent 60%), rgba(15,23,42,0.4)` }}
                >
                  <div className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                    <Icon size={15} className={colors.iconColor} />
                  </div>
                  <h3 className="text-sm font-semibold">{service.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── B: Stats — 1 col, spans 2 rows ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="md:row-span-2 bg-gradient-to-b from-indigo-500/8 to-transparent border border-indigo-500/15 rounded-3xl p-8 flex flex-col gap-8"
        >
          <div>
            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Lunevo in cijfers
            </p>
            <h3 className="text-lg font-bold leading-snug">Resultaten die voor zich spreken</h3>
          </div>

          <div className="flex flex-col gap-7 flex-1">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(0.2 + i * 0.07)}>
                <span className="block text-4xl font-black text-indigo-400 leading-none">{stat.value}</span>
                <span className="block text-slate-400 text-sm mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-5">
            <p className="text-slate-500 text-xs leading-relaxed">
              Elk project behandeld alsof het ons eigen merk is.
            </p>
          </div>
        </motion.div>

        {/* ── C: Why Lunevo — 2 cols wide ── */}
        <motion.div
          {...fadeUp(0.15)}
          id="over-mij"
          className="md:col-span-2 bg-slate-900/50 border border-white/10 rounded-3xl p-8 flex flex-col gap-6"
        >
          <div>
            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Waarom Lunevo
            </p>
            <h2 className="text-2xl font-bold leading-snug">
              Het vertrouwen van een top bureau,{' '}
              <span className="text-slate-400 font-normal">de zorg van een lokale partner.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div key={pillar.title} {...fadeUp(0.2 + i * 0.08)} className="flex flex-col gap-3">
                  <div className={`w-8 h-8 ${pillar.bg} rounded-lg flex items-center justify-center`}>
                    <Icon size={15} className={pillar.color} />
                  </div>
                  <h3 className="text-sm font-semibold">{pillar.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── D: Process — full width ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="md:col-span-3 bg-slate-900/30 border border-white/5 rounded-3xl p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Het proces
              </p>
              <h2 className="text-2xl font-bold">Hoe werkt het?</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Van eerste gesprek tot lancering — helder en zonder verrassingen.
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden sm:block absolute top-[1.2rem] left-[6%] right-[6%] h-px bg-white/5" />

            {steps.map((step, i) => (
              <motion.div key={step.number} {...fadeUp(0.25 + i * 0.08)} className="flex flex-col gap-3">
                <div className="relative z-10 w-10 h-10 rounded-full border border-indigo-500/30 bg-slate-950 flex items-center justify-center self-start">
                  <span className="text-[11px] font-bold text-indigo-400 tracking-widest">{step.number}</span>
                </div>
                <h3 className="text-sm font-bold">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
