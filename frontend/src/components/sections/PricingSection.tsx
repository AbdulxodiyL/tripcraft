'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for casual travelers',
      features: [
        'Basic trip planning',
        'Up to 1 trip',
        'Email support',
        'Standard itineraries',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      id: 2,
      name: 'Explorer',
      price: '$9.99',
      period: '/month',
      description: 'Best for frequent travelers',
      features: [
        'Unlimited trips',
        'AI-powered planning',
        'Priority support',
        'Budget tracking',
        'Group planning',
        'Hidden gems access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      id: 3,
      name: 'Premium',
      price: '$24.99',
      period: '/month',
      description: 'For adventure seekers',
      features: [
        'Everything in Explorer',
        'Premium destinations',
        'Scam detection',
        'Personal AI assistant',
        'VIP travel agency access',
        'Insurance partnerships',
      ],
      cta: 'Upgrade Now',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your travel style
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'card shadow-2xl ring-2 ring-blue-500 scale-105'
                  : 'card'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
