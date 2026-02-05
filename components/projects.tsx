"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Cloud Native Web Application",
    tech: ["AWS", "Terraform", "Packer", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/mridula-mahendran/webapp",
    description: [
      "Designed a cloud-native web application using microservices architecture deployed on AWS for scalability",
      "Automated AWS infrastructure using Terraform, provisioning VPCs, EC2, ALB, Auto Scaling, and Route 53",
      "Built CI/CD pipeline with GitHub Actions for automated testing and seamless deployments",
    ],
  },
  {
    title: "DataFyre",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Redux"],
    github: "https://github.com/mridula-mahendran/Data-Fyre",
    description: [
      "Designed a scalable enterprise-level synthetic data generation platform using the MERN stack",
      "Implemented role-based access control, email authentication, and internationalization (i18n)",
      "Built dynamic forms with ANT Design and real-time mock data previews",
    ],
  },
  {
    title: "Employee Dashboard",
    tech: ["Java", "Spring Boot", "Hibernate", "TypeScript", "Angular", "MySQL"],
    github: "https://github.com/mridula-mahendran/employee_dashboard",
    description: [
      "Designed a centralized system for managing employee information with secure data storage",
      "Implemented Chart.js visualizations for department statistics with real-time data updates",
    ],
  },
  {
    title: "Space Debris Tracking",
    tech: ["Java", "Swing", "SQLite", "JXMapViewer"],
    github: "https://github.com/mridula-mahendran/space-debris-tracking-and-management-system",
    description: [
      "Built a centralized platform for real-time tracking and management of space debris, ensuring global collaboration among space agencies",
      "Designed and implemented role-based dashboards utilizing Java Swing for tailored task management and access control",
      "Developed real-time orbital debris tracking with JXMapViewer, integrating predictive analytics for collision risk assessments",
    ],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-16"
        >
          Projects
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                      className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 border border-border/50 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <ul className="space-y-4">
                {project.description.map((desc, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                    className="flex gap-4 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-foreground/20 select-none mt-1.5 text-xs">&#9642;</span>
                    <span>{desc}</span>
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
