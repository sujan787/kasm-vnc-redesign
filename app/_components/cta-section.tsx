"use client"

import { FC } from 'react'
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, useSpring, useAnimation } from "framer-motion"
import { ChevronRight, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CtaSectionProps {
}

const CtaSection: FC<CtaSectionProps> = ({ }) => {
 
    const { scrollY } = useScroll()
    const controls = useAnimation()
  
    // Refs for scroll animations
    const heroRef = useRef(null)
    const ctaRef = useRef(null)
  
    // InView states
    const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
    const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 })

    // Trigger animations when sections come into view
    useEffect(() => {
      if (heroInView) {
        controls.start("visible")
      }
    }, [heroInView, controls])
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }

  
    const fadeInUpVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      },
    }
  
    const slideInRightVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, type: "spring", stiffness: 100 },
      },
    }
  
    const slideInLeftVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, type: "spring", stiffness: 100 },
      },
    }

    return <section ref={ctaRef} className="py-20">
        <div className="container px-4 mx-auto">
            <motion.div
                className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-8 md:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
            >
                {/* Background Elements */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Subtle geometric patterns */}
                    <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" opacity="0.05">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    {/* Refined gradient overlays */}
                    <motion.div
                        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.07 }}
                        transition={{ duration: 1.5 }}
                    ></motion.div>

                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1.5 }}
                    ></motion.div>

                    {/* Subtle floating elements */}
                    <motion.div
                        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white opacity-5"
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    ></motion.div>

                    <motion.div
                        className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-indigo-200 opacity-5"
                        animate={{
                            y: [0, 20, 0],
                            x: [0, -10, 0],
                        }}
                        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    ></motion.div>
                </motion.div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div
                        className="md:w-2/3"
                        variants={slideInLeftVariants}
                        initial="hidden"
                        animate={ctaInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started with KasmVNC?</h2>
                        <p className="text-lg text-sky-100 mb-6 max-w-2xl">
                            Experience the next generation of VNC technology with enhanced security, better compression, and a
                            seamless web-based interface.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" variant="outline" className="border-sky-200 bg-sky-600 text-white">
                                    View Documentation <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/3 flex justify-center"
                        variants={slideInRightVariants}
                        initial="hidden"
                        animate={ctaInView ? "visible" : "hidden"}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-white rounded-full filter blur-xl opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            ></motion.div>
                            <motion.div
                                className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <Server className="h-16 w-16 text-white mb-4" />
                                <div className="text-xl font-semibold">Open Source</div>
                                <div className="text-sky-100">Free & Community Driven</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
}

export default CtaSection