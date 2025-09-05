"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Student Budi Luhur",
      description:
        "A mobile application designed to support Budi Luhur students in managing their academic life with real-time and up-to-date information.",
      image: "/images/projects/student/student.png",
      // image: "",
      tags: ["Flutter", "Dart"],
      github: "",
      demo: "https://apps.apple.com/id/app/student-budi-luhur/id6478258562",
    },
    {
      title: "E-KTP Verification System",
      description:
        "Automated E-KTP (Indonesian ID card) verification system to validate student biodata at Universitas Budi Luhur.",
      image: "/images/projects/ektpverification/ektpverification.png",
      tags: ["Flask", "Python", "Tensorflow", "Flutter", "Dart"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gray-900 mx-auto"
            ></motion.div>
          </div>
        </AnimatedSection>

        {
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md bg-white transition-all duration-300 h-full">
                  <motion.div
                    className="aspect-auto bg-gray-100 rounded-t-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={
                        project.image ||
                        "/placeholder.svg?height=10000&width=400"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-gray-200 hover:bg-gray-50 bg-white"
                        >
                          <a href={project.github}>
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          asChild
                          className="bg-gray-900 hover:bg-gray-800 text-white"
                        >
                          <a href={project.demo}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        }
      </div>
    </section>
  );
}
