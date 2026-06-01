import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - TripCraft',
  description: 'Sign in to your TripCraft account',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
