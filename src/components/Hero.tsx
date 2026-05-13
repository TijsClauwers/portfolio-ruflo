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
          <span className="font-mono-label">Studio · Belgium · Est. 2026</span>
        </div>

        {/* Two-column layout: headline+copy left, cards right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr clamp(340px, 36vw, 460px)',
            gap: '0 60px',
            marginTop: 0,
            position: 'relative', zIndex: 2,
            alignItems: 'center',
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
            <div className="hero-stats" style={{ display: 'flex', gap: 40, marginTop: 40 }}>
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

          {/* Right: feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* Performance */}
            <div style={{
              background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
              borderRadius: 18, padding: '22px 24px',
              boxShadow: '0 4px 24px rgba(0,0,0,.35)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: 'ui-monospace,monospace', letterSpacing: '.1em', color: 'rgba(255,158,59,.6)', textTransform: 'uppercase', marginBottom: 3 }}>Lighthouse</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>Performance</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                  <span style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontSize: 48, fontWeight: 600, color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 1 }}>98</span>
                  <span style={{ fontSize: 14, color: 'var(--mute)', paddingBottom: 6 }}>/100</span>
                </div>
              </div>
              <div style={{ height: 5, borderRadius: 3, background: 'rgba(242,236,224,.06)', overflow: 'hidden', marginBottom: 14 }}>
                <div style={{ height: '100%', width: '98%', borderRadius: 3, background: 'linear-gradient(90deg, #FF9E3B, #ffd280)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                {[['FCP','0.9s'],['LCP','1.2s'],['CLS','0.00'],['INP','48ms']].map(([k,v]) => (
                  <div key={k} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>{v}</div>
                    <div style={{ fontSize: 9, fontFamily: 'ui-monospace,monospace', color: 'var(--mute)', letterSpacing: '.06em', marginTop: 2 }}>{k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

              {/* SEO & LLM */}
              <div style={{
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 18, padding: '18px 20px',
                boxShadow: '0 4px 24px rgba(0,0,0,.35)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink)' }}>SEO &amp; LLM</span>
                  <span style={{
                    fontSize: 9, fontFamily: 'ui-monospace,monospace',
                    color: 'rgba(255,158,59,.8)', padding: '2px 6px',
                    background: 'rgba(255,158,59,.08)', border: '1px solid rgba(255,158,59,.18)',
                    borderRadius: 4, letterSpacing: '.04em',
                  }}>✓ PASS</span>
                </div>
                {['Indexeerbaar', 'Structured data', 'llms.txt', 'Cite-baar'].map((c) => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, boxShadow: '0 0 6px rgba(255,158,59,.5)' }} />
                    <span style={{ fontSize: 11, color: 'var(--ink-2)' }}>{c}</span>
                  </div>
                ))}
              </div>

              {/* Mobiel-first */}
              <div style={{
                background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
                borderRadius: 18, padding: '18px 20px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,.35)',
              }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink)', alignSelf: 'flex-start', marginBottom: 14 }}>Mobiel-first</span>
                <div style={{
                  width: 48, height: 74,
                  border: '2px solid rgba(255,158,59,.25)', borderRadius: 12,
                  background: 'rgba(255,158,59,.04)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '7px 6px 10px', gap: 4, position: 'relative',
                }}>
                  <div style={{ width: 14, height: 2, background: 'rgba(255,158,59,.3)', borderRadius: 1 }} />
                  <div style={{ width: '85%', height: 2, background: 'rgba(255,158,59,.4)', borderRadius: 1 }} />
                  <div style={{ width: '65%', height: 2, background: 'rgba(255,158,59,.2)', borderRadius: 1 }} />
                  <div style={{ width: '85%', flex: 1, background: 'rgba(255,158,59,.07)', border: '1px solid rgba(255,158,59,.14)', borderRadius: 5 }} />
                  <div style={{ position: 'absolute', bottom: 6, width: 16, height: 2, background: 'rgba(255,255,255,.15)', borderRadius: 1 }} />
                </div>
                <div style={{ display: 'flex', gap: 5, marginTop: 12 }}>
                  {['mob','tab','dsk'].map((d) => (
                    <span key={d} style={{
                      fontSize: 9, fontFamily: 'ui-monospace,monospace',
                      color: 'rgba(255,158,59,.5)', padding: '3px 6px',
                      background: 'rgba(255,158,59,.06)', border: '1px solid rgba(255,158,59,.12)',
                      borderRadius: 4,
                    }}>{d}</span>
                  ))}
                </div>
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
