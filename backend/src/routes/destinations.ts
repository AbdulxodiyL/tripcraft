import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Get all destinations
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query

    const destinations = await prisma.destination.findMany({
      where: {
        ...(category && { category: String(category) }),
        ...(search && {
          OR: [
            { name: { contains: String(search), mode: 'insensitive' } },
            { country: { contains: String(search), mode: 'insensitive' } },
          ],
        }),
      },
      include: {
        attractions: true,
        hotels: true,
      },
    })

    res.json(destinations)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' })
  }
})

// Get destination by ID
router.get('/:destinationId', async (req: Request, res: Response) => {
  try {
    const { destinationId } = req.params

    const destination = await prisma.destination.findUnique({
      where: { id: destinationId },
      include: {
        attractions: true,
        hotels: true,
        reviews: true,
      },
    })

    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' })
    }

    res.json(destination)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destination' })
  }
})

// Create destination (Admin only)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, country, description, image, category } = req.body

    const destination = await prisma.destination.create({
      data: {
        name,
        country,
        description,
        image,
        category,
      },
    })

    res.status(201).json(destination)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create destination' })
  }
})

export default router
