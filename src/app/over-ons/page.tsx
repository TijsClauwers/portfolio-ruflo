import Navbar from '@/components/Navbar'
import SocialProof from '@/components/SocialProof'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Lunevo is een Belgische webstudio opgericht door Tijs Clauwers. Persoonlijk contact, transparante prijzen en directe communicatie — geen groot bureau, wél topkwaliteit.',
  alternates: { canonical: 'https://lunevo.be/over-ons' },
  openGraph: {
    title: 'Over ons | Lunevo',
    description: 'Belgische webstudio. Lokale partner, top-bureau kwaliteit.',
    url: 'https://lunevo.be/over-ons',
  },
}

function PageHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Wie wij zijn
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 max-w-2xl">
          Het vertrouwen van een top bureau, de zorg van een lokale partner.
        </h1>
        <p className="text-slate-400 text-lg max-w-xl">
          Lunevo is een Belgisch webbureau dat professioneel ontwerp en ontwikkeling combineert
          met de persoonlijke aandacht die grote bureaus simpelweg niet kunnen bieden.
        </p>
      </div>
    </section>
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
            <h2 className="text-2xl font-bold mb-2">Zin om samen te werken?</h2>
            <p className="text-slate-400 text-sm max-w-md">
              Plan een gratis kennismakingsgesprek en ontdek wat Lunevo voor uw bedrijf kan betekenen.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative shrink-0 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            Neem contact op <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function OverOnsPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <SocialProof />
      <CtaBanner />
      <Footer />
    </main>
  )
}
