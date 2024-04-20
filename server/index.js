const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const bodyParser = require("body-parser")

require("dotenv").config()

const authRoutes = require("./routes/AuthRoutes")

const app = express()
const PORT = process.env.PORT | 5174

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch((error) => console.log(error))

app.use('/api/auth', authRoutes)

app.listen(PORT, () => console.log(`Listening at PORT:${PORT}...`))