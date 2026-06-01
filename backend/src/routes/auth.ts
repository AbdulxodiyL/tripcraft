import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = Router()
const prisma = new PrismaClient()

// Register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    // Generate token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret'
    )

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' })
  }
})

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Find user
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Check password
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Generate token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret'
    )

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (error) {
    res.status(500).json({ error: 'Login failed' })
  }
})

// Google Login
router.post('/google', async (req: Request, res: Response) => {
  try {
    const { googleId, email, name } = req.body

    let user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          googleId,
          password: 'google_auth',
        },
      })
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret'
    )

    res.json({
      message: 'Google login successful',
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (error) {
    res.status(500).json({ error: 'Google login failed' })
  }
})

// Telegram Login
router.post('/telegram', async (req: Request, res: Response) => {
  try {
    const { telegramId, email, name } = req.body

    let user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          telegramId,
          password: 'telegram_auth',
        },
      })
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret'
    )

    res.json({
      message: 'Telegram login successful',
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (error) {
    res.status(500).json({ error: 'Telegram login failed' })
  }
})

export default router
