"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

interface TimelineItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  type: "work" | "education" | "project"
  description: string
  achievements: string[]
  technologies: string[]
  current?: boolean
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Mobile Application Developer",
    company: "Universitas Budi Luhur",
    location: "Jakarta, Indonesia",
    period: "2023 - Present",
    type: "work",
    current: true,
    description:
      "Developed mobile applications from concept to launch, collaborating closesly with system analysts to define requirements and spesification.",
    achievements: [
      "Engineered two key applications using Flutter: Student Budi Luhur and Employee Budi Luhur, which support academic and administrative functions",
      "Developed a native Student Budi Luhur application for the IOS platform using SwiftUI",
      "Performed maintenance and bug fixes one existing Android applications, demonstrating proficiency in Java Android.",
      "Experienced in team-based work, ensuring effective communication and a smooth workflow"
    ],
    technologies: ["Swift","SwiftUI","Dart","Flutter","Java"],
  },
  {
    id: "2",
    title: "Mobile Development Cohort at Bangkit Academy 2024 Batch 1",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    location: "Remote",
    period: "2024",
    type: "education",
    description:
      "Learned how to develop scalable mobile applications using Android (Kotlin), while also exploring ways to integrate machine learning and AI capabilities to enhance app functionality.",
    achievements: [
      "Built a content-based and audience-driven recommendation system to match YouTubers with potential collaborators, aiming to increase engagement and growth opportunities.",
    ],
    technologies: ["Kotlin","Android Development"],
  },
  {
    id: "3",
    title: "Bachelor of Informatics Engineering",
    company: "Universitas Budi Luhur",
    location: "Jakarta, Indonesia",
    period: "2020 - 2024",
    type: "education",
    description:
      "Completed Bachelor's degree in Informatics Engineering with comprehensive study in software engineering, algorithms, data structures, and mobile application development.",
    achievements: [
    "Developed an E-KTP verification system to automate student biodata validation using OCR and image classification techniques",
    ],
    technologies: [
      "Flask",
      "Python",
      "Tensorflow",
      "Flutter",
      "Dart"
    ],
  },
]

export function Timeline() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-notion-heading text-gray-900 mb-4">Experience & Milestones</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gray-900 mx-auto"
            ></motion.div>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white bg-gray-900 shadow-sm z-10"></div>

                {/* Current Badge */}
                {item.current && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-2 top-2 w-6 h-6 rounded-full bg-green-500 animate-pulse z-20"
                  >
                    <div className="absolute inset-1 rounded-full bg-green-400"></div>
                  </motion.div>
                )}

                {/* Content Card */}
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="ml-16">
                  <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-notion-subheading text-gray-900 mb-1">{item.title}</h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                              <Building2 className="h-4 w-4" />
                              <span className="text-notion-small font-medium">{item.company}</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1">
                            <Badge
                              variant={
                                item.type === "work" ? "default" : item.type === "education" ? "secondary" : "outline"
                              }
                              className="w-fit text-notion-small"
                            >
                              {item.type === "work"
                                ? "💼 Work"
                                : item.type === "education"
                                  ? "🎓 Education"
                                  : "🚀 Learning"}
                            </Badge>
                            {item.current && (
                              <Badge
                                variant="outline"
                                className="w-fit text-green-600 border-green-200 bg-green-50 text-notion-small"
                              >
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-notion-small text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-notion-body text-gray-600">{item.description}</p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-notion-small font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-notion-small text-gray-600"
                              >
                                <span className="text-gray-400 mt-1.5">•</span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-notion-small font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
