"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

interface SectionLoadingProps {
  title?: string
  lines?: number
  cards?: number
  className?: string
}

export function SectionLoading({ title = "Loading...", lines = 3, cards = 0, className = "" }: SectionLoadingProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`max-w-4xl mx-auto px-6 py-20 ${className}`}
    >
      <div className="space-y-12">
        <div className="text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-1 w-12 mx-auto" />
        </div>

        {cards > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: cards }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-4">
            {Array.from({ length: lines }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
