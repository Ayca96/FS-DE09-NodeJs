"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */


const { list, create, read, update, deletePizza } = require('../controllers/pizza')

//UPLOAD (Multer Middlewares)
// npm i multer

const multer = require('multer')

const upload = multer ({
    //dest:'./uploads'
    storage:multer.diskStorage({
        destination:'./uploads',
        filename:function(req,file,returnCallback){
            console.log('file ----',file);
           // returnCallback(error,filename) // syntax
           returnCallback(null,file.originalname)
            
        }
    })
})


// URL: /pizzas

router.route('/')
 .get(list)
 .post(upload.single('image'),create)
 //.post(upload.any(),create)
 //.post(upload.array('image'),create)


router.route('/:id').get(read).put(update).patch(update).delete(deletePizza)

/* ------------------------------------------------------- */
module.exports = router