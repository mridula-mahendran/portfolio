"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-1"
          >
            <h3 className="text-sm font-medium text-foreground tracking-wide">
              Mridula Mahendran
            </h3>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Software Engineer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
