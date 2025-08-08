"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    // Remove the transition disable class after initial load
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition-disable")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}
