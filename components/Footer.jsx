import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">NORA</span>
            </div>
            <p className="text-sm text-gray-300">
              Nootropic Alliance Research
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Premium cognitive enhancement for the modern mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/checkout" className="text-gray-300 hover:text-white transition-colors">
                  Buy Bromantane Spray
                </Link>
              </li>
              <li>
                <Link href="/faq#dosage" className="text-gray-300 hover:text-white transition-colors">
                  Dosage Guide
                </Link>
              </li>
              <li>
                <Link href="/faq#safety" className="text-gray-300 hover:text-white transition-colors">
                  Safety Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Terms of Service</li>
              <li className="text-gray-300">Privacy Policy</li>
              <li className="text-gray-300">Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} NORA. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: These statements have not been evaluated by regulatory authorities. 
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
