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
app.use(json())
app.use(cors())

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