'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Sarah Johnson',
      role: 'Adventurer',
      content: 'TripCraft completely changed how I plan my trips! The AI recommendations are so accurate.',
      avatar: '👩‍🦰',
      rating: 5,
    },
    {
      id: 2,
      author: 'Mike Chen',
      role: 'Business Traveler',
      content: 'The budget tracking feature saved me hundreds of dollars. Love the real-time expense monitoring!',
      avatar: '👨',
      rating: 5,
    },
    {
      id: 3,
      author: 'Emma Wilson',
      role: 'Family Traveler',
      content: 'Planning group trips with my family was never easier. The fair expense splitting is brilliant!',
      avatar: '👩‍🦱',
      rating: 5,
    },
    {
      id: 4,
      author: 'Ahmed Hassan',
      role: 'Solo Traveler',
      content: 'The hidden gems feature helped me discover places I would never have found. Absolutely worth it!',
      avatar: '👨‍🦲',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy travelers using TripCraft
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
