'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

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
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '40ch', alignSelf: 'end' }}>
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
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', opacity: 0.6, flexShrink: 0 }} />
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
              letterSpacing: '.08em', textTransform: 'uppercase', lineHeight: 1,
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

      <h3 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        {s.title}
      </h3>

      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>{s.desc}</p>

      {open && (
        <div style={{ borderTop: '1px solid var(--rule-2)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontSize: 17, fontWeight: 500, lineHeight: 1.4, color: 'var(--ink)' }}>
            {s.detail.heading}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)' }}>{s.detail.why}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {s.detail.bullets.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>
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
            <span key={t} style={{ fontSize: 11, padding: '5px 10px', background: 'rgba(242,236,224,.05)', border: '1px solid var(--rule-2)', borderRadius: 999, color: 'var(--ink-2)' }}>
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase',
            color: open ? 'var(--mute)' : 'var(--accent)',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 0, transition: 'color .2s', whiteSpace: 'nowrap', fontFamily: 'inherit',
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {services.map((s) => <ServiceCard key={s.idx} s={s} />)}
        </div>
      </Wrap>
    </section>
  )
}

/* ── Process ─────────────────────────────────────────────── */
const steps = [
  { n: '01', dur: 'Week 1',    title: 'Vrijblijvend gesprek', desc: 'We leren uw bedrijf kennen. Wat moet de site bereiken? Wie is uw klant? Geen technische kennis vereist.' },
  { n: '02', dur: 'Week 2',    title: 'Ontwerp op maat',      desc: 'We ontwerpen vanuit uw merk. U krijgt previews en volgt de voortgang live mee — zodat u altijd weet waar het naartoe gaat.' },
  { n: '03', dur: 'Week 3–4',  title: 'Ontwikkeling',         desc: 'We bouwen in Next.js of WordPress — afhankelijk van uw budget en noden. Snel, veilig, volledig op maat.' },
  { n: '04', dur: 'Lopend',    title: 'Lancering & beheer',   desc: 'Live op uw domein, getest op elk toestel. Daarna zorgen wij voor onderhoud zodat u zich kunt focussen.' },
]

function Process() {
  return (
    <section style={{ padding: '60px 0 100px', background: 'var(--bg-2)', borderTop: '1px solid var(--rule-2)', borderBottom: '1px solid var(--rule-2)' }} id="proces">
      <Wrap>
        <SecHead
          eyebrow="§ 02 — Proces"
          title={<>Hoe werkt<br /><span style={{ fontStyle: 'italic' }}>het?</span></>}
          right="Vier stappen, ca. 1–4 weken van brief tot live. Helder, persoonlijk en zonder verrassingen."
        />
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 30, left: '5%', right: '5%', height: 1, background: 'linear-gradient(90deg, transparent, var(--rule-2) 10%, var(--rule-2) 90%, transparent)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, position: 'relative' }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div
                  style={{
                    width: 60, height: 60, borderRadius: '50%',
                    border: '1px solid var(--rule-2)', background: 'var(--bg)',
                    display: 'grid', placeItems: 'center',
                    fontFamily: 'var(--font-bricolage), sans-serif',
                    fontWeight: 500, fontSize: 22, color: 'var(--accent)',
                    position: 'relative',
                  }}
                >
                  {s.n}
                  <span style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '1px dashed rgba(255,158,59,.2)' }} />
                </div>
                <span className="font-mono-label" style={{ marginTop: 4 }}>{s.dur}</span>
                <h3 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '30ch' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}

/* ── Portfolio ───────────────────────────────────────────── */
function BrowserMockup() {
  return (
    <div
      style={{
        background: '#0b0b0d',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 32px 64px -16px rgba(0,0,0,0.7)',
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          background: '#18181e',
          padding: '10px 16px',
          display: 'flex', alignItems: 'center', gap: 10,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ display: 'flex', gap: 5.5 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
          ))}
        </div>
        <div
          style={{
            flex: 1, background: 'rgba(255,255,255,0.04)',
            borderRadius: 6, padding: '4px 12px',
            fontSize: 11, color: 'rgba(255,255,255,0.3)',
            fontFamily: 'ui-monospace, monospace',
            textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          lunevo.be
        </div>
        <div style={{ width: 14 }} />
      </div>
      {/* Stylized site preview */}
      <div style={{ padding: '28px 24px 32px', background: 'linear-gradient(160deg, #0f0f14 0%, #0b0b0d 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: -60, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'rgba(99,102,241,0.1)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        {/* Mini nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, position: 'relative' }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 3, color: '#f2ece0', textTransform: 'uppercase' }}>Lunevo</span>
          <div style={{ display: 'flex', gap: 14 }}>
            {['Diensten', 'Over', 'Contact'].map((item) => (
              <span key={item} style={{ fontSize: 9, color: 'rgba(242,236,224,0.3)', letterSpacing: 1.5, textTransform: 'uppercase' }}>{item}</span>
            ))}
          </div>
        </div>
        {/* Hero text */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <div style={{ fontSize: 9, color: '#ff9e3b', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 10, opacity: 0.9 }}>Webstudio · België</div>
          <div style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontSize: 26, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.8, color: '#f2ece0', marginBottom: 20 }}>
            Websites die<br />
            <span style={{ color: '#ff9e3b', fontStyle: 'italic' }}>mensen bijblijven.</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: '#6366f1', borderRadius: 8, fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>
            Offerte aanvragen →
          </div>
        </div>
        {/* Performance badge */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(40,200,64,0.1)', border: '1px solid rgba(40,200,64,0.2)',
            borderRadius: 8, padding: '5px 10px',
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ fontSize: 9, fontFamily: 'ui-monospace, monospace', color: '#28c840', letterSpacing: 1, textTransform: 'uppercase' }}>Perf 98 / 100</span>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <section style={{ padding: '100px 0' }} id="projecten">
      <Wrap>
        <SecHead
          eyebrow="§ 03 — Projecten"
          title={<>Werk dat<br /><span style={{ fontStyle: 'italic' }}>resultaat levert.</span></>}
          right="Twee projecten, twee totaal verschillende uitdagingen. Maatwerk van A tot Z."
        />

        <div
          className="proj-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 20 }}
        >
          {/* Featured: lunevo.be */}
          <div style={{ border: '1px solid var(--rule-2)', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-2)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '28px 28px 20px' }}>
              <BrowserMockup />
            </div>
            <div style={{ padding: '0 28px 28px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 24, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  Lunevo — eigen project
                </h3>
                <a
                  href="https://lunevo.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12, color: 'var(--accent)', textDecoration: 'none', fontFamily: 'ui-monospace, monospace', letterSpacing: '.04em', whiteSpace: 'nowrap', marginTop: 4 }}
                >
                  lunevo.be ↗
                </a>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                Onze eigen website als visitekaartje. Gebouwd in Next.js met statische export, Sanity CMS en Cloudflare Pages. Lighthouse score 98/100.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {['Next.js', 'Sanity CMS', 'Cloudflare Pages', 'LLM SEO'].map((t) => (
                  <span key={t} style={{ fontSize: 11, padding: '4px 10px', background: 'rgba(242,236,224,.05)', border: '1px solid var(--rule-2)', borderRadius: 999, color: 'var(--ink-2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Jeugdhuis Sumo */}
          <div style={{ border: '1px solid var(--rule-2)', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-2)', display: 'flex', flexDirection: 'column' }}>
            {/* Visual area */}
            <div
              style={{
                padding: 24, flex: 1,
                background: 'linear-gradient(145deg, rgba(99,102,241,0.1) 0%, rgba(255,158,59,0.05) 100%)',
                borderBottom: '1px solid var(--rule-2)',
                display: 'flex', flexDirection: 'column', gap: 12,
                minHeight: 230,
              }}
            >
              <div style={{ display: 'flex', gap: 10, flex: 1 }}>
                {/* Event info card */}
                <div
                  style={{
                    flex: 1, background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 10, padding: '14px 14px',
                    display: 'flex', flexDirection: 'column', gap: 6,
                  }}
                >
                  <div style={{ fontSize: 8, color: 'var(--mute)', letterSpacing: 2, textTransform: 'uppercase' }}>Event</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>Zomerfuif 2025</div>
                  <div style={{ fontSize: 10, color: 'var(--mute)' }}>12 jul · 22:00</div>
                  <div style={{ marginTop: 'auto', fontSize: 9, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                    Dresscode: casual<br />Locatie: Sumo
                  </div>
                </div>
                {/* Leaderboard card */}
                <div
                  style={{
                    flex: 1, background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 10, padding: '14px 14px',
                    display: 'flex', flexDirection: 'column', gap: 6,
                  }}
                >
                  <div style={{ fontSize: 8, color: 'var(--mute)', letterSpacing: 2, textTransform: 'uppercase' }}>Leaderboard</div>
                  {[
                    { pos: '🥇', name: 'Thomas V.', val: '€142' },
                    { pos: '🥈', name: 'Julie M.',  val: '€97'  },
                    { pos: '🥉', name: 'Bram D.',   val: '€81'  },
                  ].map((r) => (
                    <div key={r.pos} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--ink-2)' }}>
                        <span style={{ fontSize: 9 }}>{r.pos}</span> {r.name}
                      </span>
                      <span style={{ color: 'var(--accent)', fontFamily: 'ui-monospace, monospace', fontWeight: 600 }}>{r.val}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 2, fontSize: 8, color: 'var(--mute)', fontFamily: 'ui-monospace, monospace', letterSpacing: 0.5 }}>
                    live · kassa sync
                  </div>
                </div>
              </div>
              {/* URL */}
              <div style={{ fontSize: 10, color: 'var(--mute)', fontFamily: 'ui-monospace, monospace', letterSpacing: 1 }}>
                jeugdhuissumo.be
              </div>
            </div>
            {/* Info */}
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 20, letterSpacing: '-0.02em' }}>
                  Jeugdhuis Sumo
                </h3>
                <a
                  href="https://jeugdhuissumo.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12, color: 'var(--accent)', textDecoration: 'none', fontFamily: 'ui-monospace, monospace' }}
                >
                  ↗
                </a>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                Website met evenementeninformatie en een live leaderboard dat toont wie het meeste uitgeeft — rechtstreeks gesynchroniseerd met het op maat gebouwde kassasysteem.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
                {['WordPress', 'Python', 'Kassa-integratie', 'Leaderboard'].map((t) => (
                  <span key={t} style={{ fontSize: 10, padding: '3px 9px', background: 'rgba(242,236,224,.05)', border: '1px solid var(--rule-2)', borderRadius: 999, color: 'var(--ink-2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrap>

      <style>{`
        @media (max-width: 860px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Why ─────────────────────────────────────────────────── */
const pillars = [
  { glyph: '⌂', title: 'Lokale partner',       desc: 'Persoonlijke afspraken zijn altijd mogelijk — geen gezichtsloos bureau, geen ticket-systeem.', footL: 'LOC',   footR: 'BE · NL'  },
  { glyph: '⇄', title: 'Direct contact',        desc: 'Geen contactformulieren die verdwijnen. U bereikt ons direct — snel, eerlijk en zonder omwegen.', footL: 'SLA',   footR: '< 24u'    },
  { glyph: '€', title: 'Geen verborgen kosten', desc: 'Transparante offertes, heldere communicatie en geen verrassingen op de factuur.', footL: 'PRIJS', footR: 'VAST'    },
]

function Why() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--rule-2)', borderBottom: '1px solid var(--rule-2)' }} id="over-mij">
      <Wrap>
        <SecHead
          eyebrow="§ 04 — Waarom Lunevo"
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
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,158,59,.12)', border: '1px solid rgba(255,158,59,.24)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-bricolage), sans-serif', fontSize: 22, color: 'var(--accent)' }}>
                {p.glyph}
              </div>
              <h3 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', flex: 1 }}>{p.desc}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
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
            background: 'radial-gradient(600px 200px at 0% 0%, rgba(255,158,59,.06), transparent 60%), var(--bg)',
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 400, fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.3,
            letterSpacing: '-0.02em', maxWidth: '28ch',
          }}
        >
          &ldquo;Elk project behandelen{' '}
          <span style={{ color: 'var(--accent)' }}>alsof het ons eigen merk is</span>
          {' '}— dat is het verschil.&rdquo;
          <span style={{ display: 'block', fontStyle: 'normal', fontSize: 13, color: 'var(--mute)', letterSpacing: '.06em', textTransform: 'uppercase', marginTop: 20, fontFamily: 'ui-monospace, monospace' }}>
            — Tijs · Lunevo Studio
          </span>
        </div>
      </Wrap>
    </section>
  )
}

/* ── FAQ ─────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Wat kost een website bij Lunevo?',
    a: 'Prijzen starten vanaf €500 voor een WordPress website. Maatwerk Next.js projecten starten vanaf €1.000. Alle offertes zijn transparant en vrijblijvend — geen verborgen kosten.',
  },
  {
    q: 'Hoe lang duurt het bouwen van een website?',
    a: 'Van brief tot live duurt het gemiddeld 1 tot 4 weken, afhankelijk van de complexiteit. U krijgt tussentijdse previews en volgt de voortgang live mee — zo weet u altijd waar het naartoe gaat.',
  },
  {
    q: 'Werkt Lunevo ook met WordPress?',
    a: 'Ja. Voor kleinere budgetten bouwen we professionele WordPress websites. Voor grotere of complexere projecten kiezen we voor Next.js. We helpen u de juiste keuze maken op basis van uw doelen en budget.',
  },
  {
    q: 'Wat is LLM SEO en waarom heb ik het nodig?',
    a: 'We optimaliseren uw website zodat AI-assistenten zoals ChatGPT en Perplexity ze zo goed mogelijk kunnen lezen en begrijpen. Of u effectief aanbevolen wordt, kan niemand garanderen — maar een correct gestructureerde site geeft u de beste kans.',
  },
  {
    q: 'Kan ik mijn content zelf aanpassen na oplevering?',
    a: 'Ja. We integreren Sanity CMS of WordPress zodat u teksten, foto\'s en pagina\'s zelf beheert via een eenvoudig dashboard. Geen technische kennis nodig.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section style={{ padding: '100px 0' }} id="faq">
      <Wrap>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px 100px', alignItems: 'start' }}>
          {/* Left — sticky */}
          <div className="faq-left" style={{ position: 'sticky', top: 100 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--accent)', borderRadius: 2 }} />
              <span className="font-mono-label">§ 05 — Veelgestelde vragen</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-bricolage), sans-serif',
                fontVariationSettings: "'opsz' 72",
                fontWeight: 500, fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: 24,
              }}
            >
              Alles wat u<br />
              <span style={{ fontStyle: 'italic' }}>wilt weten.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: '30ch', marginBottom: 32 }}>
              Staat uw vraag er niet bij? Stuur een mail naar{' '}
              <a href="mailto:info@lunevo.be" style={{ color: 'var(--accent)', textDecoration: 'none' }}>info@lunevo.be</a>
            </p>
            <a
              href="/offerte"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 22px', background: 'var(--accent)', color: 'var(--bg)',
                borderRadius: 10, fontSize: 13, fontWeight: 700,
                textDecoration: 'none', letterSpacing: '.02em',
              }}
            >
              Gratis offerte aanvragen →
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--rule-2)', paddingTop: 24, paddingBottom: 24 }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'flex-start',
                    justifyContent: 'space-between', gap: 20,
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 0, color: 'inherit', textAlign: 'left', fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 19, letterSpacing: '-0.01em', lineHeight: 1.3, color: 'var(--ink)' }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: 8,
                      border: '1px solid var(--rule-2)', display: 'grid', placeItems: 'center',
                      fontSize: 16, color: 'var(--accent)', marginTop: 2,
                      transition: 'transform .2s',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: '58ch' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule-2)' }} />
          </div>
        </div>
      </Wrap>

      <style>{`
        @media (max-width: 860px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-left { position: static !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Contact ─────────────────────────────────────────────── */
const channels = [
  { dot: '@', title: 'info@lunevo.be',  sub: 'E-mail · binnen 24u',        href: 'mailto:info@lunevo.be' },
  { dot: '✎', title: 'Project briefen', sub: 'Offerte-formulier · 3 min',  href: '/offerte' },
]

function Contact() {
  return (
    <section
      style={{
        padding: '120px 0',
        borderTop: '1px solid var(--rule-2)',
        background: 'radial-gradient(700px 400px at 50% 0%, rgba(255,158,59,.08), transparent 60%), linear-gradient(180deg, var(--bg-2), var(--bg))',
      }}
      id="contact"
    >
      <Wrap>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--accent)' }} />
              <span className="font-mono-label">§ 06 — Contact</span>
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
            <p style={{ marginTop: 32, color: 'var(--ink-2)', maxWidth: '38ch', fontSize: 17, lineHeight: 1.5 }}>
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
                  textDecoration: 'none', transition: 'transform .2s, border-color .2s, background .2s', color: 'inherit',
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateX(4px)'; el.style.borderColor = 'rgba(255,158,59,.3)'; el.style.background = 'rgba(255,158,59,.04)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.borderColor = 'var(--rule-2)'; el.style.background = 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,158,59,.12)', border: '1px solid rgba(255,158,59,.24)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 600, color: 'var(--accent)' }}>
                    {c.dot}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 20, letterSpacing: '-0.02em' }}>{c.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 2, fontFamily: 'ui-monospace, monospace', letterSpacing: '.04em' }}>{c.sub}</div>
                  </div>
                </div>
                <span style={{ fontSize: 18, color: 'var(--mute)' }}>→</span>
              </a>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '20px 24px', border: '1px solid var(--rule-2)', borderRadius: 16, background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,158,59,.12)', border: '1px solid rgba(255,158,59,.24)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 600, color: 'var(--accent)' }}>⌘</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 20, letterSpacing: '-0.02em' }}>België &amp; remote</div>
                  <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 2, fontFamily: 'ui-monospace, monospace', letterSpacing: '.04em' }}>Regio · wereldwijd</div>
                </div>
              </div>
              <span style={{ fontSize: 18, color: 'var(--mute)' }}>·</span>
            </div>
          </div>
        </div>
      </Wrap>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
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
      <Portfolio />
      <Why />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
