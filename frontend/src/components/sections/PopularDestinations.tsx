'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, ArrowRight } from 'lucide-react'

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: '🗼',
      rating: 4.8,
      reviews: 2500,
      description: 'City of lights and romance',
      price: '$2500',
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      image: '🗾',
      rating: 4.9,
      reviews: 3200,
      description: 'Ancient traditions meet modernity',
      price: '$3000',
    },
    {
      id: 3,
      name: 'Bali, Indonesia',
      image: '🏝️',
      rating: 4.7,
      reviews: 4100,
      description: 'Tropical paradise and culture',
      price: '$1500',
    },
    {
      id: 4,
      name: 'New York, USA',
      image: '🗽',
      rating: 4.6,
      reviews: 5300,
      description: 'The city that never sleeps',
      price: '$2800',
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      image: '🏙️',
      rating: 4.5,
      reviews: 2800,
      description: 'Luxury and modern architecture',
      price: '$3500',
    },
    {
      id: 6,
      name: 'Rome, Italy',
      image: '🏛️',
      rating: 4.9,
      reviews: 3900,
      description: 'History and timeless beauty',
      price: '$2200',
    },
  ]

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the most loved destinations by our travelers
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card cursor-pointer overflow-hidden"
            >
              {/* Image Area */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {dest.image}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {dest.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(dest.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{dest.rating}</span>
                  <span className="text-sm text-gray-500">({dest.reviews})</span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-blue-600">{dest.price}</span>
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations
