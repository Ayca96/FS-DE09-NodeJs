"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

//user

router.use('/users', require('./user'))

// auth
router.use('/auth', require('./auth'))

// documents:

router.use('/documents', require('./document'))


/* ------------------------------------------------------- */
module.exports = router