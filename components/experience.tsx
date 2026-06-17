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
      "Developed reusable HMI/SCADA components for an industrial automation platform using Angular, TypeScript, and SIMPL, resolving 30+ UI defects during QA cycles and ensuring consistent rendering across multi-resolution displays",
      "Implemented REST API endpoints using Node.js with Express and Prisma ORM, adding input validation (Zod), pagination, and role-based access checks across 15+ routes for an HMI asset configuration management service",
      "Built the document ingestion pipeline for a RAG-based documentation assistant using Python, LangChain, pdfplumber, and Camelot, processing 120+ technical documents with text and table extraction into ChromaDB embeddings",
      "Containerized the RAG pipeline and FastAPI backend using Docker, deployed to AWS ECS Fargate with S3 for document storage and CloudWatch for logging, reducing manual deployment steps from 12 to a single command",
      "Established GitLab CI/CD pipelines on code.siemens.com for the team's Python services, automating linting, unit tests (pytest), Docker image builds, and deployments to dev/staging environments, cutting build-to-deploy time from 15 minutes to under 5 minutes",
    ],
  },
  {
    title: "Advanced Application Engineering Associate",
    company: "Accenture",
    location: "Chennai, India",
    period: "Nov 2023 - Aug 2024",
    highlights: [
      "Engineered customer-facing features for the online banking portal using React 18, TypeScript, and Redux Toolkit, including transaction history redesign with advanced filtering and CSV export for 100K+ monthly active users",
      "Implemented API enhancements for the payments module using Spring Boot 3 and Spring Data JPA, adding input validation and standardized error handling that reduced invalid request errors in QA by 30%",
      "Participated in migrating three legacy SOAP-based services to REST APIs on Spring Boot, mapping existing WSDL contracts to OpenAPI 3.0 specifications and coordinating with downstream consumer teams during the cutover",
      "Monitored application health across 8 microservices using AppDynamics and Grafana, configuring 12+ alerts based on team-defined SLOs that helped detect a connection pool exhaustion issue before customer impact",
      "Contributed to bi-weekly client demos and sprint reviews, documented API contracts in Confluence, and supported knowledge transfer sessions during a team expansion from 12 to 18 engineers",
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
