"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { ProfilePhoto } from "@/components/profile-photo"

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center space-y-8">
        <ProfilePhoto />

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-notion-title text-gray-900 leading-tight tracking-tight"
          >
            Hi, I'm Zaghy Zalayetha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-notion-body text-gray-600 max-w-2xl mx-auto"
          >
            Software Engineer
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center space-x-4"
        >
          {[
            { icon: Github, href: "https://github.com/Zalayetha" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-zaghy-zalayetha-sofjan/" },
            { icon: Mail, href: "mailto:zaghy.zalayetha@gmail.com" },
          ].map((social, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50 bg-white shadow-sm"   onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}>
                <social.icon className="h-5 w-5" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Button variant="ghost" className="hover:bg-gray-50">
              <ArrowDown className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
