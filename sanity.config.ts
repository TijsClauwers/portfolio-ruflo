import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { projectSchema } from './src/sanity/schemas/projectSchema'
import { serviceSchema } from './src/sanity/schemas/serviceSchema'

export default defineConfig({
  projectId: 'elja62b4',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [projectSchema, serviceSchema],
  },
})
