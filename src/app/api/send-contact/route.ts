import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  existingSeller: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.company || !body.phone || !body.existingSeller) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing RESEND_API_KEY' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'SellerCtrl <onboarding@resend.dev>', // Will use default in dev, change for production
      to: 'sellerctrleg@gmail.com',
      subject: `New Partnership - ${body.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #4A90E2;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #4A90E2;
                margin-bottom: 5px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
              }
              .divider {
                border-bottom: 1px solid #ddd;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Partnership Inquiry</h1>
                <p style="margin: 5px 0 0 0;">From ${body.company}</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${body.name}</div>
                </div>
                
                <div class="divider"></div>
                
                <div class="field">
                  <div class="field-label">Company:</div>
                  <div class="field-value">${body.company}</div>
                </div>
                
                <div class="divider"></div>
                
                <div class="field">
                  <div class="field-label">Phone:</div>
                  <div class="field-value">${body.phone}</div>
                </div>
                
                <div class="divider"></div>
                
                <div class="field">
                  <div class="field-label">Existing Amazon Seller:</div>
                  <div class="field-value">${body.existingSeller === 'yes' ? 'Yes' : 'No'}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
