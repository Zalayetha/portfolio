"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { sendEmail } from "@/lib/send-email"
import { motion, AnimatePresence } from "framer-motion"

interface FormState {
  success: boolean
  message: string
}

export function ContactFormWithLoading() {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<FormState | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Clear previous state
    setFormState(null)

    const form = e.currentTarget
    const formDataObj = new FormData(form)

    startTransition(async () => {
      const result = await sendEmail(formDataObj)
      setFormState(result)

      // Clear form on success
      if (result.success) {
        setFormData({ name: "", email: "", message: "" })
        form.reset()
      }
    })
  }

  return (
    <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-gray-900">Send a Message</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="bg-white border-gray-200 focus:ring-2 focus:ring-gray-400 transition-all"
              disabled={isPending}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="bg-white border-gray-200 focus:ring-2 focus:ring-gray-400 transition-all"
              disabled={isPending}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              rows={4}
              className="bg-white border-gray-200 focus:ring-2 focus:ring-gray-400 transition-all resize-none"
              disabled={isPending}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-colors"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>

        {/* Form State Messages */}
        <AnimatePresence mode="wait">
          {formState && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                formState.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {formState.success ? (
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
              )}
              <span>{formState.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Info */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-notion-small text-gray-500 text-center">
            Or reach out directly at{" "}
            <a
              href="mailto:zalayetha@gmail.com"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              zalayetha@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
