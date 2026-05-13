'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ── Types ───────────────────────────────────────────────── */
interface FormData {
  naam: string
  bedrijf: string
  email: string
  telefoon: string
  type: string
  functies: string[]
  deadline: string
  extra: string
}

const TOTAL_STEPS = 4

const websiteTypes = [
  { value: 'Bedrijfswebsite',  icon: '🏢', desc: 'Professionele online aanwezigheid' },
  { value: 'Portfolio',        icon: '🎨', desc: 'Toon uw werk aan de wereld'        },
  { value: 'Webshop',          icon: '🛒', desc: 'Verkoop online'                    },
  { value: 'Landing page',     icon: '🎯', desc: 'Eén pagina, één doel'             },
  { value: 'Blog / Magazine',  icon: '✍️', desc: 'Content & publicaties'             },
  { value: 'Anders',           icon: '💡', desc: 'Iets speciaals in gedachten'       },
]

const functieOptions = [
  'Maatwerk CMS',
  'SEO-optimalisatie',
  'LLM SEO (AI-zichtbaarheid)',
  'Webshop / betalingen',
  'Contactformulier',
  'Meertalig',
  'Animaties',
  'Fotografie/beeldwerk',
  'Onderhoud & beheer',
]

const deadlineOptions = [
  { value: 'Zo snel mogelijk',  label: 'Zo snel mogelijk' },
  { value: '1–2 maanden',       label: '1–2 maanden'      },
  { value: '3+ maanden',        label: '3+ maanden'       },
  { value: 'Nog niet zeker',    label: 'Nog niet zeker'   },
]

/* ── Shared styles ───────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '14px 16px',
  background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
  borderRadius: 12, color: 'var(--ink)', fontSize: 15,
  outline: 'none', transition: 'border-color .15s',
  fontFamily: 'inherit',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 500,
  color: 'var(--ink-2)', marginBottom: 8, letterSpacing: '.01em',
}

/* ── Step indicators ─────────────────────────────────────── */
function StepDots({ current }: { current: number }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 4, borderRadius: 2,
            width: i === current ? 24 : 8,
            background: i === current
              ? 'var(--accent)'
              : i < current
              ? 'rgba(255,158,59,.4)'
              : 'var(--rule-2)',
            transition: 'all .3s',
          }}
        />
      ))}
    </div>
  )
}

/* ── Individual steps ────────────────────────────────────── */
function Step1({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <label style={labelStyle}>Naam *</label>
        <input
          style={inputStyle}
          placeholder="Jan Janssen"
          value={data.naam}
          onChange={(e) => set({ naam: e.target.value })}
          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rule-2)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Bedrijf / organisatie</label>
        <input
          style={inputStyle}
          placeholder="Mijn Bedrijf BV (optioneel)"
          value={data.bedrijf}
          onChange={(e) => set({ bedrijf: e.target.value })}
          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rule-2)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>E-mail *</label>
        <input
          type="email"
          style={inputStyle}
          placeholder="jan@bedrijf.be"
          value={data.email}
          onChange={(e) => set({ email: e.target.value })}
          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rule-2)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Telefoonnummer</label>
        <input
          type="tel"
          style={inputStyle}
          placeholder="+32 470 00 00 00 (optioneel)"
          value={data.telefoon}
          onChange={(e) => set({ telefoon: e.target.value })}
          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--rule-2)' }}
        />
      </div>
    </div>
  )
}

function Step2({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <label style={labelStyle}>Wat voor website heeft u nodig? *</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {websiteTypes.map((t) => {
            const active = data.type === t.value
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => set({ type: t.value })}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 16px', borderRadius: 12, cursor: 'pointer',
                  background: active ? 'rgba(255,158,59,.1)' : 'var(--bg-2)',
                  border: `1px solid ${active ? 'var(--accent)' : 'var(--rule-2)'}`,
                  color: 'var(--ink)', textAlign: 'left', transition: 'all .15s',
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t.value}</div>
                  <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }}>{t.desc}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <label style={labelStyle}>Welke functies wilt u? (meerdere mogelijk)</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
          {functieOptions.map((f) => {
            const active = data.functies.includes(f)
            const discussSelected = data.functies.includes('Bespreken we samen')
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  // Remove "bespreken" marker when a real option is picked
                  const without = data.functies.filter((x) => x !== 'Bespreken we samen' && x !== f)
                  set({ functies: active ? without : [...without, f] })
                }}
                style={{
                  padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
                  fontSize: 13, fontWeight: active ? 500 : 400,
                  background: active ? 'rgba(255,158,59,.12)' : 'var(--bg-2)',
                  border: `1px solid ${active ? 'rgba(255,158,59,.4)' : 'var(--rule-2)'}`,
                  color: active ? 'var(--accent-2)' : discussSelected ? 'var(--mute)' : 'var(--ink-2)',
                  transition: 'all .15s',
                  opacity: discussSelected && !active ? 0.5 : 1,
                }}
              >
                {active ? '✓ ' : ''}{f}
              </button>
            )
          })}
        </div>
        {/* "Not sure" option */}
        {(() => {
          const active = data.functies.includes('Bespreken we samen')
          return (
            <button
              type="button"
              onClick={() => set({ functies: active ? [] : ['Bespreken we samen'] })}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 16px', borderRadius: 12, cursor: 'pointer',
                fontSize: 13, fontWeight: active ? 500 : 400,
                background: active ? 'rgba(255,158,59,.08)' : 'transparent',
                border: `1px solid ${active ? 'rgba(255,158,59,.35)' : 'var(--rule-2)'}`,
                color: active ? 'var(--accent-2)' : 'var(--mute)',
                transition: 'all .15s', width: '100%',
              }}
            >
              <span style={{ fontSize: 15 }}>💬</span>
              <div style={{ textAlign: 'left' }}>
                <div>{active ? '✓ ' : ''}Bespreken we tijdens het gesprek</div>
                <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 1, fontWeight: 400 }}>Nog niet zeker — geen probleem, we bekijken het samen</div>
              </div>
            </button>
          )
        })()}
      </div>
    </div>
  )
}

function Step3({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <label style={labelStyle}>Wanneer wilt u live gaan? *</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {deadlineOptions.map((d) => {
            const active = data.deadline === d.value
            return (
              <button
                key={d.value}
                type="button"
                onClick={() => set({ deadline: d.value })}
                style={{
                  padding: '16px 20px', borderRadius: 12, cursor: 'pointer',
                  background: active ? 'rgba(255,158,59,.1)' : 'var(--bg-2)',
                  border: `1px solid ${active ? 'var(--accent)' : 'var(--rule-2)'}`,
                  color: 'var(--ink)', textAlign: 'left', transition: 'all .15s',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-bricolage), sans-serif',
                    fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em',
                    color: active ? 'var(--accent)' : 'var(--ink)',
                  }}
                >
                  {d.label}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Step4({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <label style={labelStyle}>
        Vertel ons meer over uw project
        <span style={{ color: 'var(--mute)', fontWeight: 400 }}> (optioneel)</span>
      </label>
      <textarea
        rows={7}
        style={{
          ...inputStyle,
          resize: 'vertical', lineHeight: 1.6,
          minHeight: 160,
        }}
        placeholder={`Bijv:\n– Heeft u al een bestaande website?\n– Wat is het doel van de website?\n– Zijn er specifieke wensen qua stijl of kleur?\n– Zijn er voorbeeldwebsites die u aanspreken?`}
        value={data.extra}
        onChange={(e) => set({ extra: e.target.value })}
        onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--accent)' }}
        onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--rule-2)' }}
      />

      {/* Summary */}
      <div
        style={{
          marginTop: 8, padding: '20px 24px',
          background: 'var(--bg-2)', border: '1px solid var(--rule-2)',
          borderRadius: 12,
        }}
      >
        <div className="font-mono-label" style={{ marginBottom: 12 }}>Samenvatting</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: 'var(--ink-2)' }}>
          {[
            { l: 'Naam',     v: data.naam   },
            { l: 'E-mail',   v: data.email  },
            { l: 'Type',     v: data.type   },
            { l: 'Deadline', v: data.deadline },
          ].map((r) => (
            <div key={r.l} style={{ display: 'flex', gap: 12 }}>
              <span style={{ color: 'var(--mute)', width: 70, flexShrink: 0, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', paddingTop: 1 }}>{r.l}</span>
              <span style={{ color: 'var(--ink)' }}>{r.v || '—'}</span>
            </div>
          ))}
          {data.functies.length > 0 && (
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ color: 'var(--mute)', width: 70, flexShrink: 0, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', paddingTop: 1 }}>Functies</span>
              <span style={{ color: 'var(--ink)' }}>{data.functies.join(', ')}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────── */
const stepTitles = [
  { eyebrow: 'Stap 1 van 4', title: 'Over u',           sub: 'Wie mogen wij verwachten?' },
  { eyebrow: 'Stap 2 van 4', title: 'Uw website',       sub: 'Wat wilt u laten bouwen?'  },
  { eyebrow: 'Stap 3 van 4', title: 'Planning',           sub: 'Wanneer wilt u live gaan?' },
  { eyebrow: 'Stap 4 van 4', title: 'Laatste details',   sub: 'Bijna klaar!'              },
]

const emptyForm: FormData = {
  naam: '', bedrijf: '', email: '', telefoon: '',
  type: '', functies: [], deadline: '', extra: '',
}

function canProceed(step: number, data: FormData) {
  if (step === 0) return !!data.naam.trim() && !!data.email.trim()
  if (step === 1) return !!data.type
  if (step === 2) return !!data.deadline
  return true
}

export default function OffertePage() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(emptyForm)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const update = (patch: Partial<FormData>) => setData((d) => ({ ...d, ...patch }))

  async function submit() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/offerte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setDone(true)
    } catch {
      setError('Er ging iets mis. Probeer opnieuw of mail ons direct.')
    } finally {
      setLoading(false)
    }
  }

  const meta = stepTitles[step]

  /* ── Success ─── */
  if (done) {
    return (
      <main style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div
            style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'rgba(255,158,59,.12)', border: '1px solid rgba(255,158,59,.3)',
              display: 'grid', placeItems: 'center',
              fontSize: 32, margin: '0 auto 32px',
            }}
          >
            ✓
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 500,
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
            }}
          >
            Bericht <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ontvangen!</span>
          </h1>
          <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6, marginBottom: 36 }}>
            Bedankt, {data.naam.split(' ')[0]}. We nemen binnen 24 uur contact op via{' '}
            <span style={{ color: 'var(--ink)' }}>{data.email}</span>.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', background: 'var(--accent)', color: 'var(--bg)',
              borderRadius: 999, fontSize: 14, fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            ← Terug naar home
          </Link>
        </div>
      </main>
    )
  }

  /* ── Form ─── */
  return (
    <main style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh' }}>
      {/* Top bar */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(11,11,13,.85)', backdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--rule-2)',
          padding: '14px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em',
            color: 'var(--ink)', textDecoration: 'none',
          }}
        >
          Lu<span style={{ color: 'var(--accent)' }}>nevo</span>
        </Link>
        <StepDots current={step} />
        <Link
          href="/"
          style={{
            fontSize: 13, color: 'var(--mute)', textDecoration: 'none',
            fontFamily: 'ui-monospace, monospace', letterSpacing: '.06em',
            textTransform: 'uppercase',
          }}
        >
          Annuleren ✕
        </Link>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 620, margin: '0 auto',
          padding: 'clamp(100px, 12vh, 140px) 24px 80px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div className="font-mono-label" style={{ marginBottom: 12 }}>{meta.eyebrow}</div>
          <h1
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontVariationSettings: "'opsz' 72",
              fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 500,
              lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: 10,
            }}
          >
            {meta.title}
          </h1>
          <p style={{ color: 'var(--ink-2)', fontSize: 16 }}>{meta.sub}</p>
        </div>

        {/* Step content */}
        <div style={{ marginBottom: 32 }}>
          {step === 0 && <Step1 data={data} set={update} />}
          {step === 1 && <Step2 data={data} set={update} />}
          {step === 2 && <Step3 data={data} set={update} />}
          {step === 3 && <Step4 data={data} set={update} />}
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: '#ff6b6b', fontSize: 14, marginBottom: 16 }}>{error}</p>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            style={{
              padding: '12px 20px', borderRadius: 999, cursor: 'pointer',
              background: 'transparent', border: '1px solid var(--rule-2)',
              color: 'var(--ink-2)', fontSize: 14, fontWeight: 500,
              visibility: step === 0 ? 'hidden' : 'visible',
              transition: 'border-color .15s, color .15s',
            }}
          >
            ← Vorige
          </button>

          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              disabled={!canProceed(step, data)}
              onClick={() => setStep((s) => s + 1)}
              style={{
                padding: '12px 28px', borderRadius: 999, cursor: canProceed(step, data) ? 'pointer' : 'not-allowed',
                background: canProceed(step, data) ? 'var(--accent)' : 'rgba(255,158,59,.25)',
                color: canProceed(step, data) ? 'var(--bg)' : 'rgba(11,11,13,.5)',
                fontSize: 14, fontWeight: 600,
                border: 'none', transition: 'background .15s',
              }}
            >
              Volgende →
            </button>
          ) : (
            <button
              type="button"
              disabled={loading || !canProceed(step, data)}
              onClick={submit}
              style={{
                padding: '12px 28px', borderRadius: 999,
                cursor: loading ? 'wait' : 'pointer',
                background: 'var(--accent)', color: 'var(--bg)',
                fontSize: 14, fontWeight: 600,
                border: 'none', transition: 'background .15s',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Versturen…' : 'Offerte versturen →'}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
