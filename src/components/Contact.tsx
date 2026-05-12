'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Globe, FileText } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Stuur ons een bericht en wij nemen binnen de dag contact op — gratis en vrijblijvend.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-900/60 border border-indigo-500/20 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mb-4">
                  <Send size={20} className="text-indigo-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Bericht ontvangen!</h3>
                <p className="text-slate-400 text-sm">
                  Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-slate-900/50 border border-white/5 rounded-2xl p-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-300 mb-1.5">
                      Naam
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jan Janssen"
                      className="w-full bg-slate-800/60 border border-white/10 text-white placeholder-slate-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-300 mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jan@bedrijf.be"
                      className="w-full bg-slate-800/60 border border-white/10 text-white placeholder-slate-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-slate-300 mb-1.5">
                    Bedrijfsnaam (optioneel)
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Uw bedrijf"
                    className="w-full bg-slate-800/60 border border-white/10 text-white placeholder-slate-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-300 mb-1.5">
                    Vertel ons over uw project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Welk soort website heeft u nodig? Specifieke wensen?"
                    className="w-full bg-slate-800/60 border border-white/10 text-white placeholder-slate-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-4 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <Send size={15} />
                  Bericht versturen
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <a
              href="/offerte"
              className="flex items-center gap-4 bg-orange-500/8 border border-orange-500/20 hover:border-orange-500/40 rounded-2xl p-5 group transition-all hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-orange-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-orange-400" />
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-orange-300 transition-colors">
                  Offerte aanvragen
                </div>
                <div className="text-slate-400 text-xs mt-0.5">3 minuten — volledig vrijblijvend</div>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-slate-900/50 border border-white/5 rounded-2xl p-5">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-sm font-medium">E-mail</div>
                <div className="text-slate-400 text-xs mt-0.5">info@lunevo.be</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/50 border border-white/5 rounded-2xl p-5">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe size={20} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-sm font-medium">Regio</div>
                <div className="text-slate-400 text-xs mt-0.5">België & remote wereldwijd</div>
              </div>
            </div>

            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-indigo-400 font-semibold">Gratis eerste gesprek.</span>{' '}
                Wij luisteren naar uw noden en geven u een eerlijke offerte — zonder verplichtingen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
