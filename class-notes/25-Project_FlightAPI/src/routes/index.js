"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
const flightRoutes = require('../routes/flight');
/* ------------------------------------------------------- */

// auth
router.use('/auth', require('./auth'))

//user
router.use('/users', require('./user'))

//flight
router.use('/flights', require('./flight'))

//flight with user
router.use('/flights/users', flightRoutes)


// documents:
router.use('/documents', require('./document'))


/* ------------------------------------------------------- */
module.exports = router