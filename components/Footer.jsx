import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white border-t border-accent/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/nora_logo.svg" 
                  alt="NORA Logo" 
                  fill
                  className="object-contain group-hover:drop-shadow-glow transition-all"
                />
              </div>
              <span className="text-xl font-bold text-gradient">NORA</span>
            </Link>
            <p className="text-sm text-gray-400 mb-2">
              Nootropic Alliance Research
            </p>
            <p className="text-sm text-gray-500">
              Premium cognitive enhancement for the modern mind.
            </p>
          </div>

          {/* Links sections remain the same... */}
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            &copy; {currentYear} NORA. All rights reserved.
          </p>
          <p className="text-xs">
            Disclaimer: These statements have not been evaluated by regulatory authorities. 
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
