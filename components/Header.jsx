import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`bg-white border-b sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-gray-300 shadow-md' : 'border-gray-200'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-4 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/neurodrive_logo.svg" 
                alt="NeuroDrive Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-primary leading-none">NeuroDrive</span>
              <span className="text-[10px] sm:text-xs text-gray-600 tracking-wide font-medium mt-0.5">
                Adaptogenic Performance Formula
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
            <Link href="/checkout" className="btn-primary text-sm py-2.5 px-6">
              Get NeuroDrive
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 text-gray-700 hover:text-accent transition-colors active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
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
          <>
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div className="fixed inset-x-0 top-20 sm:top-24 bottom-0 bg-white md:hidden overflow-y-auto animate-slide-up mobile-menu-enter">
              <div className="container-custom py-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-4 text-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-all font-medium px-4 rounded-lg active:scale-95 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/checkout"
                  className="block mt-6 text-center btn-primary animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get NeuroDrive
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
