'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Star, ArrowRight, Heart } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'All',
    'Historical Places',
    'Nature & Mountains',
    'Beaches',
    'Luxury Travel',
    'Food & Culture',
    'Family Travel',
    'Adventure',
    'Hidden Gems',
  ]

  useEffect(() => {
    fetchDestinations()
  }, [selectedCategory, searchTerm])

  const fetchDestinations = async () => {
    setIsLoading(true)
    try {
      const query = new URLSearchParams()
      if (selectedCategory !== 'All') {
        query.append('category', selectedCategory.toLowerCase())
      }
      if (searchTerm) {
        query.append('search', searchTerm)
      }

      const response = await fetch(
        `http://localhost:3001/api/destinations?${query.toString()}`
      )
      if (response.ok) {
        const data = await response.json()
        setDestinations(data)
      }
    } catch (error) {
      console.error('Error fetching destinations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Destinations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing places around the world
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-4 text-blue-600" size={20} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex gap-2 overflow-x-auto pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Destinations Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading destinations...</p>
            </div>
          ) : destinations.length === 0 ? (
            <div className="card text-center py-12">
              <p className="text-2xl mb-4">🔍</p>
              <p className="text-gray-600 text-lg">No destinations found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest: any, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card group cursor-pointer overflow-hidden"
                >
                  {/* Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
                    🌍
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-gray-600">{dest.country}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {dest.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(dest.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{dest.rating}</span>
                    </div>

                    {/* CTA */}
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors mt-4">
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DestinationsPage
