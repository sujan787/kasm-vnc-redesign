"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, Clipboard, Lock, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

import DataLossPrev from "@/public/assets/images/data-loss-prevention.png"
import List from "@/public/assets/images/list.png"
import Compression from "@/public/assets/images/compression.png"
import Security from "@/public/assets/images/security.png"
import Technology from "@/public/assets/images/technology.png"

export default function FeatureTab() {
  const [activeTab, setActiveTab] = useState("data-loss")
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const features = [
    {
      id: "data-loss",
      title: "Data Loss Prevention",
      icon: Shield,
      description: "KasmVNC’s Data Loss Prevention (DLP) logs keystrokes and clipboard use to protect sensitive data during remote sessions. It’s vital for secure settings like banks or healthcare, preventing data leaks. Rate-limiting stops rapid inputs that might signal threats, while logging ensures compliance with an audit trail.",
      image: DataLossPrev,
    },
    {
      id: "compression",
      title: "Better Compression",
      icon: Zap,
      description: "KasmVNC boosts performance with webp compression and dynamic image quality, cutting data use for low-bandwidth scenarios. Ideal for video streaming, it offers 30% better compression and 20% more efficiency, with scroll detection and multi-threaded encoding to reduce lag.",
      image: Compression,
    },
    {
      id: "clipboard",
      title: "Seamless Clipboard",
      icon: Clipboard,
      description: "Seamless Clipboard lets users copy and paste between local and remote systems on supported browsers. It skips manual transfers, saving time for remote workers sharing data or collaborating, enhancing productivity with a smooth, intuitive experience.",
      image: List,
    },
    {
      id: "authentication",
      title: "Robust Authentication",
      icon: Lock,
      description: "KasmVNC’s authentication allows complex usernames and passwords, improving security over traditional VNC’s 8-character limit. Perfect for internet-facing servers, it lowers brute-force risks, possibly supporting extra security like two-factor authentication, safeguarding data and systems.",
      image: Security,
    },
    {
      id: "configurable",
      title: "Client Configurable",
      icon: Settings,
      description: "Users can adjust settings like resolution or security options to fit their needs, adapting to fast or slow networks. For instance, set 1024x768 resolution or require SSL, offering flexibility for IT admins managing diverse user requirements.",
      image: Technology,
    }
  ]

  useEffect(() => {
    // Function to cycle to the next tab
    const cycleTab = () => {
      const currentIndex = features.findIndex((feature) => feature.id === activeTab)
      const nextIndex = (currentIndex + 1) % features.length
      setActiveTab(features[nextIndex].id)
    }

    // Only set interval if not hovering
    if (!isHovering) {
      intervalRef.current = setInterval(cycleTab, 5000)
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeTab, isHovering])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Feature Navigation */}
      <div
        className="lg:col-span-4 xl:col-span-3"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {features.map((feature) => (
            <button
              key={feature.id}
              className={cn(
                "w-full flex items-center p-4 text-left border-b border-slate-200 last:border-0 transition-colors",
                activeTab === feature.id
                  ? "bg-sky-50 text-sky-600"
                  : "hover:bg-slate-50 text-slate-700",
              )}
              onClick={() => setActiveTab(feature.id)}
            >
              <div
                className={cn(
                  "p-2 rounded-lg mr-4",
                  activeTab === feature.id
                    ? "bg-sky-100 text-sky-600"
                    : "bg-slate-100 text-slate-500",
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Feature Content */}
      <div className="lg:col-span-8 xl:col-span-9">
        <AnimatePresence mode="wait">
          {features.map(
            (feature) =>
              activeTab === feature.id && (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 text-sky-600 mb-4">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600 mb-6">{feature.description}</p>

                      {/* <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                            </div>
                            <span className="text-slate-700">Feature benefit point {item}</span>
                          </div>
                        ))}
                      </div> */}
                    </div>

                    <div className="relative md:h-auto">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        // fill
                        width={400}
                        height={300}
                        className="object-cover p-20"
                      />
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

