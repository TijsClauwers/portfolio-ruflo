// Sanity document type for Services
// To create this schema in Sanity Studio, run: npx sanity@latest init
// Then replace sanity.config.ts with the schema definitions using defineField/defineType from 'sanity'

export type ServiceDocument = {
  _type: 'service'
  _id: string
  title: string
  description?: string
  tags?: string[]
  colorTheme?: 'indigo' | 'violet' | 'emerald' | 'orange'
  iconName?: 'Palette' | 'LayoutDashboard' | 'Shield' | 'Wrench'
  order?: number
}
