'use client'

export default function Hero() {
  return (
    <header
      style={{
        position: 'relative',
        padding: '140px 0 80px',
        overflow: 'hidden',
        background: `
          radial-gradient(1200px 600px at 80% 10%, rgba(255,158,59,.08), transparent 60%),
          radial-gradient(800px 500px at 10% 60%, rgba(255,158,59,.04), transparent 60%)
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)',
          opacity: 0.5,
        }}
      />

      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px', position: 'relative' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48, position: 'relative', zIndex: 2 }}>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 14px',
              background: 'rgba(255,158,59,.08)', border: '1px solid rgba(255,158,59,.24)',
              borderRadius: 999, fontSize: 12, color: 'var(--accent-2)', letterSpacing: '.02em',
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(255,158,59,.2)',
              }}
            />
            Beschikbaar voor projecten
          </span>
          <span className="font-mono-label">Studio · Belgium · Est. 2024</span>
        </div>

        {/* Two-column layout: headline+copy left, cards right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr clamp(280px, 30vw, 380px)',
            gap: '0 60px',
            marginTop: 0,
            position: 'relative', zIndex: 2,
            alignItems: 'start',
          }}
        >
          {/* Left: headline + copy */}
          <div>
            <h1
              className="font-display"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(64px, 11vw, 160px)',
              }}
            >
              Websites<br />
              die mensen<br />
              <span style={{ color: 'var(--accent)', fontWeight: 400, fontStyle: 'italic' }}>
                bijblijven
              </span>
              <span
                style={{
                  display: 'inline-block', width: '0.18em', height: '0.18em',
                  borderRadius: '50%', background: 'var(--accent)', marginLeft: '0.05em',
                  verticalAlign: 'middle',
                }}
              />
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '46ch', marginTop: 36 }}>
              Van lokale KMO&apos;s tot gedurfde merken — <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>wij bouwen snelle, mooie digitale
              ervaringen</strong> op maat van uw verhaal. Ontwerp, code en vindbaarheid in één hand.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px', fontSize: 15, fontWeight: 600,
                  background: 'var(--accent)', color: 'var(--bg)',
                  borderRadius: 999, transition: 'background .15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-2)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
              >
                Offerte aanvragen →
              </a>
              <a
                href="#diensten"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px', fontSize: 15, fontWeight: 500,
                  background: 'rgba(242,236,224,.05)', color: 'var(--ink)',
                  border: '1px solid var(--rule-2)', borderRadius: 999,
                  transition: 'background .15s', textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(242,236,224,.08)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(242,236,224,.05)' }}
              >
                Onze aanpak bekijken
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
              {[
                { v: '<2s',    l: 'Gemiddelde laadtijd'    },
                { v: '98/100', l: 'Lighthouse performance' },
                { v: '24u',    l: 'Reactietijd'            },
              ].map((s) => (
                <div key={s.l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-bricolage), sans-serif',
                      fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 500,
                      letterSpacing: '-.02em', color: 'var(--ink)',
                    }}
                  >
                    {s.v}
                  </span>
                  <span className="font-mono-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature cards — flush to top */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

            {/* Lighthouse scores — full width */}
            <div
              style={{
                gridColumn: '1 / -1',
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 16, padding: '16px 20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)' }}>Lighthouse</span>
                <span style={{ fontSize: 10, color: 'var(--mute)', fontFamily: 'monospace', letterSpacing: '.04em' }}>lunevo.be</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {[
                  { score: 98,  label: 'Performance',     color: 'var(--accent)' },
                  { score: 100, label: 'Accessibility',   color: '#4ade80' },
                  { score: 100, label: 'Best Practices',  color: '#4ade80' },
                  { score: 100, label: 'SEO',             color: '#4ade80' },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                      padding: '10px 4px',
                      background: 'rgba(255,255,255,.025)', borderRadius: 10,
                      border: '1px solid rgba(255,255,255,.04)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-bricolage), sans-serif',
                        fontSize: 24, fontWeight: 600,
                        color: m.color, letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {m.score}
                    </span>
                    <span style={{ fontSize: 9, color: 'var(--mute)', textAlign: 'center', lineHeight: 1.3 }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Web Vitals */}
            <div
              style={{
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 16, padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-2)' }}>Core Web Vitals</span>
                <span style={{ fontSize: 9, color: '#4ade80', fontWeight: 600, letterSpacing: '.04em' }}>● PASS</span>
              </div>
              {[
                { label: 'LCP', value: '1.2s' },
                { label: 'CLS', value: '0.00' },
                { label: 'INP', value: '48ms' },
              ].map((v) => (
                <div
                  key={v.label}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontSize: 10, marginBottom: 7,
                  }}
                >
                  <span style={{ color: 'var(--mute)', fontFamily: 'monospace', letterSpacing: '.06em' }}>{v.label}</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>{v.value}</span>
                </div>
              ))}
            </div>

            {/* SEO & LLM */}
            <div
              style={{
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 16, padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-2)' }}>SEO &amp; LLM-ready</span>
              </div>
              {[
                { label: 'Indexeerbaar',   icon: '✓' },
                { label: 'Structured data', icon: '✓' },
                { label: 'llms.txt',        icon: '✓' },
                { label: 'Cite-baar',       icon: '✓' },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontSize: 10, marginBottom: 7,
                  }}
                >
                  <span style={{ color: 'var(--ink-2)' }}>{c.label}</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 11 }}>{c.icon}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          header > div > div:last-child { grid-template-columns: 1fr !important; }
          header > div > div:last-child > div:last-child { display: none !important; }
        }
        @media (max-width: 600px) {
          header { padding: 100px 0 60px !important; }
          header > div { padding: 0 20px !important; }
          header > div > div:first-child { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </header>
  )
}
