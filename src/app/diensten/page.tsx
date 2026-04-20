import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { client, servicesQuery } from '@/sanity/client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten | Lunevo',
  description:
    'Ontdek wat Lunevo voor uw bedrijf kan doen: maatwerk websites, SEO, CMS, website beheer en AI-zichtbaarheid (LLM SEO).',
}

function PageHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Wat wij aanbieden
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 max-w-2xl">
          Diensten die uw bedrijf online laten groeien
        </h1>
        <p className="text-slate-400 text-lg max-w-xl">
          Van eerste ontwerp tot lancering en daarna — wij begeleiden u in elke stap van het proces.
        </p>
      </div>
    </section>
  )
}

function CtaBanner() {
  return (
    <section className="px-4 sm:px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-indigo-500/15 bg-gradient-to-br from-indigo-500/8 to-transparent overflow-hidden px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2">Interesse in een dienst?</h2>
            <p className="text-slate-400 text-sm max-w-md">
              Neem contact op voor een gratis gesprek. Geen verplichtingen, gewoon eerlijk advies.
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

export default async function DienstenPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  let services = []
  if (projectId) {
    try { services = await client.fetch(servicesQuery) } catch { /* fallback */ }
  }

  return (
    <main>
      <Navbar />
      <PageHero />
      <Services services={services} />
      <HowItWorks />
      <CtaBanner />
      <Footer />
    </main>
  )
}
