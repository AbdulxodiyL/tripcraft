'use client'

import { motion } from 'framer-motion'
import { Diamond, Users, Zap } from 'lucide-react'

const HiddenGemsSection = () => {
  const gems = [
    {
      id: 1,
      title: 'Plitvice Lakes',
      location: 'Croatia',
      icon: '💧',
      description: 'Untouched waterfalls and crystal clear lakes',
      badge: 'Not on typical lists',
    },
    {
      id: 2,
      title: 'Zhangjiajie',
      location: 'China',
      icon: '🏔️',
      description: 'Magnificent mountain formations inspired Avatar',
      badge: 'Hidden treasure',
    },
    {
      id: 3,
      title: 'Socotra Island',
      location: 'Yemen',
      icon: '🌳',
      description: 'Alien-like landscape with unique flora',
      badge: 'Off the beaten path',
    },
    {
      id: 4,
      title: 'Faroe Islands',
      location: 'Denmark',
      icon: '🏖️',
      description: 'Dramatic cliffs and untouched nature',
      badge: 'Local secret',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <Diamond size={16} className="text-amber-600" />
            <span className="text-sm font-semibold text-amber-600">Exclusive Discovery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hidden Gems
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover secret destinations not found on typical tourist lists
          </p>
        </motion.div>

        {/* Gems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {gems.map((gem, index) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card relative overflow-hidden group"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                {gem.badge}
              </div>

              {/* Icon and Content */}
              <div className="flex gap-6 items-start">
                <div className="text-5xl">{gem.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {gem.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{gem.location}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {gem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button className="btn-primary">
            Discover More Hidden Gems
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HiddenGemsSection
