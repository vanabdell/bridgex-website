import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // 1. Read form data
    const body = await request.json()
    const { name, email, company, message, service } = body

    // 2. Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nom, email et message sont requis.' },
        { status: 400 }
      )
    }

    // 3. Send email via Resend
    const { error } = await resend.emails.send({
      from: 'BridgeX Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nouveau message de ${name} — BridgeX`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          
          <!-- Header -->
          <div style="background:#F5C800;padding:24px;border-radius:8px 8px 0 0;">
            <h1 style="color:#000;margin:0;font-size:20px;">
              Nouveau message — BridgeX
            </h1>
          </div>

          <!-- Body -->
          <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;width:120px;">Nom</td>
                <td style="padding:8px 0;font-weight:bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;">Email</td>
                <td style="padding:8px 0;">
                  <a href="mailto:${email}" style="color:#0066cc;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;">Entreprise</td>
                <td style="padding:8px 0;">${company || '—'}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;">Service</td>
                <td style="padding:8px 0;">${service || '—'}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top:16px;padding-top:16px;border-top:1px solid #ddd;">
              <p style="color:#666;font-size:13px;margin:0 0 8px;">Message</p>
              <p style="white-space:pre-wrap;margin:0;line-height:1.6;">${message}</p>
            </div>

            <!-- Footer -->
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #ddd;text-align:center;">
              <p style="color:#999;font-size:11px;margin:0;">
                Envoyé depuis le formulaire de contact BridgeX
              </p>
            </div>
          </div>

        </div>
      `,
    })

    // 4. Handle Resend error
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    // 5. Success
    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}