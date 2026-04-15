"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const targetRoles = [
  { label: "Software Engineer (Full-Stack / Backend / Frontend)" },
  { label: "Software Engineer in Test / QA Engineer / SDET" },
  { label: "Cloud / DevOps Engineer" },
  { label: "Site Reliability Engineer" },
]

export function Roles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="roles" className="py-32 px-6 bg-muted/50" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          {"Roles I'm Targeting"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10 leading-relaxed"
        >
          {"I'm actively seeking full-time roles starting August 2026, with a primary focus on:"}
        </motion.p>

        <div className="space-y-4">
          {targetRoles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-4 py-3 px-5 rounded-lg border border-border/50 bg-muted/30"
            >
              <span className="text-sm font-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 max-w-4 bg-border" />
              <span className="text-foreground text-[15px]">{role.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
