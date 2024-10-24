'use strict'

/*---------------------------------------

          Error Handling in NodeJS
---------------------------------------*/

/*

npm init -y
npm install express dotenv
echo PORT=8000 > .env  (terminalden .env dosyasi aciyoruz.)
cat > .gitignore (kopyalanan gitinore verilerini terminale yapistir ve sonra ctrl+c ile cikis yap. terminalden böylece gitignore olusturmus oluyoruz.)
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/*----------------------------------------*/

app.get('/user/:id', (req,res)=>{
const {id} =req.params


if(isNaN(id)){  // isNaN= is not a Number demek ve böyleyse true döner.
 // res.errorStatusCode = 400
  throw new Error ('id is not a number',{cause:'hata params tan gelen id den kaynakli'})
  
} else{
  res.send({
  error:false,
  message:'hi there',
  id // id:id yazmak yerine sadece id yazsak yeterli key value isimleri ayni oldugu zamanlarda
})
}


})


/*---------------------------------------------*/

const errorHandler = (error,req,res,next)=>{
//console.log(error);
const statusCode= res?.errorStatusCode ?? 500

res.status(statusCode).send({
  error:true,
  message: error.message, //' error handler runnig'
  cause:error.cause,
 
})

}

app.use(errorHandler)












app.listen(PORT, ()=>console.log(`Running at : http://127.0.0.1:${PORT}` )) // hep asagida durmasi lazim.