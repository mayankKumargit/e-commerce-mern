import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
// configure env
dotenv.config()

// database config
connectDB()

const app=express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)

app.use('/api/v1/category',categoryRoutes)

app.use('/api/v1/product',productRoutes)

app.use

app.get("/",(request,response)=>{
    response.send({
        message:"Welcome to e-commerce app"
    })
})

const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode at port ${PORT}`.bgYellow.white)
})