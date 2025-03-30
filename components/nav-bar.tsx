"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavBarProps {
  isScrolled: boolean
}

export default function NavBar({ isScrolled }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const navItems = [
    {
      name: "Solutions",
      dropdown: [
        { label: "Remote Workspaces", href: "#" },
        { label: "Browser Isolation", href: "#" },
        { label: "Web Research", href: "#" },
        { label: "Enterprise Browser", href: "#" },
        { label: "Secure Remote Access", href: "#" },
        { label: "App Streaming", href: "#" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { label: "Community Edition", href: "#" },
        { label: "Downloads", href: "#" },
        { label: "Developer API", href: "#" },
        { label: "Regulatory Compliance", href: "#" },
        { label: "Cloud vs Server Comparison", href: "#" },
      ],
    },
    {
      name: "Open-Source",
      dropdown: [
        { label: "Workspace Images", href: "#" },
        { label: "KasmVNC", href: "#" },
        { label: "Ansible Deployments", href: "#" },
        { label: "Terraform Deployments", href: "#" },
      ],
    },
    {
      name: "Support",
      dropdown: [
        { label: "Documentation", href: "#" },
        { label: "Developer Support", href: "#" },
        { label: "License Activation", href: "#" },
        { label: "Community Support", href: "#" },
        { label: "Security Notices", href: "#" },
        { label: "Customer Success Services", href: "#" },
        { label: "Customer Success Subscriptions", href: "#" },
      ],
    },
    {
      name: "About Us",
      dropdown: [
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Partnerships", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ]

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/80 darkk:bg-slate-900/80 backdrop-blur-md shadow-md" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-32">
                <Image
                  src="https://www.kasmweb.com/assets/images/logo.svg"
                  alt="Kasm Logo"
                  width={128}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                      activeDropdown === item.name
                        ? "text-sky-600 darkk:text-sky-400"
                        : "text-slate-700 hover:text-sky-600 darkk:text-slate-200 darkk:hover:text-sky-400",
                    )}
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white darkk:bg-slate-800 ring-1 ring-black ring-opacity-5 z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-sky-600 darkk:text-slate-200 darkk:hover:bg-slate-700 darkk:hover:text-sky-400"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-sky-600 hover:bg-sky-700 darkk:bg-sky-600 darkk:hover:bg-sky-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-slate-700 darkk:text-slate-200" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-700 darkk:text-slate-200" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-white darkk:bg-slate-900 pt-16"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 space-y-4 overflow-y-auto max-h-screen pb-24">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-200 darkk:border-slate-700 pb-4">
                  <button
                    className="flex items-center justify-between w-full py-2 text-left text-lg font-medium text-slate-900 darkk:text-white"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        activeDropdown === item.name ? "transform rotate-180" : "",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block py-2 text-slate-600 hover:text-sky-600 darkk:text-slate-300 darkk:hover:text-sky-400"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4">
                <Button className="w-full bg-sky-600 hover:bg-sky-700 darkk:bg-sky-600 darkk:hover:bg-sky-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

