'use strict'

/*
Express.js
*/

/*
 npm init -y
 npm i express dotenv

*/


//? Express server start

const express = require ('express')

const app= express() // express üzerinde server calistirir

// dotenv 
/*
const x=require('dotenv')
x.config() // config dosyasini okur
*/

require('dotenv').config() // dotenv deki tüm degiskenler process env ye alinir.
//console.log(process.env);


const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

// app.listen (PORT=8000)  Ein Port erlaubt die Kommunikation zwischen Ihrem Computer mit anderen Computern sowie mit dem Internet. 


app.get('/',(req,res)=>{
  res.write('clarusway')
  res.write('hallo')
  res.end() // bitiriyor. burdan sonra write yazamayiz artik.
})



app.listen(8000, ()=> console.log(`Server running on http://${HOST}:${PORT}`)
)


 // nodemon app.js yazdik cünkü package.json da main olarak app yazili. app.js yazmadan da calisirdi default alirdi ama baska dosya olursa ismini belirtmemiz lazim.