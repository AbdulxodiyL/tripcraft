import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - TripCraft',
  description: 'Manage your trips and plans',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
