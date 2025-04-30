
"use client"

import { FC } from 'react'
import { useEffect, useRef } from "react"

import { motion, useInView, useAnimation } from "framer-motion"

interface StateSectionProps {
}

const StateSection: FC<StateSectionProps> = ({ }) => {
  const controls = useAnimation()

  // Refs for scroll animations
  const heroRef = useRef(null)

  // InView states
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      controls.start("visible")
    }
  }, [heroInView, controls])

  return <motion.section
    className="py-16 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "99.9%", label: "Uptime" },
          { value: "50%", label: "Less Bandwidth" },
          { value: "2x", label: "Faster Performance" },
          { value: "24/7", label: "Support" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold text-sky-600"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
            >
              {stat.value}
            </motion.div>
            <div className="text-slate-600 mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
}

export default StateSection