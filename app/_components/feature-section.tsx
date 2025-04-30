"use client"

import { FC } from 'react'
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, useSpring, useAnimation } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureTab from "../../components/feature-tab"

interface FeatureSectionProps {
}

const FeatureSection: FC<FeatureSectionProps> = ({ }) => {

  const { scrollY } = useScroll()
  const controls = useAnimation()

  // Refs for scroll animations
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const connectRef = useRef(null)
  const ctaRef = useRef(null)

  // InView states
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 })

  // Parallax effects
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100])
  const heroImageScale = useTransform(scrollY, [0, 500], [1, 1.1])

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      controls.start("visible")
    }
  }, [heroInView, controls])

  // Animation variants

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return <section ref={featuresRef} className="py-20 relative">
    <div className="container px-4 mx-auto">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
          animate={
            featuresInView
              ? {
                opacity: [0, 1],
                y: [20, 0],
                transition: { duration: 0.8 },
              }
              : {}
          }
        >
          Web-Native, Secure and High-Performance
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600"
          animate={
            featuresInView
              ? {
                opacity: [0, 1],
                y: [20, 0],
                transition: { duration: 0.8, delay: 0.2 },
              }
              : {}
          }
        >
          KasmVNC is the next generation open-source VNC Server designed for modern web technologies.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          animate={
            featuresInView
              ? {
                opacity: [0, 1],
                y: [20, 0],
                transition: { duration: 0.8, delay: 0.4 },
              }
              : {}
          }
        >
          <Button className="bg-sky-600 hover:bg-sky-700 text-white">
            Documentation <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-sky-200 hover:bg-sky-50"
          >
            Release <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FeatureTab />
      </motion.div>
    </div>
  </section>
}

export default FeatureSection