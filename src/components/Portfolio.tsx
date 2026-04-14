'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Plus } from 'lucide-react'

type SanityProject = {
  _id: string
  title: string
  category: string
  description: string
  tech: string[]
  imageUrl?: string
  href: string
  external?: boolean
  placeholder?: boolean
}

function ProjectPreview({
  imageUrl,
  placeholder,
}: {
  imageUrl?: string
  placeholder?: boolean
}) {
  if (placeholder) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-900/40">
        <div
          className="w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center"
          style={{ borderColor: 'rgba(99,102,241,0.3)' }}
        >
          <Plus size={14} style={{ color: '#6366f1' }} />
        </div>
        <span className="text-[10px]" style={{ color: '#4b5563' }}>
          Uw project hier
        </span>
      </div>
    )
  }

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt=""
        className="w-full h-full object-cover"
      />
    )
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
      <span className="text-slate-600 text-xs">Preview</span>
    </div>
  )
}

export default function Portfolio({ projects }: { projects: SanityProject[] }) {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Ons werk
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Recente realisaties</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Elk project is op maat gemaakt voor de noden van de klant. Geen templates, geen
            shortcuts — gewoon de juiste oplossing.
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <p className="text-center text-slate-500 text-sm">
            Geen projecten gevonden. Voeg projecten toe via het CMS op{' '}
            <a href="/studio" className="text-indigo-400 underline">/studio</a>.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {projects.map((project, i) => (
              <motion.a
                key={project._id}
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: project.placeholder
                    ? 'rgba(255,255,255,0.02)'
                    : 'linear-gradient(160deg, rgba(55,65,81,0.06) 0%, transparent 100%)',
                  border: project.placeholder
                    ? '1px dashed rgba(99,102,241,0.2)'
                    : '1px solid rgba(55,65,81,0.15)',
                }}
              >
                {/* Preview area */}
                <div className="relative overflow-hidden" style={{ height: '160px' }}>
                  <ProjectPreview imageUrl={project.imageUrl} placeholder={project.placeholder} />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: project.placeholder ? 'rgba(99,102,241,0.1)' : '#f3f4f6',
                          color: project.placeholder ? '#6366f1' : '#374151',
                        }}
                      >
                        {project.category}
                      </span>
                      <h3
                        className="font-semibold mt-2 text-sm"
                        style={{ color: project.placeholder ? '#4b5563' : '#fff' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    {!project.placeholder && (
                      <ExternalLink
                        size={13}
                        className="flex-shrink-0 mt-1 text-slate-600 group-hover:text-indigo-400 transition-colors"
                      />
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tech?.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] bg-white/5 border border-white/8 text-slate-400 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
