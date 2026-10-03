import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/sections/Navbar'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Formation & Conseil BI & IA — Get Responsive',
  description: 'Formations Power BI, IA et Microsoft. E-learning Power Up. Conseil data. Powered by Get Responsive.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
