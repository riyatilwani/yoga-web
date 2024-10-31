const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

// For TypeScript type support, use type imports
import type { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API routes can be added here
const adminRoutes = require('./routes/adminRoute')
const bookingRoutes = require('./routes/bookingRoute')

app.use('/api/admin', adminRoutes)
app.use('/api/booking', bookingRoutes)

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!' })
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public')))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
