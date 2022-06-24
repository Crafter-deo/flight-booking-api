const fs = require("fs")
const { flights } = require("../models/Flight")
const { v4: uuidv4 } = require("uuid")


exports.getFlights = (req, res) => {
    try {
        res.status(200).json(flights)
        console.log(`Request made to get all flights`)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


exports.getFlight = (req, res) => {
    try {
        const flightId = req.params.id
        const flight = flights.find((flight) => flight.id === flightId)
        res.status(200).json(flight)
        console.log(`Request made to get a flight`)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

exports.addFlight = (req, res) => {
    try {
        const flight = req.body
        flight.id = uuidv4()
        flights.push(flight)
        res.status(201).json(
            {
                message: "Flight added successfully",
                flight
            }
        )
        console.log(`Request made to get add a flight`)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

exports.updateFlight = (req, res) => {
    try {
        const flightUpdate = req.body
        const flightId = req.params.id
        let flight = flights.find((flight) => flight.id === flightId)
        flight.title = flightUpdate.title
        flight.time = flightUpdate.time
        flight.price = flightUpdate.price
        flight.date = flightUpdate.date
        res.status(200).json({
            message: "Flight updated successfully",
            flight
        })
        console.log(`Request made to update a flight`)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }

}

exports.deleteFlight = (req, res, next) => {
    try {
        const flightId = req.params.id
        let flight = flights.find((flight) => flight.id === flightId)
        delete flights[flights.indexOf(flight)]
        res.status(200).json({
            message: "Flight deleted successfully",
        })
        console.log(`Request made to delete a flight`)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}