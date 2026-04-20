export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://lunevo.be/#website',
        url: 'https://lunevo.be',
        name: 'Lunevo',
        description: 'Belgische webstudio voor snelle, mooie websites op maat.',
        inLanguage: 'nl-BE',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://lunevo.be/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://lunevo.be/#business',
        name: 'Lunevo',
        alternateName: 'Lunevo Studio',
        url: 'https://lunevo.be',
        email: 'info@lunevo.be',
        description:
          'Lunevo bouwt snelle, mooie websites voor lokale KMO\'s en gedurfde merken in België. Maatwerk design, Next.js of WordPress, SEO en LLM SEO in één traject.',
        foundingDate: '2024',
        founder: {
          '@type': 'Person',
          name: 'Tijs Clauwers',
        },
        areaServed: [
          { '@type': 'Country', name: 'Belgium' },
          { '@type': 'Country', name: 'Netherlands' },
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          description: 'België en remote wereldwijd',
        },
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        openingHours: 'Mo-Fr 09:00-18:00',
        knowsLanguage: ['nl', 'en'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Webdiensten',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Maatwerk website (Next.js)',
                description:
                  'Volledig op maat gebouwde website in Next.js — snel, veilig en SEO-geoptimaliseerd.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'WordPress website',
                description:
                  'Professionele WordPress website voor kleinere budgetten. Snel online en makkelijk te beheren.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO-optimalisatie',
                description:
                  'Structured data, meta-tags, sitemap en Core Web Vitals voor maximale vindbaarheid in Google.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'LLM SEO-optimalisatie',
                description:
                  'Vindbaar in ChatGPT, Perplexity en Google AI via llms.txt, FAQ-schema en entity markup.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website beheer',
                description:
                  'Doorlopend onderhoud, updates en monitoring van uw website.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://lunevo.be/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat kost een website bij Lunevo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prijzen starten vanaf €500 voor een WordPress website. Maatwerk Next.js projecten starten vanaf €1.000. Alle offertes zijn transparant en vrijblijvend.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe lang duurt het bouwen van een website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Van brief tot live duurt het gemiddeld 1 tot 4 weken, afhankelijk van de complexiteit van het project.',
            },
          },
          {
            '@type': 'Question',
            name: 'Werkt Lunevo met WordPress?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Voor kleinere budgetten bouwen we professionele WordPress websites. Voor grotere of complexere projecten kiezen we voor Next.js.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is LLM SEO of GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'LLM SEO (Generative Engine Optimization) zorgt ervoor dat uw bedrijf correct geciteerd wordt door AI-assistenten zoals ChatGPT, Perplexity en Google AI. Lunevo implementeert llms.txt, FAQ-schema en entity markup om dit te bereiken.',
            },
          },
          {
            '@type': 'Question',
            name: 'Biedt Lunevo doorlopend beheer aan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, na oplevering zorgt Lunevo voor onderhoud, updates en monitoring van uw website zodat u zich volledig op uw zaak kunt focussen.',
            },
          },
          {
            '@type': 'Question',
            name: 'In welke regio werkt Lunevo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lunevo is gevestigd in België en werkt ook remote wereldwijd. Persoonlijke afspraken zijn altijd mogelijk.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
