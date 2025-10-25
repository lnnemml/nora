import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'NORA - Premium Bromantane Sublingual Spray',
  description: 'Mental endurance of the new generation: energy without stimulants and addiction. Bromantane MCT spray for focus, motivation, and mental stamina.',
  keywords: 'bromantane, nootropics, mental performance, focus, energy, MCT spray, cognitive enhancement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
