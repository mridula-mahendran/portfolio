"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Angular", "Node.js", "Express.js", "Spring Boot", "Hibernate", "Redux"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "GCP", "Terraform", "Packer", "GitHub Actions"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "VS Code", "Eclipse", "Jupyter Notebook"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-16"
        >
          Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-medium text-foreground mb-5 tracking-wide">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.03 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="px-4 py-2 text-sm text-muted-foreground bg-background border border-border rounded-full hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
