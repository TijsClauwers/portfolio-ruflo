import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { naam, bedrijf, email, telefoon, type, functies, budget, deadline, extra } = body

  try {
    await resend.emails.send({
      from: 'Lunevo Offerte <onboarding@resend.dev>',
      to: 'streamerbtw293@gmail.com',
      replyTo: email,
      subject: `Nieuwe offerte aanvraag — ${naam}${bedrijf ? ` (${bedrijf})` : ''}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0b0d; color: #f2ece0; border-radius: 12px; overflow: hidden;">
          <div style="background: #131317; padding: 32px; border-bottom: 1px solid rgba(242,236,224,.1);">
            <div style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: #7a7466; margin-bottom: 8px;">Lunevo · Offerte aanvraag</div>
            <h1 style="margin: 0; font-size: 26px; font-weight: 500; color: #f2ece0;">${naam}</h1>
            ${bedrijf ? `<div style="margin-top: 4px; color: #cfc6b5; font-size: 15px;">${bedrijf}</div>` : ''}
          </div>

          <div style="padding: 32px;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #7a7466; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; width: 140px;">E-mail</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #f2ece0;"><a href="mailto:${email}" style="color: #ff9e3b; text-decoration: none;">${email}</a></td>
              </tr>
              ${telefoon ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #7a7466; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Telefoon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #f2ece0;">${telefoon}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #7a7466; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Type website</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #f2ece0;">${type}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #7a7466; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Functies</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #f2ece0;">${(functies as string[]).join(', ') || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #7a7466; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #f2ece0;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #7a7466; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Deadline</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(242,236,224,.08); color: #f2ece0;">${deadline}</td>
              </tr>
            </table>

            ${extra ? `
            <div style="margin-top: 28px;">
              <div style="font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #7a7466; margin-bottom: 10px;">Extra info</div>
              <div style="background: #131317; border: 1px solid rgba(242,236,224,.1); border-radius: 8px; padding: 16px; color: #cfc6b5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${extra}</div>
            </div>` : ''}

            <div style="margin-top: 32px; padding: 16px 20px; background: rgba(255,158,59,.08); border: 1px solid rgba(255,158,59,.2); border-radius: 8px; font-size: 13px; color: #ffd9ac;">
              Beantwoord deze mail rechtstreeks om ${naam} te contacteren.
            </div>
          </div>

          <div style="padding: 20px 32px; border-top: 1px solid rgba(242,236,224,.08); font-size: 11px; color: #7a7466; letter-spacing: .06em; text-transform: uppercase;">
            Lunevo · Studio voor digitaal maatwerk · lunevo.be
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Verzenden mislukt' }, { status: 500 })
  }
}
