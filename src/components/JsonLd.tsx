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
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://lunevo.be/#business',
        name: 'Lunevo',
        alternateName: 'Lunevo Studio',
        url: 'https://lunevo.be',
        email: 'info@lunevo.be',
        taxID: 'BE 1036.645.433',
        vatID: 'BE 1036.645.433',
        description:
          'Lunevo bouwt snelle, mooie websites voor lokale KMO\'s en gedurfde merken in België. Maatwerk design, Next.js of WordPress, SEO en LLM SEO in één traject.',
        foundingDate: '2024',
        founder: {
          '@type': 'Person',
          name: 'Tijs Clauwers',
          url: 'https://lunevo.be/over-ons',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BE',
          addressRegion: 'Vlaanderen',
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
        sameAs: [
          'https://lunevo.be',
        ],
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
                url: 'https://lunevo.be/diensten',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'WordPress website',
                description:
                  'Professionele WordPress website voor kleinere budgetten. Snel online en makkelijk te beheren.',
                url: 'https://lunevo.be/diensten',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO-optimalisatie',
                description:
                  'Structured data, meta-tags, sitemap en Core Web Vitals voor maximale vindbaarheid in Google.',
                url: 'https://lunevo.be/diensten',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'LLM SEO-optimalisatie',
                description:
                  'Vindbaar in ChatGPT, Perplexity en Google AI via llms.txt, FAQ-schema en entity markup.',
                url: 'https://lunevo.be/diensten',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website beheer',
                description:
                  'Doorlopend onderhoud, updates en monitoring van uw website.',
                url: 'https://lunevo.be/diensten',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://lunevo.be/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://lunevo.be',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Diensten',
            item: 'https://lunevo.be/diensten',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Over ons',
            item: 'https://lunevo.be/over-ons',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Contact',
            item: 'https://lunevo.be/contact',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Offerte aanvragen',
            item: 'https://lunevo.be/offerte',
          },
        ],
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
          {
            '@type': 'Question',
            name: 'Kan ik mijn eigen content beheren na oplevering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Lunevo integreert Sanity CMS zodat u teksten, afbeeldingen en pagina\'s zelf kunt aanpassen via een eenvoudig dashboard. Geen technische kennis vereist.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe snel laadt een website van Lunevo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Websites van Lunevo scoren gemiddeld 98/100 op Lighthouse performance. De gemiddelde laadtijd is onder de 2 seconden dankzij Next.js static generation en edge hosting.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is het verschil tussen Next.js en WordPress?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Next.js levert maximale performance, beveiliging en schaalbaarheid — ideaal voor ambitieuze projecten. WordPress is de juiste keuze voor kleinere budgetten met een eenvoudige beheerinterface. Lunevo helpt u de beste keuze te maken op basis van uw doelen.',
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
