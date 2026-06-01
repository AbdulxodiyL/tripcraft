import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Get budget
router.get('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const budget = await prisma.budget.findFirst({
      where: { userId },
    })

    if (!budget) {
      return res.status(404).json({ error: 'Budget not found' })
    }

    res.json(budget)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch budget' })
  }
})

// Create or update budget
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, totalBudget } = req.body

    let budget = await prisma.budget.findFirst({
      where: { userId },
    })

    if (budget) {
      budget = await prisma.budget.update({
        where: { id: budget.id },
        data: {
          totalBudget,
          remaining: totalBudget - budget.spent,
        },
      })
    } else {
      budget = await prisma.budget.create({
        data: {
          userId,
          totalBudget,
          remaining: totalBudget,
        },
      })
    }

    res.status(201).json(budget)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create/update budget' })
  }
})

// Add expense
router.post('/expense', async (req: Request, res: Response) => {
  try {
    const { tripId, category, amount, currency, description, date } = req.body

    const expense = await prisma.expense.create({
      data: {
        tripId,
        category,
        amount,
        currency,
        description,
        date: new Date(date),
      },
    })

    // Update budget
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: { expenses: true },
    })

    if (trip) {
      const totalExpenses = trip.expenses.reduce((sum, e) => sum + e.amount, 0) + amount
      const budget = await prisma.budget.findFirst({
        where: { userId: trip.userId },
      })

      if (budget) {
        await prisma.budget.update({
          where: { id: budget.id },
          data: {
            spent: totalExpenses,
            remaining: budget.totalBudget - totalExpenses,
          },
        })
      }
    }

    res.status(201).json(expense)
  } catch (error) {
    res.status(500).json({ error: 'Failed to add expense' })
  }
})

export default router
