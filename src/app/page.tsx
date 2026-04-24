'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

/* ── Shared wrap ─────────────────────────────────────────── */
function Wrap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px', position: 'relative', ...style }}>
      {children}
    </div>
  )
}

/* ── Section header ──────────────────────────────────────── */
function SecHead({ eyebrow, title, right }: { eyebrow: string; title: React.ReactNode; right?: string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: right ? '1fr 1fr' : '1fr',
        gap: '32px 60px',
        alignItems: 'end',
        marginBottom: 56,
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span
            style={{
              display: 'inline-block', width: 8, height: 8,
              background: 'var(--accent)', borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <span className="font-mono-label">{eyebrow}</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontVariationSettings: "'opsz' 72",
            fontWeight: 500, fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.0, letterSpacing: '-0.03em',
            color: 'var(--ink)',
          }}
        >
          {title}
        </h2>
      </div>
      {right && (
        <p
          style={{
            fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)',
            maxWidth: '40ch', alignSelf: 'end',
          }}
        >
          {right}
        </p>
      )}
    </div>
  )
}

/* ── Marquee ─────────────────────────────────────────────── */
const marqueeItems = [
  'Next.js', 'Tailwind CSS', 'TypeScript', 'Sanity CMS', 'Framer Motion',
  'LLM-SEO', 'Mobiel-first', 'Performance', 'Toegankelijkheid',
  'Three.js', 'Maatwerk Design',
]

function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div
      style={{
        borderTop: '1px solid var(--rule-2)',
        borderBottom: '1px solid var(--rule-2)',
        overflow: 'hidden',
        padding: '16px 0',
        background: 'var(--bg-2)',
      }}
    >
      <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 16,
              marginRight: 32, fontSize: 12, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--mute)', fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 4, height: 4, borderRadius: '50%',
                background: 'var(--accent)', opacity: 0.6, flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Services ────────────────────────────────────────────── */
const services = [
  {
    idx: '01 / 04',
    glyph: 'C',
    title: <>Maatwerk <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>CMS</em></>,
    desc: 'Beheer uw eigen content via een eenvoudig dashboard. Teksten, afbeeldingen en pagina\'s aanpassen wanneer u wil — geen technische kennis nodig.',
    tags: ['Sanity CMS', 'WordPress', 'Eigen beheer'],
    flag: null,
    detail: {
      heading: 'Uw website, uw controle',
      why: 'Stel: u verhoogt uw prijzen, voegt een nieuwe dienst toe of wil een foto aanpassen. Zonder CMS moet u elke keer een ontwikkelaar bellen — en betalen. Met een CMS doet u het zelf, in enkele seconden, alsof u een Word-document aanpast.',
      bullets: [
        'Pas teksten, prijzen en foto\'s zelf aan — zonder technische kennis',
        'Kies tussen Sanity (modern, snel) of WordPress (vertrouwd, uitgebreid)',
        'Bespaar honderden euro\'s per jaar aan onnodige aanpassingen',
        'Altijd controle over uw eigen website en content',
      ],
    },
  },
  {
    idx: '02 / 04',
    glyph: 'S',
    title: <><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>SEO-</em>geoptimaliseerd</>,
    desc: 'Uw website gevonden door de juiste mensen op Google. Wij zorgen voor een technisch perfecte basis zodat u organisch groeit.',
    tags: ['Google', 'Structured data', 'Core Web Vitals'],
    flag: null,
    detail: {
      heading: 'Gevonden worden terwijl u slaapt',
      why: '93% van alle online ervaringen begint met een zoekmachine. Als uw website niet op pagina 1 van Google staat, bent u voor de meeste potentiële klanten praktisch onzichtbaar. SEO lost dat op — structureel en duurzaam.',
      bullets: [
        'Klanten zoeken actief naar wat u aanbiedt — wij zorgen dat ze u vinden',
        'Razendsnel ladende website = betere Google-positie én gelukkigere bezoekers',
        'Geen maandelijkse advertentiekosten: organisch verkeer is gratis',
        'Technisch correcte structuur zodat Google elke pagina begrijpt',
        'Resultaten die maanden en jaren blijven werken',
      ],
    },
  },
  {
    idx: '03 / 04',
    glyph: '∞',
    title: <><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>LLM</em> SEO-optimalisatie</>,
    desc: 'Nu ook vindbaar in ChatGPT, Perplexity en Google AI. De nieuwe generatie zoeken — wees er vroeg bij.',
    tags: ['ChatGPT', 'Google AI', 'Perplexity'],
    flag: 'Nieuw',
    detail: {
      heading: 'De toekomst van zoeken is hier',
      why: 'Steeds meer mensen stellen vragen aan ChatGPT, Google AI of Perplexity in plaats van zelf te zoeken. Zij vragen: "Welk webbureau in België is goed voor kleine bedrijven?" — en de AI geeft direct een aanbeveling. Als uw website niet begrijpbaar is voor AI, bent u onzichtbaar.',
      bullets: [
        'Wij optimaliseren uw website zodat AI-modellen u kunnen lezen en begrijpen',
        'Vroeg instappen = grote voorsprong op concurrenten die dit nog niet doen',
        'Correct gestructureerde data zodat uw merk positief geciteerd kan worden',
        'Speciaal llms.txt-bestand en FAQ-structuur die AI-assistenten herkennen',
        'Miljoenen mensen gebruiken dagelijks AI als zoekmachine — wees klaar',
      ],
    },
  },
  {
    idx: '04 / 04',
    glyph: '↻',
    title: <>Website <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>beheer</em></>,
    desc: 'Geen zorgen over updates, beveiliging of downtime. Wij houden alles draaiende zodat u zich volledig op uw zaak kunt focussen.',
    tags: ['Onderhoud', 'Monitoring', 'Geen zorgen'],
    flag: null,
    detail: {
      heading: 'Uw website in goede handen',
      why: 'Een website die offline gaat, gehackt wordt of traag laadt kost u klanten én vertrouwen. De meeste problemen ontstaan door verwaarloosde updates of ontbrekende beveiliging. Wij voorkomen dat — proactief, maand na maand.',
      bullets: [
        'Nooit onverwacht offline: wij monitoren uw site 24/7',
        'Automatische updates voor veiligheid en snelheid',
        'Bij problemen reageren wij binnen de dag',
        'U focust op uw zaak — wij zorgen voor de techniek',
        'Eén vast maandelijks bedrag, geen verrassingen',
      ],
    },
  },
]

function ServiceCard({ s }: { s: typeof services[number] }) {
  const [open, setOpen] = useState(false)

  return (
    <article
      style={{
        background: 'var(--bg-2)',
        border: `1px solid ${open ? 'rgba(255,158,59,.35)' : 'var(--rule-2)'}`,
        borderRadius: 20,
        padding: '28px 28px 24px',
        display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'border-color .2s',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div>
        <span className="font-mono-label">{s.idx}</span>
        {s.flag && (
          <span
            style={{
              position: 'absolute', top: 28, right: 28,
              display: 'inline-flex', alignItems: 'center',
              padding: '3px 9px', background: 'var(--accent)', color: 'var(--bg)',
              borderRadius: 999, fontSize: 10, fontWeight: 600,
              letterSpacing: '.08em', textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            {s.flag}
          </span>
        )}
      </div>

      <div
        style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'linear-gradient(135deg, rgba(255,158,59,.18), rgba(255,158,59,.04))',
          border: '1px solid rgba(255,158,59,.24)',
          display: 'grid', placeItems: 'center',
          fontFamily: 'var(--font-bricolage), sans-serif',
          fontWeight: 600, color: 'var(--accent)', fontSize: 18,
        }}
      >
        {s.glyph}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-bricolage), sans-serif',
          fontWeight: 500, fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.1,
        }}
      >
        {s.title}
      </h3>

      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>
        {s.desc}
      </p>

      {/* Expanded detail panel */}
      {open && (
        <div
          style={{
            borderTop: '1px solid var(--rule-2)',
            paddingTop: 20,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontSize: 17, fontWeight: 500, lineHeight: 1.4,
              color: 'var(--ink)',
            }}
          >
            {s.detail.heading}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            {s.detail.why}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {s.detail.bullets.map((b) => (
              <li
                key={b}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)',
                }}
              >
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {s.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11, padding: '5px 10px',
                background: 'rgba(242,236,224,.05)',
                border: '1px solid var(--rule-2)',
                borderRadius: 999, color: 'var(--ink-2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 600, letterSpacing: '.04em',
            textTransform: 'uppercase',
            color: open ? 'var(--mute)' : 'var(--accent)',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 0, transition: 'color .2s', whiteSpace: 'nowrap',
            fontFamily: 'inherit',
          }}
        >
          {open ? 'Sluiten' : 'Meer info'}
          <span style={{ transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'none', display: 'inline-block', fontSize: 16 }}>+</span>
        </button>
      </div>
    </article>
  )
}

function Services() {
  return (
    <section style={{ padding: '100px 0' }} id="diensten">
      <Wrap>
        <SecHead
          eyebrow="§ 01 — Diensten"
          title={<>Wat wij<br /><span style={{ fontStyle: 'italic' }}>aanbieden.</span></>}
          right="Alles wat uw bedrijf online nodig heeft — ontwerp, ontwikkeling en vindbaarheid. Inclusief de nieuwe realiteit: gevonden worden in ChatGPT, Perplexity en Google AI."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.idx} s={s} />
          ))}
        </div>
      </Wrap>
    </section>
  )
}

/* ── Process ─────────────────────────────────────────────── */
const steps = [
  {
    n: '01', dur: 'Week 1',
    title: 'Vrijblijvend gesprek',
    desc: 'We leren uw bedrijf kennen. Wat moet de site bereiken? Wie is uw klant? Geen technische kennis vereist.',
  },
  {
    n: '02', dur: 'Week 2',
    title: 'Ontwerp op maat',
    desc: 'We ontwerpen vanuit uw merk. U ziet het eindresultaat voor we ook maar één regel code schrijven.',
  },
  {
    n: '03', dur: 'Week 3–4',
    title: 'Ontwikkeling',
    desc: 'We bouwen in Next.js of WordPress — afhankelijk van uw budget en noden. Snel, veilig, volledig op maat. U volgt de voortgang en geeft feedback.',
  },
  {
    n: '04', dur: 'Lopend',
    title: 'Lancering & beheer',
    desc: 'Live op uw domein, getest op elk toestel. Daarna zorgen wij voor onderhoud zodat u zich kunt focussen.',
  },
]

function Process() {
  return (
    <section style={{ padding: '60px 0 100px' }} id="proces">
      <Wrap>
        <SecHead
          eyebrow="§ 02 — Proces"
          title={<>Hoe werkt<br /><span style={{ fontStyle: 'italic' }}>het?</span></>}
          right="Vier stappen, ca. 1–4 weken van brief tot live. Helder, persoonlijk en zonder verrassingen."
        />

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute', top: 30, left: '5%', right: '5%', height: 1,
              background: 'linear-gradient(90deg, transparent, var(--rule-2) 10%, var(--rule-2) 90%, transparent)',
            }}
          />
          <div
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32, position: 'relative',
            }}
          >
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div
                  style={{
                    width: 60, height: 60, borderRadius: '50%',
                    border: '1px solid var(--rule-2)', background: 'var(--bg-2)',
                    display: 'grid', placeItems: 'center',
                    fontFamily: 'var(--font-bricolage), sans-serif',
                    fontWeight: 500, fontSize: 22, color: 'var(--accent)',
                    position: 'relative',
                  }}
                >
                  {s.n}
                  <span
                    style={{
                      position: 'absolute', inset: -6, borderRadius: '50%',
                      border: '1px dashed rgba(255,158,59,.2)',
                    }}
                  />
                </div>
                <span className="font-mono-label" style={{ marginTop: 4 }}>{s.dur}</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-bricolage), sans-serif',
                    fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '30ch' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>

      <style>{`
        @media (max-width: 820px) {
          #proces .proc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          #proces .proc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Why ─────────────────────────────────────────────────── */
const pillars = [
  {
    glyph: '⌂',
    title: 'Lokale partner',
    desc: 'Persoonlijke afspraken zijn altijd mogelijk — geen gezichtsloos bureau, geen ticket-systeem.',
    footL: 'LOC', footR: 'BE · NL',
  },
  {
    glyph: '⇄',
    title: 'Direct contact',
    desc: 'Geen contactformulieren die verdwijnen. U bereikt ons direct — snel, eerlijk en zonder omwegen.',
    footL: 'SLA', footR: '< 24u',
  },
  {
    glyph: '€',
    title: 'Geen verborgen kosten',
    desc: 'Transparante offertes, heldere communicatie en geen verrassingen op de factuur.',
    footL: 'PRIJS', footR: 'VAST',
  },
]

function Why() {
  return (
    <section style={{ padding: '60px 0 100px' }} id="over-mij">
      <Wrap>
        <SecHead
          eyebrow="§ 03 — Waarom Lunevo"
          title={<>Top-bureau <span style={{ fontStyle: 'italic' }}>vertrouwen,</span> lokale zorg.</>}
          right="Professioneel ontwerp en ontwikkeling met de persoonlijke aandacht die grote bureaus simpelweg niet kunnen bieden."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))',
                border: '1px solid var(--rule-2)', borderRadius: 20, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 16, minHeight: 260,
              }}
            >
              <div
                style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(255,158,59,.12)',
                  border: '1px solid rgba(255,158,59,.24)',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--font-bricolage), sans-serif',
                  fontSize: 22, color: 'var(--accent)',
                }}
              >
                {p.glyph}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-bricolage), sans-serif',
                  fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em',
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', flex: 1 }}>
                {p.desc}
              </p>
              <div
                style={{
                  marginTop: 'auto', paddingTop: 16,
                  borderTop: '1px solid var(--rule)',
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em',
                  textTransform: 'uppercase',
                }}
              >
                <span>{p.footL}</span>
                <span>{p.footR}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          style={{
            marginTop: 48, padding: 48,
            border: '1px solid var(--rule-2)', borderRadius: 20,
            background: `
              radial-gradient(600px 200px at 0% 0%, rgba(255,158,59,.06), transparent 60%),
              var(--bg-2)
            `,
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 400, fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.3,
            letterSpacing: '-0.02em', maxWidth: '28ch',
          }}
        >
          &ldquo;Elk project behandelen{' '}
          <span style={{ color: 'var(--accent)' }}>alsof het ons eigen merk is</span>
          {' '}— dat is het verschil.&rdquo;
          <span
            style={{
              display: 'block', fontStyle: 'normal', fontSize: 13,
              color: 'var(--mute)', letterSpacing: '.06em',
              textTransform: 'uppercase', marginTop: 20,
              fontFamily: 'ui-monospace, monospace',
            }}
          >
            — Tijs · Lunevo Studio
          </span>
        </div>
      </Wrap>

      <style>{`
        @media (max-width: 820px) {
          #over-mij .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Contact ─────────────────────────────────────────────── */
const channels = [
  {
    dot: '@', title: 'info@lunevo.be',
    sub: 'E-mail · binnen 24u',
    href: 'mailto:info@lunevo.be',
  },
  {
    dot: '✎', title: 'Project briefen',
    sub: 'Offerte-formulier · 3 min',
    href: '/offerte',
  },
]

function Contact() {
  return (
    <section
      style={{
        padding: '120px 0',
        borderTop: '1px solid var(--rule-2)',
        background: `
          radial-gradient(700px 400px at 50% 0%, rgba(255,158,59,.08), transparent 60%),
          linear-gradient(180deg, var(--bg-2), var(--bg))
        `,
      }}
      id="contact"
    >
      <Wrap>
        <div
          style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1fr',
            gap: 80, alignItems: 'start',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span
                style={{
                  display: 'inline-block', width: 8, height: 8,
                  background: 'var(--accent)',
                }}
              />
              <span className="font-mono-label">§ 04 — Contact</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-bricolage), sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.95, letterSpacing: '-0.035em',
              }}
            >
              Klaar om<br />online<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>te gaan?</span>
            </h2>
            <p
              style={{
                marginTop: 32, color: 'var(--ink-2)', maxWidth: '38ch',
                fontSize: 17, lineHeight: 1.5,
              }}
            >
              Stuur een bericht of vul het offerte-formulier in. Wij antwoorden binnen de 24 uur — gratis eerste gesprek, zonder verplichtingen.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                  padding: '20px 24px', border: '1px solid var(--rule-2)', borderRadius: 16,
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))',
                  textDecoration: 'none', transition: 'transform .2s, border-color .2s, background .2s',
                  color: 'inherit',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateX(4px)'
                  el.style.borderColor = 'rgba(255,158,59,.3)'
                  el.style.background = 'rgba(255,158,59,.04)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = ''
                  el.style.borderColor = 'var(--rule-2)'
                  el.style.background = 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(255,158,59,.12)', border: '1px solid rgba(255,158,59,.24)',
                      display: 'grid', placeItems: 'center',
                      fontFamily: 'var(--font-bricolage), sans-serif',
                      fontWeight: 600, color: 'var(--accent)',
                    }}
                  >
                    {c.dot}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-bricolage), sans-serif',
                        fontWeight: 500, fontSize: 20, letterSpacing: '-0.02em',
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13, color: 'var(--mute)', marginTop: 2,
                        fontFamily: 'ui-monospace, monospace', letterSpacing: '.04em',
                      }}
                    >
                      {c.sub}
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 18, color: 'var(--mute)', transition: 'color .2s, transform .2s' }}>→</span>
              </a>
            ))}

            {/* Location pill */}
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                padding: '20px 24px', border: '1px solid var(--rule-2)', borderRadius: 16,
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(255,158,59,.12)', border: '1px solid rgba(255,158,59,.24)',
                    display: 'grid', placeItems: 'center',
                    fontFamily: 'var(--font-bricolage), sans-serif',
                    fontWeight: 600, color: 'var(--accent)',
                  }}
                >
                  ⌘
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-bricolage), sans-serif',
                      fontWeight: 500, fontSize: 20, letterSpacing: '-0.02em',
                    }}
                  >
                    België &amp; remote
                  </div>
                  <div
                    style={{
                      fontSize: 13, color: 'var(--mute)', marginTop: 2,
                      fontFamily: 'ui-monospace, monospace', letterSpacing: '.04em',
                    }}
                  >
                    Regio · wereldwijd
                  </div>
                </div>
              </div>
              <span style={{ fontSize: 18, color: 'var(--mute)' }}>·</span>
            </div>
          </div>
        </div>
      </Wrap>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--rule-2)',
        padding: '28px 0',
        fontFamily: 'ui-monospace, monospace',
        fontSize: 11, color: 'var(--mute)',
        letterSpacing: '.08em', textTransform: 'uppercase',
      }}
    >
      <Wrap>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <span>© 2026 Lunevo · Studio voor digitaal maatwerk</span>
          <a href="#contact" style={{ color: 'var(--mute)', textDecoration: 'none' }}>Contact</a>
        </div>
      </Wrap>
    </footer>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <Process />
      <Why />
      <Contact />
      <Footer />
    </main>
  )
}
