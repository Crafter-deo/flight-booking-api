const data = require("../models/flights.json")
const fs = require(fs)

exports.getFlights = (req, res) => {
    console.log("example")
    let file = fs.readFile("../models/flights.json")
    res.status(200).send(file)
    // res.send({
    // title: "flight to canada",
    // time: "1 pm",
    // price: 26000,
    // date: "26-06-2022"
    // }
    // )
}

exports.getFlight = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.addFlight = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.updateFlight = (req, res, next) => {
    console.log("example")
    res.send("Flight example")
}

exports.deleteFlight = (req, res, next) => {
    console.log("example")
    res.send("Flight example")
}