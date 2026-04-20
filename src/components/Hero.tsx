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
            Beschikbaar voor Q2 / Q3 2026
          </span>
          <span className="font-mono-label">Studio · Belgium · Est. 2024</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontWeight: 500,
            fontSize: 'clamp(64px, 11vw, 160px)',
            position: 'relative', zIndex: 2,
          }}
        >
          Websites<br />
          die mensen<br />
          <span
            style={{
              color: 'var(--accent)', fontWeight: 400, fontStyle: 'italic',
            }}
          >
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

        {/* Meta row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '40px 60px',
            marginTop: 48,
            position: 'relative', zIndex: 2,
          }}
        >
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '46ch' }}>
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
                { v: '<2s',     l: 'Gemiddelde laadtijd'     },
                { v: '98/100',  l: 'Lighthouse performance'  },
                { v: '24u',     l: 'Reactietijd'             },
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

          {/* Feature cards */}
          <div
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
              alignSelf: 'start', width: 'clamp(280px, 30vw, 380px)',
            }}
          >
            {/* Performance */}
            <div
              style={{
                gridColumn: '1 / -1',
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 16, padding: '16px 20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)' }}>Performance</span>
                <span style={{ fontSize: 14, color: 'var(--accent)' }}>⚡</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontSize: 36, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.03em' }}>98</span>
                <span style={{ fontSize: 14, color: 'var(--mute)' }}>/100</span>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: 'rgba(242,236,224,.08)' }}>
                <div style={{ height: '100%', width: '98%', borderRadius: 2, background: 'var(--accent)' }} />
              </div>
            </div>

            {/* SEO */}
            <div
              style={{
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 16, padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-2)' }}>SEO &amp; LLM</span>
                <span style={{ fontSize: 12, color: 'var(--accent)' }}>S</span>
              </div>
              {['Indexeerbaar', 'Structured data', 'llms.txt', 'Cite-baar'].map((c) => (
                <div key={c} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 4 }}>
                  <span style={{ color: 'var(--ink-2)' }}>{c}</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div
              style={{
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 16, padding: '14px 16px', display: 'flex',
                flexDirection: 'column', alignItems: 'center', gap: 10,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-2)', alignSelf: 'flex-start' }}>Mobiel</span>
              <div
                style={{
                  width: 36, height: 52, border: '1.5px solid rgba(255,158,59,.3)',
                  borderRadius: 8, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 4,
                }}
              >
                <div style={{ width: 20, height: 3, borderRadius: 2, background: 'rgba(255,158,59,.35)' }} />
                <div style={{ width: 16, height: 3, borderRadius: 2, background: 'rgba(255,158,59,.2)' }} />
                <div style={{ width: 14, height: 12, borderRadius: 4, background: 'rgba(255,158,59,.15)', marginTop: 2 }} />
              </div>
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
