import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Youtube, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-32">
                <Image
                  src="https://www.kasmweb.com/assets/images/logo.svg"
                  alt="Kasm Logo"
                  width={128}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start">
                <div className="mr-3 text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">+1 571-444-KASM (5276)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p>1765 Greensboro Station Pl STE 900</p>
                  <p>McLean, Virginia 22102</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p>info@kasmweb.com</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-2">
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Remote Workspaces
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Browser Isolation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Web Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Enterprise Browser
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Secure Remote Access
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  App Streaming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Community Edition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Developer API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Regulatory Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Cloud vs Server Comparison
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8 text-white">Open Source</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Workspace Images
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  KasmVNC
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Ansible Deployments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Terraform Deployments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Developer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  License Activation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Community Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Security Notices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Customer Success Services
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8 text-white">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © Copyright 2025 - Kasm Technologies. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Cookie Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                SaaS Terms and Conditions
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Software EULA
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Website Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

