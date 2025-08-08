"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { Brain, Code, Smartphone, Zap, Users, Coffee, Target, TrendingUp, Award } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Exploring intelligent solutions and automation to solve complex problems",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Strong foundation in Flutter and cross-platform mobile solutions",
    },
  ]

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "10+" },
    { label: "Platforms", value: "4" },
  ]

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-notion-heading text-gray-900 mb-4">About Me</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gray-900 mx-auto"
            ></motion.div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="slideInLeft" delay={0.2}>
              <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-notion-small font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-blue-600" />
                        Mobile Development Foundation
                      </h4>
                      <p className="text-notion-body text-gray-600">
                        My journey began in mobile development with Flutter, where I built cross-platform applications
                        and learned the importance of user-centered design. This experience taught me to think about
                        performance, scalability, and creating intuitive user experiences.
                      </p>
                    </motion.div>


                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-notion-small font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Coffee className="h-4 w-4 text-amber-600" />
                        Beyond Coding
                      </h4>
                      <p className="text-notion-body text-gray-600">
                        When I'm not coding, I'm exploring productivity tools like Notion, staying updated with the
                        latest AI research, and experimenting with automation workflows. I'm also passionate about
                        sharing knowledge and learning from the developer community.
                      </p>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-notion-small font-semibold text-gray-900 mb-3">Current Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python",
                          "Flutter",
                          "Firebase",
                          "TensorFlow",
                          "Git",
                          "Swift",
                          "Kotlin"
                        ].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="scaleIn" delay={1}>
          <Card className="border-0 shadow-sm bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-notion-subheading text-gray-900 mb-2">Let's Build Something Together</h3>
                <p className="text-notion-body text-gray-600 max-w-2xl mx-auto">
                  I'm excited to collaborate on innovative projects. Let's create something impactful together.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
