'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, DollarSign, Users } from 'lucide-react'

const SearchForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    travelers: '1',
    category: 'all',
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="search" className="relative py-20 px-4 sm:px-6 lg:px-8 -mt-40 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Find Your Perfect Trip</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Travel Category</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: cat.toLowerCase() })}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      formData.category === cat.toLowerCase()
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-blue-600" size={20} />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-blue-600" size={20} />
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-blue-600" size={20} />
                  <input
                    type="number"
                    placeholder="5000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 text-blue-600" size={20} />
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                Search Trips
              </button>
              <button
                type="button"
                className="btn-outline flex-1"
              >
                AI Plan Trip
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default SearchForm
