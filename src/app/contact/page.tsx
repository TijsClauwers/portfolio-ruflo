import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Lunevo',
  description:
    'Neem contact op met Lunevo voor een gratis kennismakingsgesprek. Wij antwoorden binnen de 24 uur.',
}

function PageHero() {
  return (
    <section className="pt-32 pb-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Neem contact op
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 max-w-2xl">
          Klaar om online te gaan?
        </h1>
        <p className="text-slate-400 text-lg max-w-xl">
          Stuur een bericht of neem contact op via WhatsApp. Wij antwoorden binnen de 24 uur.
        </p>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <Contact />
      <Footer />
    </main>
  )
}
