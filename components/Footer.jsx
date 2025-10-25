import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Science', href: '/#how-it-works' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
    product: [
      { name: 'Buy NORA', href: '/checkout' },
      { name: 'Dosage Guide', href: '/faq#dosage' },
      { name: 'Safety Info', href: '/faq#safety' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-10 sm:py-12">
        {/* Mobile: Стековий layout */}
        {/* Desktop: Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand - повна ширина на мобільному */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group w-fit">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/images/nora_logo.svg" 
                  alt="NORA Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">NORA</span>
            </Link>
            <p className="text-sm text-gray-600 mb-2 font-mono">
              Nootropic Alliance Research
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Pharmaceutical-grade cognitive enhancement for high performers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-primary text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-primary text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-primary text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8 sm:my-10"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} NORA. All rights reserved.
          </p>
          
          {/* Trust badges */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.4% Pure</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lab Tested</span>
            </div>
          </div>
        </div>

        {/* Disclaimer - краща читабельність на мобільному */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed text-center sm:text-left">
            <strong className="font-semibold">Medical Disclaimer:</strong> These statements have not been evaluated by regulatory authorities. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            For research purposes only. Consult with a healthcare professional before use.
          </p>
        </div>
      </div>
    </footer>
  )
}
