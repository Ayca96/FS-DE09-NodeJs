"use strict"

const Token = require("../models/token")

/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

// Authentication Control Middleware:

module.exports = async(req,res,next)=>{

  req.user = null

  const auth = req.headers.authorization || null

  const tokenKey = auth ? auth.split('') : null
  if(tokenKey && tokenKey[0]== "Token"){
    const tokenData = await Token.findOne({token:tokenKey[1]}).populate('userId')
    console.log(tokenData);
    
  }
  // console.log(auth);


  next()
}