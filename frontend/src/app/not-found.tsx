import React from 'react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="text-center space-y-6">
        <div className="text-6xl">😕</div>
        <h1 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary inline-block">
          Go Home
        </a>
      </div>
    </div>
  )
}
