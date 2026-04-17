import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SocialProof from '@/components/SocialProof'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { client, servicesQuery } from '@/sanity/client'


const marqueeItems = [
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'SEO-geoptimaliseerd',
  'Maatwerk CMS',
  'Mobiel-first',
  'Snelle laadtijden',
  'Framer Motion',
  'Maatwerk Design',
  'Performance',
  'Toegankelijkheid',
  'Three.js',
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

export default async function HomePage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  let services = []

  if (projectId) {
    try {
      services = await client.fetch(servicesQuery)
    } catch {
      // Sanity not configured yet — component renders with empty data
    }
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services services={services} />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  )
}
