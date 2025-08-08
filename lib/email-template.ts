export function createEmailTemplate(data: {
  name: string
  email: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Message</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .content { background: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: 600; color: #495057; }
          .value { margin-top: 5px; }
          .message { background: #f8f9fa; padding: 15px; border-radius: 6px; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; color: #212529;">New Contact Form Message</h2>
            <p style="margin: 10px 0 0 0; color: #6c757d;">From your portfolio website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">
                <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">
                <div class="message">${data.message}</div>
              </div>
            </div>
          </div>
          
          <p style="text-align: center; color: #6c757d; font-size: 14px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      </body>
    </html>
  `
}
