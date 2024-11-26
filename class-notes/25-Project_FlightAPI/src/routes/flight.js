"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */

const router = require('express').Router()

// URL: /flights

// const { list, create, read, update, deleteFlight } = require('../controllers/user')

const flight = require('../controllers/flight')

router.route('/').get(flight.list).post(flight.create)

router.route('/:id')
.get(flight.read)
.put(flight.update)
.patch(flight.update)
.delete(flight.deleteFlight)

/* ------------------------------------------------------- */
module.exports = router