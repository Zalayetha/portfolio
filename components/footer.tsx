"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Zalayetha" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-zaghy-zalayetha-sofjan/" },
    { icon: Mail, href: "mailto:zalayetha@gmail.com" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-muted/50 border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Zaghy Zalayetha</h3>
            <p className="text-muted-foreground">Software Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-muted"
                  onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>&copy; 2025 Zaghy Zalayetha. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
