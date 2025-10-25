'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-gradient-to-r from-primary via-primary-light to-secondary border-b border-accent/20 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/nora_logo.svg" 
                alt="NORA Logo" 
                fill
                className="object-contain drop-shadow-glow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                NORA
              </span>
              <span className="text-[10px] text-gray-300 tracking-wider uppercase">
                Mental Endurance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-accent transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/checkout" className="btn-primary">
              Get FLO Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent/20 animate-slide-up">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-accent hover:bg-accent/5 transition-all font-medium px-4 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/checkout"
              className="block mt-4 text-center btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get FLO Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
