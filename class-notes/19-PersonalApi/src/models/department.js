"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

/* ------------------------------------------------------- */

const {Schema, model, Collection} = require('mongoose');

const DepartmentSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    // validate:(name)=>{
    //     if(name.length<5){
    //         return false
    //     }else{
    //         return true
    //     }
    // }

},{
    collections:'departments',
    timestamps:true,
})

module.exports = model("Department",DepartmentSchema)