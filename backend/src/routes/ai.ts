import { Router, Request, Response } from 'express'
import { OpenAI } from 'openai'

const router = Router()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Generate trip itinerary
router.post('/generate-itinerary', async (req: Request, res: Response) => {
  try {
    const { destination, startDate, endDate, budget, interests, groupSize } = req.body

    const prompt = `Create a detailed travel itinerary for:
    Destination: ${destination}
    Start Date: ${startDate}
    End Date: ${endDate}
    Budget: $${budget}
    Interests: ${interests.join(', ')}
    Group Size: ${groupSize} people
    
    Provide daily activities, recommended hotels, restaurants, and attractions with estimated costs.`

    const message = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    const itinerary = message.choices[0].message.content

    res.json({
      success: true,
      itinerary,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate itinerary' })
  }
})

// Get destination recommendations
router.post('/recommend-destinations', async (req: Request, res: Response) => {
  try {
    const { interests, budget, duration, season } = req.body

    const prompt = `Recommend top 5 travel destinations based on:
    Interests: ${interests.join(', ')}
    Budget: $${budget}
    Duration: ${duration} days
    Season: ${season}
    
    For each destination, provide:
    - Name and country
    - Why it matches the interests
    - Estimated cost breakdown
    - Best time to visit
    - Top attractions`

    const message = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    const recommendations = message.choices[0].message.content

    res.json({
      success: true,
      recommendations,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to get recommendations' })
  }
})

// Detect scams
router.post('/detect-scams', async (req: Request, res: Response) => {
  try {
    const { agencyName, reviews, ratings } = req.body

    const prompt = `Analyze the following travel agency for potential scams:
    Agency Name: ${agencyName}
    Reviews: ${reviews}
    Ratings: ${ratings}
    
    Provide:
    - Scam risk score (0-100)
    - Red flags if any
    - Safety assessment
    - Recommendations`

    const message = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 1000,
    })

    const analysis = message.choices[0].message.content

    res.json({
      success: true,
      analysis,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze agency' })
  }
})

// Travel tips chatbot
router.post('/chat', async (req: Request, res: Response) => {
  try {
    const { message } = req.body

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful travel assistant. Provide practical advice about travel, destinations, packing, visas, safety, and travel planning.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const reply = response.choices[0].message.content

    res.json({
      success: true,
      reply,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to process message' })
  }
})

export default router
