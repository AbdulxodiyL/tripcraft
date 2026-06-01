'use client'

import { motion } from 'framer-motion'

const CategoriesGrid = () => {
  const categories = [
    {
      id: 1,
      title: 'Historical Places',
      icon: '🏛️',
      description: 'Explore ancient wonders and historical landmarks',
      color: 'from-amber-400 to-orange-500',
    },
    {
      id: 2,
      title: 'Nature & Mountains',
      icon: '⛰️',
      description: 'Adventure in breathtaking natural landscapes',
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 3,
      title: 'Beaches',
      icon: '🏖️',
      description: 'Relax on pristine sandy shores',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      id: 4,
      title: 'Luxury Travel',
      icon: '✨',
      description: 'Premium experiences and exclusive destinations',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 5,
      title: 'Food & Culture',
      icon: '🍜',
      description: 'Taste local cuisines and cultural experiences',
      color: 'from-red-400 to-pink-500',
    },
    {
      id: 6,
      title: 'Family Travel',
      icon: '👨‍👩‍👧‍👦',
      description: 'Fun activities for the whole family',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      id: 7,
      title: 'Adventure',
      icon: '🪂',
      description: 'Thrilling experiences and adrenaline rush',
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 8,
      title: 'Entertainment',
      icon: '🎭',
      description: 'Shows, concerts, and nightlife experiences',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 9,
      title: 'Hidden Gems',
      icon: '💎',
      description: 'Discover secret spots not on typical lists',
      color: 'from-indigo-400 to-purple-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your travel style and let AI create the perfect itinerary
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 glass hover:shadow-2xl transition-all duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CategoriesGrid
