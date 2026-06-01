'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-cyan-100 -z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 w-fit">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">AI-Powered Travel Planning</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Plan Your Perfect Journey
              </span>
              <span className="text-gray-900"> With AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Flights, Hotels, Attractions, Agencies, Budget Tracking and Travel Plans in One Place. Your intelligent travel companion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#search" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Create My Trip
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#destinations" className="btn-outline inline-flex items-center justify-center">
                Explore Destinations
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-600">50K+</p>
                <p className="text-gray-600 text-sm">Happy Travelers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-600">150+</p>
                <p className="text-gray-600 text-sm">Destinations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-600">99%</p>
                <p className="text-gray-600 text-sm">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-2xl font-bold">Explore World</p>
                  <p className="text-sm opacity-80 mt-2">with AI Guidance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
