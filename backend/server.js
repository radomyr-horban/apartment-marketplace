require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const apartmentRoutes = require('./routes/routes')

const PORT = process.env.PORT || 4000
const app = express()

// middleware
app.use(express.json())

app.use(
  cors({
    origin:
      process.env.REACT_APP_CORS_ORIGIN_DEPLOY_CLIENT ||
      'http://localhost:3000',
  })
)

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/apartments', apartmentRoutes)

// connect to DB
mongoose.set('strictQuery', false)
mongoose
  //   .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to db and listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
