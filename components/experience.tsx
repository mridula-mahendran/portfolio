"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Software Developer Co-op",
    company: "Siemens Digital Industries Software",
    location: "Plano, Texas",
    period: "Jun 2025 - Dec 2025",
    highlights: [
      "Enhanced TIA Portal's interactive features using ReactJS and Node.js, boosting system performance by 15%",
      "Designed RESTful APIs with Swagger/OpenAPI in a microservices architecture and established CI/CD pipelines",
      "Optimized multi-screen SCADA/HMI systems for real-time visualization of 25+ electrical parameters",
      "Led Agile execution including stand-ups, sprint planning, demos, and code reviews",
    ],
  },
  {
    title: "Advanced Application Engineering Associate",
    company: "Accenture",
    location: "Chennai, India",
    period: "Nov 2023 - Aug 2024",
    highlights: [
      "Developed Spring Boot-based Customer Account Management microservice with RESTful APIs",
      "Designed and optimized complex MySQL schemas with indexes and execution plan analysis",
      "Integrated OAuth2 and JWT-based authentication across microservices for secure access control",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -left-8 top-0 w-px h-full bg-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground tracking-tight">{exp.title}</h3>
                  <p className="text-muted-foreground mt-1">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right flex-shrink-0">
                  <p>{exp.location}</p>
                  <p className="font-mono text-xs mt-1">{exp.period}</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                    className="flex gap-4 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-foreground/20 select-none mt-1.5 text-xs">&#9642;</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
