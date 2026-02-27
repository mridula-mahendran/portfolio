"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Camera, Music, Trophy, Compass } from "lucide-react"

const targetRoles = [
  { icon: "code", label: "Software Engineer (Full-Stack / Backend / Frontend)" },
  { icon: "cloud", label: "Cloud / DevOps Engineer" },
  { icon: "settings", label: "Site Reliability Engineer" },
]

const beyondCode = [
  {
    icon: Camera,
    title: "Amateur Photographer",
    description:
      "I have a whole Instagram page dedicated to capturing birds mostly (there's a surprising amount of patience involved in getting the perfect shot, but that's what makes it rewarding) and beautiful nature landscapes. Nature keeps me grounded.",
    link: { url: "https://www.instagram.com/fromhergallery", label: "@fromhergallery" },
  },
  {
    icon: Music,
    title: "Singer (Shy Edition)",
    description:
      "I trained in Carnatic music for years and while I don't practice formally anymore, you'll definitely catch me humming or singing out loud sometimes.",
  },
  {
    icon: Trophy,
    title: "Pickleball Enthusiast",
    description:
      "Picked it up and never looked back.",
  },
  {
    icon: Compass,
    title: "Explorer at Heart",
    description:
      "New city? I'm already mapping out the best coffee shops, hidden trails, and local food spots before I've even unpacked. I have a soft spot for aesthetic cafes, charming old buildings, and places with character — Boston has plenty of those.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const rolesRef = useRef(null)
  const rolesInView = useInView(rolesRef, { once: true, margin: "-100px" })

  const beyondRef = useRef(null)
  const beyondInView = useInView(beyondRef, { once: true, margin: "-100px" })

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
            {"I'm a recent graduate pursuing a Master of Science in Information Systems at Northeastern University, Boston."}
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
            {"I'm passionate about writing clean, maintainable code and creating intuitive user experiences. Currently seeking opportunities where I can contribute to meaningful projects and continue growing as a software engineer."}
          </motion.p>
        </div>

        {/* Roles I'm Targeting */}
        <div ref={rolesRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3"
          >
            {"Roles I'm Targeting"}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8 leading-relaxed"
          >
            {"I'm actively seeking full-time roles starting August 2026, with a primary focus on:"}
          </motion.p>

          <div className="space-y-4">
            {targetRoles.map((role, i) => (
              <motion.div
                key={role.label}
                initial={{ opacity: 0, x: -20 }}
                animate={rolesInView ? { opacity: 1, x: 0 } : {}}
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

        {/* Beyond the Code */}
        <div ref={beyondRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={beyondInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3"
          >
            Beyond the Code
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={beyondInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-10 leading-relaxed"
          >
            {"I'm a big believer that the most interesting people are the ones with lives outside their laptops. So here's mine:"}
          </motion.p>

          <div className="space-y-8">
            {beyondCode.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={beyondInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="flex gap-5"
                >
                  <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-full border border-border/60 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1.5">{item.title}</h4>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {item.description}
                      {item.link && (
                        <>
                          {" "}
                          <a
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors duration-200"
                          >
                            {item.link.label}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
