import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - TripCraft',
  description: 'Create your TripCraft account',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
