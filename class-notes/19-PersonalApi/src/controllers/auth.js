"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

module.exports = {

login:async (req,res)=>{
    
    const {email,password}= req.body
    if(email && password){
          res.status(200).send({
        error:false,
        message:'Login Successfull'
    })
    }else{
        throw new Error("Please enter email and password!")
    }

  
},

logout:async (req,res)=>{

}

}
