"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
/*------------------------------------------------------- */

// const express = require("express")
// const todo = require('../controllers/todo')

const router = require("express").Router()
// Contorollers
const { list, create, read, update, delete: deleteTodo } = require('../controllers/todo.view')


router.route('/')
    .get(list)
    .post(create)

router.route('/:id')
    .get(read)
    .put(update)
    .delete(deleteTodo)

module.exports = router