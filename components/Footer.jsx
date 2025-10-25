import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-10 h-10">
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
            <p className="text-sm text-gray-500">
              Pharmaceutical-grade cognitive enhancement for high performers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-600 hover:text-accent transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-primary text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/checkout" className="text-gray-600 hover:text-accent transition-colors">
                  Buy NORA
                </Link>
              </li>
              <li>
                <Link href="/faq#dosage" className="text-gray-600 hover:text-accent transition-colors">
                  Dosage Guide
                </Link>
              </li>
              <li>
                <Link href="/faq#safety" className="text-gray-600 hover:text-accent transition-colors">
                  Safety Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-primary text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Terms of Service</li>
              <li className="text-gray-600">Privacy Policy</li>
              <li className="text-gray-600">Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2">&copy; {currentYear} NORA. All rights reserved.</p>
          <p>
            Medical Disclaimer: These statements have not been evaluated by regulatory authorities. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            For research purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
