"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

// URL: /users

// const { list, create, read, update, deleteUser } = require('../controllers/user')

const user = require('../controllers/user')

router.route('/').get(user.list).post(user.create)

router.route('/:id')
.get(user.read)
.put(user.update)
.patch(user.update)
.delete(user.deleteUser)

/* ------------------------------------------------------- */
module.exports = router