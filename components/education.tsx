"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "Northeastern University",
    location: "Boston, MA",
    period: "Expected Aug 2026",
    coursework: [
      "Network Structures & Cloud Computing",
      "Web Design and UX Engineering",
      "Program Structure and Algorithms",
      "Software Quality Control and Management",
      "Application Engineering & Development",
      "AI Engineering and Applications",
    ],
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "Anna University",
    location: "Chennai, TN",
    period: "May 2023",
    coursework: [
      "Web Technology",
      "Cloud Computing",
      "Operating Systems",
      "Computer Architecture",
      "Data Structures and Algorithms",
      "Object Oriented Programming with Java",
      "Computer Networks",
      "Software Testing",
      "Microcontrollers and Microprocessors",
      "Discrete Mathematics",
      "Linear Algebra",
      "Computational Intelligence",
    ],
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mt-1">{edu.school}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right flex-shrink-0">
                  <p>{edu.location}</p>
                  <p className="font-mono text-xs mt-1">{edu.period}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <motion.span
                      key={courseIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + courseIndex * 0.03,
                      }}
                      className="text-xs px-3 py-1.5 bg-background border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
