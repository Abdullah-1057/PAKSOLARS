'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'News' },
  ]

  const productLinks = [
    { href: '/shop', label: 'Solar Panels' },
    { href: '/shop', label: 'Batteries' },
    { href: '/shop', label: 'Inverters' },
    { href: '/shop', label: 'Smart Meters' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-[#003049] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
              >
                <Sun className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold">ASA Solar Center</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the clean energy revolution with premium solar solutions. 
              Harness the power of the sun for a brighter, sustainable future.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>123 Solar Street, Green City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>+1 (555) 123-SOLAR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>info@asasolar.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Solar Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm glow-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h4 className="text-md font-medium text-yellow-400 mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded text-xs">
                  NABCEP Certified
                </span>
                <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded text-xs">
                  IEC Approved
                </span>
              </div>
            </div>
          </div>

          {/* Social & Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-medium text-yellow-400">Company</h4>
              <ul className="space-y-1">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ASA Solar Center. All rights reserved. 
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
