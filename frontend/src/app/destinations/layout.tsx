import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destinations - TripCraft',
  description: 'Explore amazing destinations',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
