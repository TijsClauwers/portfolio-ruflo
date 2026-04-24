import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offerte aanvragen',
  description:
    'Vraag een gratis, vrijblijvende offerte aan bij Lunevo. In 4 stappen vertelt u ons over uw project — wij antwoorden binnen 24 uur.',
  alternates: { canonical: 'https://lunevo.be/offerte' },
  openGraph: {
    title: 'Offerte aanvragen | Lunevo',
    description: 'Gratis en vrijblijvend. Van brief tot live in 1–4 weken. Wij antwoorden binnen 24 uur.',
    url: 'https://lunevo.be/offerte',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lunevo — Offerte aanvragen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offerte aanvragen | Lunevo',
    description: 'Gratis en vrijblijvend. Van brief tot live in 1–4 weken.',
    images: ['/og-image.png'],
  },
}

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
