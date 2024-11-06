"use strict";

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/

// export etmenin kisa yolu.
const User = require('../models/user')

module.exports = async (req,res,next)=>{
  req.user = null
  console.log(req.session);
  if(req.session._id){
  
      const user = await User.findById(req.session._id)
      if(user && user.password == req.session.password){
          
          req.user = user
  
      }else{
          req.session
      }
  
  }
  
  next()
  }

  

  // const authentication = async (req,res,next)=>{
  //   req.user = null
  //   console.log(req.session);
  //   if(req.session._id){
    
  //       const user = await User.findById(req.session._id)
  //       if(user && user.password == req.session.password){
            
  //           req.user = user
    
  //       }else{
  //           req.session
  //       }
    
  //   }
    
  //   next()
  //   }