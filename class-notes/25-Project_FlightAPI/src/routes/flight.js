"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */

const router = require('express').Router()
// const flightController = require('../controllers/flight');

// URL: /flights

// const { list, create, read, update, deleteFlight } = require('../controllers/user')

const flight = require('../controllers/flight')

router.route('/').get(flight.list).post(flight.create)

router.route('/:id')
.get(flight.read)
.put(flight.update)
.patch(flight.update)
.delete(flight.deleteFlight)



// router.get('/flights-with-user', flightController.getFlightsWithUser); // Uçuşlar ve kullanıcı bilgilerini alıyoruz

/* ------------------------------------------------------- */
module.exports = router