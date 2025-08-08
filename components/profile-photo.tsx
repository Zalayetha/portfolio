"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function ProfilePhoto() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="flex justify-center mb-8"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer"
      >
        {/* Main profile photo */}
        <motion.div
          animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-50 relative"
        >
          <img src="/images/profile.png" alt="Alex Johnson - High Five!" className="w-full h-full object-cover" />

          {/* Overlay gradient for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Floating high-five emoji */}
        <motion.div
          animate={{
            y: isHovered ? [-5, -15, -5] : [0, -10, 0],
            rotate: isHovered ? [0, 15, -15, 0] : [0, 5, -5, 0],
            scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
          }}
          transition={{
            duration: isHovered ? 0.6 : 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-2 -right-2 text-2xl bg-white rounded-full p-1 shadow-md border-2 border-gray-100"
        >
          ✋
        </motion.div>

        {/* Pulse ring effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-full border-2 border-gray-300"
          />
        )}

        {/* Status indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-full h-full bg-green-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
