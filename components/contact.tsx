"use client"

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mridula-mahendran",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mridulamahendran",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mahendran.m@northeastern.edu",
    icon: Mail,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-light text-foreground mb-16 leading-relaxed max-w-xl"
        >
          Let's connect and create something meaningful together.
        </motion.p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm">{link.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground">
            mahendran.m@northeastern.edu
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Boston, MA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
