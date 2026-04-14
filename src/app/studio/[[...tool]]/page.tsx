'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Required for static export — studio handles its own client-side routing
export function generateStaticParams() {
  return [{}]
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
