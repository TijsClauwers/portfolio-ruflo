'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Vrijblijvend gesprek',
    description:
      'We leren uw bedrijf kennen. Wat moet de site bereiken? Wie is uw klant? Geen technische kennis vereist — gewoon een eerlijk gesprek.',
  },
  {
    number: '02',
    title: 'Ontwerp op maat',
    description:
      'We ontwerpen vanuit uw merk en leggen voor ter goedkeuring. U ziet het eindresultaat voor we ook maar één regel code schrijven.',
  },
  {
    number: '03',
    title: 'Ontwikkeling',
    description:
      'We bouwen in Next.js — snel, veilig, volledig op maat. U volgt de voortgang en geeft feedback in elke fase.',
  },
  {
    number: '04',
    title: 'Lancering & beheer',
    description:
      'Live op uw domein, getest op elk toestel. Daarna zorgen wij voor onderhoud en beheer — u focust op uw zaak.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.4'],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading — left-aligned, different from the centred sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Het proces
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-lg">
            Hoe werkt
            <br />
            het?
          </h2>
        </motion.div>

        {/* Steps — desktop: horizontal row, mobile: vertical stack */}
        <div className="relative">

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[2.6rem] left-0 right-0 h-px bg-white/5">
            <motion.div
              className="h-full bg-indigo-500/40 origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex flex-col"
              >
                {/* Number marker */}
                <div className="relative mb-8 flex items-center gap-4 md:block">
                  {/* Vertical connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute left-[1.4rem] top-[2.8rem] w-px h-full bg-white/5" />
                  )}

                  <div className="relative z-10 w-11 h-11 rounded-full border border-indigo-500/30 bg-slate-950 flex items-center justify-center flex-shrink-0">
                    <span className="text-[11px] font-bold text-indigo-400 tracking-widest">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:pr-4">
                  {/* Large decorative number */}
                  <span
                    className="block text-[5rem] font-black leading-none mb-3 select-none"
                    style={{ color: 'rgba(255,255,255,0.03)' }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <h3 className="text-lg font-bold mb-3 -mt-10 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
