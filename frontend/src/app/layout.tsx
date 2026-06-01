import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'TripCraft - AI Powered Travel Planning',
  description: 'Plan your perfect journey with AI. Flights, Hotels, Attractions, Agencies, Budget Tracking in One Place',
  keywords: 'travel, planning, flights, hotels, attractions, AI, trip planner',
  openGraph: {
    title: 'TripCraft - AI Powered Travel Planning',
    description: 'Plan your perfect journey with AI',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
