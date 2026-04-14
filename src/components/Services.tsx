'use client'

import { motion } from 'framer-motion'
import { Palette, LayoutDashboard, Shield, Wrench } from 'lucide-react'

type SanityService = {
  _id: string
  title: string
  description: string
  tags: string[]
  colorTheme: 'indigo' | 'violet' | 'emerald' | 'orange'
  iconName: 'Palette' | 'LayoutDashboard' | 'Shield' | 'Wrench'
}

const colorMap = {
  indigo: {
    gradientFrom: 'rgba(99,102,241,0.12)',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    border: 'border-indigo-500/15',
  },
  violet: {
    gradientFrom: 'rgba(139,92,246,0.12)',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    border: 'border-violet-500/15',
  },
  emerald: {
    gradientFrom: 'rgba(16,185,129,0.1)',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    border: 'border-emerald-500/15',
  },
  orange: {
    gradientFrom: 'rgba(249,115,22,0.1)',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    border: 'border-orange-500/15',
  },
}

const iconMap = { Palette, LayoutDashboard, Shield, Wrench }

export default function Services({ services }: { services: SanityService[] }) {
  return (
    <section id="diensten" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Wat wij aanbieden
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Alles wat uw bedrijf online nodig heeft
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Van eerste ontwerp tot lancering en daarna — wij begeleiden u in elke stap van het proces.
          </p>
        </motion.div>

        {services.length === 0 ? (
          <p className="text-center text-slate-500 text-sm">
            Geen diensten gevonden. Voeg diensten toe via het CMS op{' '}
            <a href="/studio" className="text-indigo-400 underline">/studio</a>.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => {
              const colors = colorMap[service.colorTheme] ?? colorMap.indigo
              const Icon = iconMap[service.iconName] ?? Palette
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative border ${colors.border} rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300`}
                  style={{
                    background: `linear-gradient(160deg, ${colors.gradientFrom} 0%, transparent 60%), rgba(15,23,42,0.5)`,
                  }}
                >
                  <div className={`w-10 h-10 ${colors.iconBg} rounded-xl flex items-center justify-center`}>
                    <Icon size={20} className={colors.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                    {service.tags?.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs bg-white/5 border border-white/8 text-slate-300 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
