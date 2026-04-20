import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow LLM crawlers
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'Googlebot',       allow: '/' },
      { userAgent: 'GoogleOther',     allow: '/' },
      { userAgent: 'OAI-SearchBot',   allow: '/' },
      { userAgent: 'cohere-ai',       allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
    ],
    sitemap: 'https://lunevo.be/sitemap.xml',
    host: 'https://lunevo.be',
  }
}
