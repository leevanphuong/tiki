import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectDB.js"
import router from "./routers/product.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
connectDB()
app.use('/api', router)
const PORT = process.env.PORT || 8001

app.get('/', (req, res) => {
    return res.send('Start server success!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})