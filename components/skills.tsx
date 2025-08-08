"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function Skills() {
  const skills = [
    "Flutter",
    "Dart",
    "Swift",
    "SwiftUI",
    "Kotlin",
    "Java",
    "Python",
    "Flask",
    "TensorFlow",
    "Firebase",
    "Git",
    "Android Development",
    "iOS Development",
    "Machine Learning",
  ]

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20 bg-gray-50">
      <div className="space-y-12">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-notion-heading text-gray-900 mb-4">Skills & Technologies</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gray-900 mx-auto"
            ></motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={0.3}>
          <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="text-sm px-4 py-2 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Optional: Add a simple description */}
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <div className="text-center">
            <p className="text-notion-body text-gray-600 max-w-2xl mx-auto">
              A diverse skill set spanning mobile development, machine learning, and modern software engineering
              practices.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
