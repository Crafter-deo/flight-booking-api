const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/flights', controller.getFlights)

router.get('/flights/:id', controller.getFlight)

router.post('/flight', controller.addFlight)

router.put('/flights/:id', controller.updateFlight)

router.delete('/flights/:id', controller.deleteFlight)



module.exports = router;

