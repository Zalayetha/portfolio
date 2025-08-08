"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "zalayetha@gmail.com",
      href: "mailto:zalayetha@gmail.com",
      description: "Send me an email directly",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tangerang, Indonesia",
      description: "Available for remote work",
    },
  ]

  const handleEmailClick = (subject?: string) => {
    const email = "zalayetha@gmail.com"
    const mailtoUrl = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
    window.location.href = mailtoUrl
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-notion-heading text-gray-900 mb-4">Get In Touch</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gray-900 mx-auto"
            ></motion.div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Contact Actions */}
          <AnimatedSection animation="slideInLeft" delay={0.2}>
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-notion-subheading text-gray-900 mb-2">Let's Connect</h3>
                    <p className="text-notion-body text-gray-600 mb-6">
                      Ready to discuss your next project or just want to say hello? I'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => handleEmailClick("Project Inquiry")}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Project Inquiry
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => handleEmailClick("Collaboration Opportunity")}
                        variant="outline"
                        className="w-full border-gray-200 hover:bg-gray-50"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Discuss Collaboration
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => handleEmailClick()}
                        variant="outline"
                        className="w-full border-gray-200 hover:bg-gray-50"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        General Inquiry
                      </Button>
                    </motion.div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 text-center">
                    <p className="text-notion-small text-gray-500">
                      Or email me directly at{" "}
                      <a
                        href="mailto:zalayetha@gmail.com"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors underline"
                      >
                        zalayetha@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="slideInRight" delay={0.2 + index * 0.1}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="bg-gray-100 p-3 rounded-full"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="h-5 w-5 text-gray-600" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-notion-small font-semibold text-gray-900">{info.title}</h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-notion-body text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-notion-body text-gray-600">{info.value}</p>
                          )}
                          <p className="text-notion-small text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="scaleIn" delay={0.7}>
          <Card className="border-0 shadow-sm bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-notion-subheading text-gray-900 mb-3">Ready to Start Something Great?</h3>
                <p className="text-notion-body text-gray-600 max-w-2xl mx-auto mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to chat about technology, I'm
                  always open to new opportunities and conversations.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => handleEmailClick("Let's Work Together!")}
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Let's Work Together
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
