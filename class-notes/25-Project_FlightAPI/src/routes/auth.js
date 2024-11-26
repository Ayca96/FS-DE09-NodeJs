"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const {login} = require('../controllers/auth')


// URL : /auth
router.route('/').post(login)
/* ------------------------------------------------------- */
module.exports = router