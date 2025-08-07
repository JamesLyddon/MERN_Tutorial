const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (request, response) => {
    response.json({msg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (request, response) => {
    response.json({msg: 'GET a single workout by id'})
})

// POST a new workout
router.post('/', (request, response) => {
    response.json({msg: 'POST a new workout'})
})

// DELETE a workout by id
router.delete('/:id', (request,response) => {
     response.json({msg: 'DELETE a workout'})
})

// UPDATE a workout by id
router.patch('/:id', (request,response) => {
     response.json({msg: 'UPDATE a workout'})
})

module.exports = router