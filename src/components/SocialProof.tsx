'use client'

import { motion } from 'framer-motion'
import { MapPin, MessageCircle, EuroIcon } from 'lucide-react'

const pillars = [
  {
    icon: MapPin,
    title: 'Lokale partner, professionele kwaliteit',
    description:
      'Wij kennen de regio en begrijpen wat lokale bedrijven nodig hebben. Persoonlijke afspraken zijn altijd mogelijk — geen gezichtsloos bureau.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: MessageCircle,
    title: 'Direct, persoonlijk contact',
    description:
      'Geen contactformulieren die verdwijnen. U bereikt ons direct — snel, eerlijk en zonder omwegen.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: EuroIcon,
    title: 'Geen verborgen kosten',
    description:
      'Wat wij afspreken, dat doen wij. Transparante offertes, heldere communicatie en geen verrassingen op de factuur.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
]

export default function SocialProof() {
  return (
    <section id="over-mij" className="py-24 px-4 sm:px-6 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Waarom Lunevo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Het vertrouwen van een top bureau,
            <br className="hidden sm:block" /> de zorg van een lokale partner.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Wij combineren professioneel ontwerp en ontwikkeling met de persoonlijke aandacht die
            grote bureaus simpelweg niet kunnen bieden.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className={`w-10 h-10 ${pillar.bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={20} className={pillar.color} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {[
            { value: '1+', label: 'Opgeleverde projecten' },
            { value: '< 2s', label: 'Gemiddelde laadtijd' },
            { value: '100%', label: 'Tevreden klanten' },
            { value: 'Gratis', label: 'Eerste kennismaking' },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-900/70 px-6 py-6 text-center">
              <div className="text-2xl font-extrabold text-indigo-400">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
