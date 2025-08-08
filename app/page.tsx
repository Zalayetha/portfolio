"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PortfolioSkeleton } from "@/components/portfolio-skeleton"
import { useLoading } from "@/hooks/use-loading"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
  const isLoading = useLoading(1500) // 1.5 second loading simulation

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background"
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
