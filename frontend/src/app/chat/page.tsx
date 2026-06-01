'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Bot } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const ChatPage = () => {
  const [messages, setMessages] = useState<any[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { id: Date.now(), role: 'user', content: inputValue }
    setMessages([...messages, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3001/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      })

      if (response.ok) {
        const data = await response.json()
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, role: 'assistant', content: data.reply },
        ])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-20 flex flex-col">
        <div className="max-w-2xl mx-auto w-full px-4 flex flex-col flex-1">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <Bot className="text-blue-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Travel Assistant Chat
            </h1>
            <p className="text-gray-600 mt-2">
              Ask anything about travel, destinations, tips, and more
            </p>
          </motion.div>

          {/* Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 space-y-4 mb-6 overflow-y-auto card"
          >
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <MessageCircle className="text-gray-300 mx-auto mb-4" size={48} />
                  <p className="text-gray-500">Start a conversation with your travel assistant!</p>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Input */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSendMessage}
            className="flex gap-2"
          >
            <input
              type="text"
              placeholder="Ask me anything about travel..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex items-center gap-2 disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ChatPage
