import dotenv from 'dotenv'
dotenv.config()
import express, { json } from 'express'
import connectionDB from './src/database/connection.js'
import postRoutes from './src/modules/post/post.controller.js'
import aiRouters from './src/modules/imageAi/GenerateImage.controller.js'
import cors from 'cors'

const app = express()
const port = 3000
connectionDB()
app.use(express.json({ limit: "10mb" })); // Increase the limit as needed
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  }));

app.use('/api/posts', postRoutes)
app.use('/api/ai', aiRouters)
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Internal server error'
    res.status(status).json({
        success: false,
        error: message
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))