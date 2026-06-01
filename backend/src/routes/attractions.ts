import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Get all attractions
router.get('/', async (req: Request, res: Response) => {
  try {
    const { destinationId, search } = req.query

    const attractions = await prisma.attraction.findMany({
      where: {
        ...(destinationId && { destinationId: String(destinationId) }),
        ...(search && {
          name: { contains: String(search), mode: 'insensitive' },
        }),
      },
    })

    res.json(attractions)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attractions' })
  }
})

// Get attraction by ID
router.get('/:attractionId', async (req: Request, res: Response) => {
  try {
    const { attractionId } = req.params

    const attraction = await prisma.attraction.findUnique({
      where: { id: attractionId },
      include: {
        destination: true,
      },
    })

    if (!attraction) {
      return res.status(404).json({ error: 'Attraction not found' })
    }

    res.json(attraction)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attraction' })
  }
})

// Save attraction as favorite
router.post('/:attractionId/favorite', async (req: Request, res: Response) => {
  try {
    const { attractionId } = req.params
    const { userId } = req.body

    const favorite = await prisma.favorite.create({
      data: {
        userId,
        attractionId,
      },
    })

    res.status(201).json(favorite)
  } catch (error) {
    res.status(500).json({ error: 'Failed to save favorite' })
  }
})

// Remove from favorites
router.delete('/:attractionId/favorite/:userId', async (req: Request, res: Response) => {
  try {
    const { attractionId, userId } = req.params

    await prisma.favorite.deleteMany({
      where: {
        attractionId,
        userId,
      },
    })

    res.json({ message: 'Favorite removed' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove favorite' })
  }
})

export default router
