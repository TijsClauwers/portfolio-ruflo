import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Lunevo | Web Agency — Websites die mensen bijblijven',
  description:
    "Lunevo bouwt snelle, mooie websites voor lokale KMO's en gedurfde merken. Maatwerk ontwerp, CMS en doorlopend beheer. Vraag een gratis offerte aan.",
  keywords: ['webdesign', 'web agency', 'websites', 'Next.js', 'Belgium', 'Vlaanderen', 'KMO', 'maatwerk website'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
