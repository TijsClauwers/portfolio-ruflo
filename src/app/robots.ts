import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // OpenAI / ChatGPT
      { userAgent: 'GPTBot',              allow: '/' },
      { userAgent: 'ChatGPT-User',        allow: '/' },
      { userAgent: 'OAI-SearchBot',       allow: '/' },
      // Anthropic / Claude
      { userAgent: 'ClaudeBot',           allow: '/' },
      { userAgent: 'Claude-Web',          allow: '/' },
      { userAgent: 'anthropic-ai',        allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot',       allow: '/' },
      // Google
      { userAgent: 'Googlebot',           allow: '/' },
      { userAgent: 'GoogleOther',         allow: '/' },
      { userAgent: 'Google-Extended',     allow: '/' },
      // Meta
      { userAgent: 'Meta-ExternalAgent',  allow: '/' },
      { userAgent: 'FacebookBot',         allow: '/' },
      // xAI / Grok
      { userAgent: 'Grok',               allow: '/' },
      // Cohere
      { userAgent: 'cohere-ai',          allow: '/' },
      // Apple
      { userAgent: 'Applebot',           allow: '/' },
      { userAgent: 'Applebot-Extended',  allow: '/' },
      // Bing / Copilot
      { userAgent: 'bingbot',            allow: '/' },
      // Amazon / Alexa
      { userAgent: 'Amazonbot',          allow: '/' },
      // Diffbot (AI knowledge graph)
      { userAgent: 'Diffbot',            allow: '/' },
      // Common AI scrapers
      { userAgent: 'CCBot',              allow: '/' },
    ],
    sitemap: 'https://lunevo.be/sitemap.xml',
    host: 'https://lunevo.be',
  }
}
