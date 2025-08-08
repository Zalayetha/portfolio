"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeIndicator() {
  const { theme, systemTheme } = useTheme()
  const [showIndicator, setShowIndicator] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setShowIndicator(true)
      const timer = setTimeout(() => setShowIndicator(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [theme, mounted])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-4 right-4 z-50 bg-black/80 dark:bg-white/80 text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          {currentTheme === "dark" ? "🌙" : "☀️"} {currentTheme?.charAt(0).toUpperCase() + currentTheme?.slice(1)} mode
        </motion.div>
      )}
    </AnimatePresence>
  )
}
