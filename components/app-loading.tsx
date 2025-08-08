"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

export function AppLoading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Loading Header */}
      <div className="border-b border-gray-100 p-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <div className="hidden md:flex space-x-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16" />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-1">
        <motion.div
          className="h-1 bg-gray-900"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Loading Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full mx-auto"
          />
          <div className="space-y-2">
            <Skeleton className="h-4 w-48 mx-auto" />
            <Skeleton className="h-3 w-32 mx-auto" />
          </div>
          <p className="text-sm text-gray-500">{Math.round(progress)}% loaded</p>
        </div>
      </div>
    </div>
  )
}
