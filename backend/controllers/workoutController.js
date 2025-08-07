const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getWorkouts = async (request, response) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    response.status(200).json(workouts)
}

const getWorkout = async (request, response) => {
    const { id } = request.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({error: 'No such workout'})
    }
    
    const workout = await Workout.findById(id)
    
    if (!workout) {
        return response.status(404).json({error: 'No such workout'})
    }
    
    response.status(200).json(workout)
}

const createWorkout = async (request, response) => {
    const {title, load, reps} = request.body

    try {
        const workout = await Workout.create({title, load, reps})
        response.status(200).json(workout)
    } catch(error) {
        response.status(400).json({error: error})
    }
}

const deleteWorkout = async (request, response) => {
    const {id} = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return response.status(404).json({error: 'No such workout'})
    }
    
    response.status(200).json(workout)
}

const updateWorkout = async (request, response) => {
    const {id} = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...request.body
    })

    if (!workout) {
        return response.status(404).json({error: 'No such workout'})
    }
    
    response.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}