import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Chat - TripCraft',
  description: 'Chat with your AI travel assistant',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
