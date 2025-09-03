import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PAK SOLARS - Clean Energy for a Brighter Future',
  description: 'Harness the power of the sun with PAK SOLARS. Premium solar panels, batteries, and installation services across Pakistan.',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
