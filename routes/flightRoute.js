const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .get('/flights', controller.getFlights)

    .get('/flights/:id', controller.getFlight)

    .post('/flights', controller.addFlight)

    .put('/flights/:id', controller.updateFlight)

    .delete('/flights/:id', controller.deleteFlight)



module.exports = router;

