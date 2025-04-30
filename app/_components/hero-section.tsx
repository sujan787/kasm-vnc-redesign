"use client"

import { FC } from 'react'
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView, useSpring, useAnimation } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import homepage from '../../content/homepage.json';

interface HeroSectionProps {
  block: any,
  dataBinding: any
}

const HeroSection: FC<HeroSectionProps> = ({ block, dataBinding }) => {

  const { scrollY } = useScroll()
  const controls = useAnimation()

  // Refs for scroll animations
  const heroRef = useRef(null)

  // InView states
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })


  // Parallax effects
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100])
  const heroImageScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const bgCircle1Y = useTransform(scrollY, [0, 1000], [0, 200])
  const bgCircle2Y = useTransform(scrollY, [0, 1000], [0, -100])

  // Spring animations for smoother motion
  const smoothHeroY = useSpring(heroImageY, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(heroImageScale, { stiffness: 100, damping: 30 })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

  return <section ref={heroRef} className="relative pt-24 md:pt-32 pb-20 overflow-hidden banner">
    <div className="container px-4 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-2"
          >
            <span className="mr-2">Latest Version 1.0.0</span>
            <span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
          >
            <span className="text-sky-600">Kasm</span>VNC
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-slate-700"
          >
            <p className="editable" data-cms-bind="title"> {homepage.title}</p>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-xl" >
            <p className="editable" data-cms-bind="description"> {homepage.description}</p>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white"
            >
              Launch Demo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-200 hover:bg-sky-50"
            >
              View Documentation <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <Link
              href="#"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium"
            >
              Try out Cloud Personal for Individuals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          variants={slideInRightVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          style={{ y: smoothHeroY }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sky-100 to-indigo-200 rounded-xl blur-xl opacity-20 transform -rotate-3"
              animate={{
                rotate: [-3, 2, -3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden "
              style={{ scale: smoothScale }}
            >
              <Image
                src="https://www.sim-networks.com/user/pages/03.solutions/07.mac-os-for-developers/02._quick-installation/illustration-block-quick-installation.svg"
                alt="KasmVNC Interface b"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Background Elements */}
    <motion.div
      className="absolute top-1/4 left-0 w-64 h-64 bg-sky-200 rounded-full filter blur-3xl opacity-30 -z-10"
      style={{ y: bgCircle1Y }}
      animate={{
        x: [0, 20, 0],
      }}
      transition={{
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    ></motion.div>
    <motion.div
      className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 -z-10"
      style={{ y: bgCircle2Y }}
      animate={{
        x: [0, -30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    ></motion.div>
  </section>
}

export default HeroSection