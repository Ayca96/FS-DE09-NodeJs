'use strict'
/*
EXPRESS ROUTER
*/


const router = require('express').Router() // router sadece routing amacli bir app.

// app.use(router)

//  router.get('/',(req,res)=>{ res.send({message:'GET'})})
//  router.get('/user',(req,res)=>{ res.send({ message:'GET for user path'})})
//  router.post('/',(req,res)=>{ res.send({ message:'POST'})})

//? router.route()

router.route('/')
.get((req,res)=>{ res.send({message:'GET'})})
.put((req,res)=>{ res.send({ message:'POST'})})
.post((req,res)=>{ res.send({ message:'POST'})})
.delete((req,res)=>{ res.send({ message:'DELETE'})})

router.get('/user',(req,res)=>{ res.send({ message:'GET for user path'})})

module.exports=router