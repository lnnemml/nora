'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Science', href: '#how-it-works' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/nora_logo.svg" 
                alt="NORA Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">NORA</span>
              <span className="text-[9px] text-gray-500 tracking-wider uppercase font-mono">
                Nootropic Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-accent transition-colors font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/checkout" className="btn-primary text-sm">
              Get
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-accent hover:bg-gray-50 transition-all font-medium px-4 rounded-lg"
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
              Get NORA
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
