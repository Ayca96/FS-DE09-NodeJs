"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { login, logout, refresh } = require('../controllers/auth')

//url: /auth


// /auth
router.post('/login', login)
router.get('/logout', logout)
router.post('/refresh', refresh)

/* ------------------------------------------------------- */
module.exports = router