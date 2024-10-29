'use strict'


//Routes And Controllers

//const express = require("express")

const router= require("express").Router()

// Controllers
const {list,create,read,update,delete:deleteTodo} = require ('../controllers/todo') 
//const todo = require('../controllers/todo')

// //List Todo

// router.get('/todo',list )
 
//  // CRUD OPERATIONS
 
//  // Create Todo
//  router.post('/todo',create)
 
 
 
//  // Read Todo
 
//  router.get('/todo/:id',read )
 
 
//  // Update Todo
 
//  router.put('/todo/:id',update )
 
 
 
//  // Delete Todo
//  router.delete('/todo/:id', deleteTodo);
 


 router.route('/todo')
 .get(list)
 .post(create)

 router.route('/todo/:id')
  .get(read)
  .put(update)
  .delete(deleteTodo)

 module.exports = router