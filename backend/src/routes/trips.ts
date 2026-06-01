import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Create trip
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, destination, startDate, endDate, budget, userId } = req.body

    const trip = await prisma.trip.create({
      data: {
        title,
        description,
        destination,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        budget,
        userId,
      },
    })

    res.status(201).json(trip)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create trip' })
  }
})

// Get user trips
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const trips = await prisma.trip.findMany({
      where: { userId },
      include: {
        itineraries: true,
        expenses: true,
      },
    })

    res.json(trips)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trips' })
  }
})

// Get trip by ID
router.get('/:tripId', async (req: Request, res: Response) => {
  try {
    const { tripId } = req.params

    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        itineraries: true,
        expenses: true,
        members: true,
      },
    })

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' })
    }

    res.json(trip)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trip' })
  }
})

// Update trip
router.put('/:tripId', async (req: Request, res: Response) => {
  try {
    const { tripId } = req.params
    const { title, description, destination, startDate, endDate, budget, status } = req.body

    const trip = await prisma.trip.update({
      where: { id: tripId },
      data: {
        title,
        description,
        destination,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        budget,
        status,
      },
    })

    res.json(trip)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update trip' })
  }
})

// Delete trip
router.delete('/:tripId', async (req: Request, res: Response) => {
  try {
    const { tripId } = req.params

    await prisma.trip.delete({
      where: { id: tripId },
    })

    res.json({ message: 'Trip deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete trip' })
  }
})

export default router
