// Sanity document type for Portfolio projects
// To create this schema in Sanity Studio, run: npx sanity@latest init
// Then replace sanity.config.ts with the schema definitions using defineField/defineType from 'sanity'

export type ProjectDocument = {
  _type: 'project'
  _id: string
  title: string
  category: string
  description?: string
  tech?: string[]
  image?: { asset: { _ref: string; _type: 'reference' }; _type: 'image' }
  href?: string
  external?: boolean
  placeholder?: boolean
  order?: number
}
