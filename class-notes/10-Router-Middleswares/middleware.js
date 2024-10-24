'use strict'

const express= require('express')
const app=express()

require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

//  app.all('/',(req,res)=>{
//    res.send({   
//      message:'Middleware'
//    })
//  })

// app.get('/',(req,res,next)=>{
//   console.log('middleware 1 calisti');
//   if(req.query.username==='clarusway')
//   next()
//   else{
//   res.send({   
//     message:'username not exist'
//   })
// }
 
// })


// app.get('/',(req,res)=>{
//   res.send({   
//     message:'welcome clarusway'
//   })
// })

// app.get('/',(req,res,next)=>{
  
//   if(req.query.username==='clarusway')
//       req.message='welcome'
//   else{
    
//     req.message='username not exist'
  
// }
// next()
 
// })

// app.get('/',(req,res,next)=>{
//   req.message1='message from mid 1'
//   next()
// })
// app.get('/',(req,res,next)=>{
//   req.message2='message from mid 2'
//   next()
// })
// app.get('/',(req,res,next)=>{
//   req.message3='message from mid 3'
//   next()
// })

//  app.get('/',(req,res)=>{
//    res.send({   
//      message1:req.message1,
//      message2:req.message2,
//      message3:req.message3
//    })
//  })



// const middlewarex= (req,res,next)=>{
//   console.log('mid x');
//   req.message1='message from mid x'
//   next()
// }
// const middleware1= (req,res,next)=>{
//   console.log('mid 1');
//   req.message1='message from mid 1'
//   next()
// }
// const middleware2= (req,res,next)=>{
//   console.log('mid 2');
//   req.message2='message from mid 2'
//   res.send('test')
//   // next()
// }
//app.get('/',middleware1,middlewarex,middleware2)
  // app.get('/',(req,res)=>{
  //      res.send({   
  //        message1:req.message1,
  //        message2:req.message2,
  //        message3:req.message3
  //      })
  //    })

  const middleware1= (req,res,next)=>{
    console.log('mid 1');
    next()
  }
  const middleware2= (req,res,next)=>{
    console.log('mid 2');
     next()
  }

    app.get('/',(req,res,next)=>{
      next()
        res.send({   
          message1:'get',
         
        })
      })

  // app.use(middleware1)
  // app.use(middleware2)

  app.use(middleware1,middleware2)

app.listen(8000, ()=> console.log(`Server running on http:${HOST}:${PORT}`)
)