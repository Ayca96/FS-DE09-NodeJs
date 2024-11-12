"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { list, create, read, update, delete: deleteDepartment, personnels } = require('../controllers/department')
const {isLogin,isAdmin,isAdminOrLead}= require('../middlewares/permissions')

// URL : /departments
const isLogin = (req,res,next)=>{

    if(req.user && req.user.isActive && req.user.isAdmin){
        next()

    }else{
        res.errorStatusCode = 401 
        throw new Error('No Permission: You must login and to be Admin')
    }
    

}

router.route('/')
    .get(isLogin,list)
    .post(isAdmin,create)

router.route('/:id')
    .get(isLogin,read)
    .put(isAdmin,update)
    .patch(isAdmin,update)
    .delete(isAdmin,deleteDepartment)

router.get('/:id/personnels', personnels)

/* ------------------------------------------------------- */
module.exports = router