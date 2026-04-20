import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-bricolage',
  display: 'swap',
})

const BASE = 'https://lunevo.be'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Lunevo — Webstudio voor websites die mensen bijblijven',
    template: '%s | Lunevo',
  },
  description:
    'Lunevo bouwt snelle, mooie websites voor lokale KMO\'s en gedurfde merken in België. Maatwerk design, Next.js of WordPress, SEO en LLM SEO. Vraag een gratis offerte aan.',
  keywords: [
    'webdesign', 'webstudio', 'website laten maken', 'Next.js', 'WordPress',
    'Belgium', 'België', 'Vlaanderen', 'KMO website', 'maatwerk website',
    'SEO', 'LLM SEO', 'GEO', 'AI vindbaarheid', 'ChatGPT vindbaar',
  ],
  authors: [{ name: 'Tijs Clauwers', url: BASE }],
  creator: 'Tijs Clauwers',
  publisher: 'Lunevo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE,
    languages: { 'nl-BE': BASE },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: BASE,
    siteName: 'Lunevo',
    title: 'Lunevo — Webstudio voor websites die mensen bijblijven',
    description:
      'Snelle, mooie websites voor lokale KMO\'s en gedurfde merken. Next.js of WordPress, maatwerk design, SEO en LLM SEO in één traject — van brief tot live in 1–4 weken.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lunevo — Webstudio België',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunevo — Webstudio voor websites die mensen bijblijven',
    description:
      'Snelle, mooie websites voor KMO\'s en merken. Next.js of WordPress, SEO en LLM SEO. België.',
    images: ['/og-image.png'],
  },
  other: {
    // Hint for LLM crawlers
    'llms-txt': `${BASE}/llms.txt`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        <link rel="canonical" href={BASE} />
        <meta name="theme-color" content="#0b0b0d" />
        <JsonLd />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
