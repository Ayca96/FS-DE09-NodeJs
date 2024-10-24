"use strict";

/*---------------------------------------

          Error Handling in NodeJS
---------------------------------------*/

/*

npm init -y
npm install express dotenv
echo PORT=8000 > .env  (terminalden .env dosyasi aciyoruz.)
cat > .gitignore (kopyalanan gitinore verilerini terminale yapistir ve sonra ctrl+c ile cikis yap. terminalden böylece gitignore olusturmus oluyoruz.)
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/*----------------------------------------*/

// app.get('/user/:id', (req,res)=>{
// const {id} =req.params

// if(isNaN(id)){  // isNaN= is not a Number demek ve böyleyse true döner.
//  // res.errorStatusCode = 400
//   throw new Error ('id is not a number',{cause:'hata params tan gelen id den kaynakli'})

// } else{
//   res.send({
//   error:false,
//   message:'hi there',
//   id // id:id yazmak yerine sadece id yazsak yeterli key value isimleri ayni oldugu zamanlarda
// })
// }

// })

/*---------------------------------------------*/

// TRY - CATH


// app.get('/user/:id', (req, res,next) => {

//   const { id } = req.params
//   try {
//       if (isNaN(id)) {
//           res.errorStatusCode = 400
//           throw new Error('ID is not a number', { cause: 'hata paramsdan gelen id den olustu' })
//       } else {
//           res.send({
//               error: false,
//               message: 'hi there',
//               id
//           })
//       }
//   } catch (error) {

//       // const statusCode = res?.errorStatusCode ?? 500

//       // res.status(statusCode).send({
//       //     error: true,
//       //     message: error.message,
//       //     cause: error.cause,
//       // })
//       next(error) // Send the error to > Error Handler
//   }

// })

/**********************************/
// ASYNC 

// const asyncFunction = async ()=> {
//   throw new Error ('This is error message from async function! ', {cause:'this is async cause message'})
// }

// app.get('/async', async(req,res,next)=>{
// await asyncFunction().catch(next) Send the error to > Error Handler

//   res.send({
//     error:false,
//     msg:'All is well'
//   })

// })

//next() çağrısı, bir sonraki middleware'e hatasız geçişi sağlar.

// express-async-errors  npm i express-async-errors indirdik

require('express-async-errors')

app.get('/async', async (req, res) => {
  res.errorStatusCode = 400
  throw new Error('Created error in async-func')
})


const errorHandler = (error, req, res, next) => {

  const statusCode = res?.errorStatusCode ?? 500

  res.status(statusCode).send({
      error: true,
      message: error.message,
      cause: error.cause,
      stack:error.stack // More detailed info about error.
  })
} // asenkron hatalari yakalayamiyor.

 app.use(errorHandler) // errorhandler hep asagida durmasi lazim.


app.listen(PORT, () => console.log(`Running at : http://127.0.0.1:${PORT}`)); // hep asagida durmasi lazim.
