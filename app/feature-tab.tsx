"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, Clipboard, Lock, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FeatureTab() {
  const [activeTab, setActiveTab] = useState("data-loss")
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const features = [
    {
      id: "data-loss",
      title: "Data Loss Prevention",
      icon: Shield,
      description: "Rate limit and log both keystrokes and clipboard usage to prevent data exfiltration.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/JI/PA/KV/180410647/data-loss-prevention-services-500x500.png",
    },
    {
      id: "compression",
      title: "Better Compression",
      icon: Zap,
      description: "Advanced compression algorithms reduce bandwidth usage while maintaining image quality.",
      image: "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/54e4523db589d421/original/blog-featured-ztna-vs-vpn-svg.svg",
    },
    {
      id: "clipboard",
      title: "Seamless Clipboard",
      icon: Clipboard,
      description: "Copy and paste between your local device and remote session with ease and security.",
      image: "https://alexharri.com/images/posts/clipboard/figma-copy-button.png",
    },
    {
      id: "authentication",
      title: "Robust Authentication",
      icon: Lock,
      description: "Multiple authentication methods including password, token, and certificate-based options.",
      image: "https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg",
    },
    {
      id: "configurable",
      title: "Client Configurable",
      icon: Settings,
      description: "Extensive configuration options to tailor the experience to your specific needs.",
      image: "https://cammsgroup.com/wp-content/uploads/2023/08/Configurable-Vs-Customisable-blog-image.jpg",
    },
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
      intervalRef.current = setInterval(cycleTab, 3000)
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
        <div className="bg-white darkk:bg-slate-800 rounded-xl shadow-lg border border-slate-200 darkk:border-slate-700 overflow-hidden">
          {features.map((feature) => (
            <button
              key={feature.id}
              className={cn(
                "w-full flex items-center p-4 text-left border-b border-slate-200 darkk:border-slate-700 last:border-0 transition-colors",
                activeTab === feature.id
                  ? "bg-sky-50 darkk:bg-sky-900/20 text-sky-600 darkk:text-sky-400"
                  : "hover:bg-slate-50 darkk:hover:bg-slate-700/50 text-slate-700 darkk:text-slate-200",
              )}
              onClick={() => setActiveTab(feature.id)}
            >
              <div
                className={cn(
                  "p-2 rounded-lg mr-4",
                  activeTab === feature.id
                    ? "bg-sky-100 darkk:bg-sky-800/30 text-sky-600 darkk:text-sky-400"
                    : "bg-slate-100 darkk:bg-slate-700 text-slate-500 darkk:text-slate-400",
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
                  className="bg-white darkk:bg-slate-800 rounded-xl shadow-lg border border-slate-200 darkk:border-slate-700 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 darkk:bg-sky-900/30 text-sky-600 darkk:text-sky-400 mb-4">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 darkk:text-white">{feature.title}</h3>
                      <p className="text-slate-600 darkk:text-slate-300 mb-6">{feature.description}</p>

                      <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sky-100 darkk:bg-sky-900/30 flex items-center justify-center mr-3 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-sky-600 darkk:bg-sky-400"></div>
                            </div>
                            <span className="text-slate-700 darkk:text-slate-300">Feature benefit point {item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={feature.image || "https://www.kasmweb.com/assets/images/placeholder.jpg"}
                        alt={feature.title}
                        fill
                        className="object-cover"
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

