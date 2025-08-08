"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    const validatedData = contactFormSchema.parse(data)

    // Here you would integrate with your email service
    // For now, we'll simulate sending an email

    // Example with Resend (you can replace with your preferred service)
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)

    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'zaghy.zalayetha@gmail.com',
    //   subject: `New contact form message from ${validatedData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    // For demonstration, we'll simulate a delay and success
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Log the form submission (in production, you'd send the actual email)
    console.log("Contact form submission:", validatedData)

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
