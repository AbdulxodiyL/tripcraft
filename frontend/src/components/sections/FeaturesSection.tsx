'use client'

import { motion } from 'framer-motion'
import { Zap, Brain, TrendingUp, Shield, Users, MapPin } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Brain size={32} />,
      title: 'AI Trip Planner',
      description: 'Let AI create personalized itineraries based on your preferences',
    },
    {
      id: 2,
      icon: <Zap size={32} />,
      title: 'Smart Budget Tracking',
      description: 'Track expenses in real-time and get smart savings recommendations',
    },
    {
      id: 3,
      icon: <Users size={32} />,
      title: 'Group Travel Planning',
      description: 'Plan trips with friends and automatically split expenses fairly',
    },
    {
      id: 4,
      icon: <Shield size={32} />,
      title: 'Scam Detection',
      description: 'AI analyzes agencies and hotels to detect potential scams',
    },
    {
      id: 5,
      icon: <MapPin size={32} />,
      title: 'Hidden Gems Discovery',
      description: 'Find secret local attractions not on typical tourist lists',
    },
    {
      id: 6,
      icon: <TrendingUp size={32} />,
      title: 'Best Price Guarantee',
      description: 'Get the cheapest flights and hotels with AI price monitoring',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan the perfect trip
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
