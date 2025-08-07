require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// routes
app.use('/api/workouts/', workoutRoutes)

// listen for requests
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
