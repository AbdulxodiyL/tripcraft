import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Import routes
import authRoutes from './routes/auth'
import tripRoutes from './routes/trips'
import destinationRoutes from './routes/destinations'
import attractionRoutes from './routes/attractions'
import budgetRoutes from './routes/budget'
import aiRoutes from './routes/ai'

const app: Express = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'TripCraft backend is running' })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/trips', tripRoutes)
app.use('/api/destinations', destinationRoutes)
app.use('/api/attractions', attractionRoutes)
app.use('/api/budget', budgetRoutes)
app.use('/api/ai', aiRoutes)

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error Handler
app.use((err: any, req: Request, res: Response) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TripCraft backend running on http://localhost:${PORT}`)
  console.log(`📊 API Documentation: http://localhost:${PORT}/docs`)
})

export default app
