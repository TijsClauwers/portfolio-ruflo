import { defineField, defineType } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'string',
      options: { list: ['indigo', 'violet', 'emerald', 'orange'] },
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      options: { list: ['Palette', 'LayoutDashboard', 'Shield', 'Wrench'] },
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
