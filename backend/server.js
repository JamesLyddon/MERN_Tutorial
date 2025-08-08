require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use((request, response, next) => {
    console.log(request.method, request.path)
    next()
})

// routes
app.use('/api/workouts/', workoutRoutes)

// connect to DB asynchronously
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => {
            console.log(`connected to DB and listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
