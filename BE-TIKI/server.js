import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from 'body-parser'
import connectDB from "./config/connectDB.js"
import router from "./routers/router.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
connectDB()
app.use('/api', router)
const PORT = process.env.PORT || 8001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
    return res.send('Start server success!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})