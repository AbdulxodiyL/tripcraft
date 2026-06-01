'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LogOut, Plus, Trash2, Edit, MapPin, Calendar, DollarSign } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null)
  const [trips, setTrips] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showNewTripModal, setShowNewTripModal] = useState(false)
  const [newTrip, setNewTrip] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (storedUser && token) {
      setUser(JSON.parse(storedUser))
      fetchTrips(JSON.parse(storedUser).id, token)
    } else {
      window.location.href = '/login'
    }
  }, [])

  const fetchTrips = async (userId: string, token: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/trips/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (response.ok) {
        const data = await response.json()
        setTrips(data)
      }
    } catch (error) {
      console.error('Error fetching trips:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateTrip = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      const response = await fetch('http://localhost:3001/api/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newTrip,
          userId: user.id,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setTrips([...trips, data])
        setShowNewTripModal(false)
        setNewTrip({ title: '', destination: '', startDate: '', endDate: '', budget: '' })
      }
    } catch (error) {
      console.error('Error creating trip:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  if (!user) return null

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome, {user.name}! 👋
              </h1>
              <p className="text-gray-600">Manage your travel adventures</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </motion.div>

          {/* Create Trip Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <button
              onClick={() => setShowNewTripModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              Create New Trip
            </button>
          </motion.div>

          {/* Trips Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading your trips...</p>
            </div>
          ) : trips.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card text-center py-12"
            >
              <p className="text-2xl mb-4">🗺️</p>
              <p className="text-gray-600 text-lg">No trips yet. Create your first adventure!</p>
              <button
                onClick={() => setShowNewTripModal(true)}
                className="btn-primary mt-6 inline-block"
              >
                Create First Trip
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip: any, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{trip.title}</h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span>{trip.destination}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-600" />
                        <span>
                          {new Date(trip.startDate).toLocaleDateString()} -
                          {new Date(trip.endDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-blue-600" />
                        <span>${trip.budget}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-gray-200">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        <Edit size={16} />
                        Edit
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* New Trip Modal */}
        {showNewTripModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Trip</h2>

              <form onSubmit={handleCreateTrip} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Trip Title
                  </label>
                  <input
                    type="text"
                    placeholder="Summer Vacation 2024"
                    value={newTrip.title}
                    onChange={(e) => setNewTrip({ ...newTrip, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Paris, France"
                    value={newTrip.destination}
                    onChange={(e) => setNewTrip({ ...newTrip, destination: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={newTrip.startDate}
                      onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={newTrip.endDate}
                      onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget (USD)
                  </label>
                  <input
                    type="number"
                    placeholder="5000"
                    value={newTrip.budget}
                    onChange={(e) => setNewTrip({ ...newTrip, budget: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewTripModal(false)}
                    className="flex-1 btn-outline"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 btn-primary">
                    Create Trip
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default DashboardPage
