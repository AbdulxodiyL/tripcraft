import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}
