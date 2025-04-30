"use client"

import { FC } from 'react'
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Shield, Zap, Globe } from "lucide-react"
import YoutubeImage from "@/public/assets/images/youtube.png"

interface VideoSectionProps {
}

const VideoSection: FC<VideoSectionProps> = ({ }) => {

  const [isScrolled, setIsScrolled] = useState(false)
  const controls = useAnimation()

  // Refs for scroll animations
  const heroRef = useRef(null)
  const connectRef = useRef(null)

  // InView states
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const connectInView = useInView(connectRef, { once: false, amount: 0.3 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      controls.start("visible")
    }
  }, [heroInView, controls])

  // Animation variants

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return <section
    ref={connectRef}
    className="py-20 bg-gradient-to-b from-white to-sky-50"
  >
    <div className="container px-4 mx-auto">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={connectInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Connect From Anywhere
        </h2>
        <p className="text-lg text-slate-600">
          Connect to your servers from anywhere in the world securely.
        </p>
      </motion.div>

      <motion.div
        className="relative max-w-4xl mx-auto"
        variants={scaleInVariants}
        initial="hidden"
        animate={connectInView ? "visible" : "hidden"}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sky-100 to-indigo-200 rounded-xl blur-xl opacity-20"
          animate={
            connectInView
              ? {
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
                transition: { duration: 5, repeat: Number.POSITIVE_INFINITY },
              }
              : {}
          }
        ></motion.div>
        <div className="relative rounded-xl overflow-hidden border border-slate-200  group cursor-pointer">
          <Image
            src={YoutubeImage}
            alt="KasmVNC Interface"
            width={800}
            height={400}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              href="https://www.youtube.com/watch?v=VkzG5BU2gjo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <motion.div
                className="bg-red-600 rounded-full p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </motion.div>
              <motion.span
                className="absolute bottom-4 bg-white/90/90 px-4 py-2 rounded-md font-medium text-sm"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Watch Demo Video
              </motion.span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Globe,
              title: "Global Access",
              description: "Access your systems from anywhere with an internet connection",
            },
            { icon: Shield, title: "Secure Connection", description: "End-to-end encryption keeps your data safe" },
            { icon: Zap, title: "High Performance", description: "Optimized for speed even on slower connections" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100"
              variants={itemVariants}
              initial="hidden"
              animate={connectInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 + 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="bg-sky-100 p-3 rounded-lg w-fit mb-4"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-6 w-6 text-sky-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
}

export default VideoSection