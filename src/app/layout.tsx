import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lunevo | Web Agency — Websites that people remember',
  description:
    'Lunevo builds fast, beautiful websites for local businesses and bold brands. Custom design, CMS, and ongoing support. Request a free quote today.',
  keywords: ['webdesign', 'web agency', 'websites', 'Next.js', 'Belgium', 'Vlaanderen', 'KMO', 'custom website'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased bg-slate-950 text-white">{children}</body>
    </html>
  )
}
