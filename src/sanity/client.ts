import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)
// biome-ignore lint: Sanity image source is untyped
export function urlFor(source: object) {
  return builder.image(source as Parameters<typeof builder.image>[0])
}

export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  category,
  description,
  tech,
  "imageUrl": image.asset->url,
  href,
  external,
  placeholder
}`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  tags,
  colorTheme,
  iconName
}`
