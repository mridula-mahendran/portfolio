"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          About
        </motion.h2>
        
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-light leading-relaxed text-foreground"
          >
            I'm a recent graduate pursuing a Master of Science in Information Systems at Northeastern University, Boston.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            With a foundation in full-stack development and cloud technologies, I specialize in building scalable web applications using modern frameworks and microservices architecture. My experience spans from enterprise-level application development at Accenture to industrial automation solutions at Siemens.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I'm passionate about writing clean, maintainable code and creating intuitive user experiences. Currently seeking opportunities where I can contribute to meaningful projects and continue growing as a software engineer.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
