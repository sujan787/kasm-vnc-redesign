"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView, useSpring, useAnimation } from "framer-motion"
import { ChevronRight, ArrowRight, Shield, Zap, Globe, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "./nav-bar"
import FeatureTab from "./feature-tab"
import Footer from "./footer"
import YoutubeImage from "@/public/assets/images/youtube.jpg"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
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
  const connectInView = useInView(connectRef, { once: false, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 })

  // Parallax effects
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100])
  const heroImageScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const bgCircle1Y = useTransform(scrollY, [0, 1000], [0, 200])
  const bgCircle2Y = useTransform(scrollY, [0, 1000], [0, -100])

  // Spring animations for smoother motion
  const smoothHeroY = useSpring(heroImageY, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(heroImageScale, { stiffness: 100, damping: 30 })

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white ">
      <NavBar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 md:pt-32 pb-20 overflow-hidden">
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
                <span className="mr-2">Open Source</span>
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
                A modern open source VNC server.
              </motion.h2>

              <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-xl">
                Enhanced security, higher compression, smoother encoding... all in a web-based client. Connect to your
                Linux server's desktop from any web browser. No client software install required.
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

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-lg p-3 shadow-lg border border-slate-200"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-slate-700">Secure Connection</span>
                  </div>
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative">
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

      {/* Connect From Anywhere Section */}
      <section
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
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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

      {/* Stats Section */}
      <motion.section
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

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
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
                    <Button size="lg" variant="outline" className="border-sky-200 hover:bg-sky-700 text-white">
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
      <Footer />
    </div>
  )
}

