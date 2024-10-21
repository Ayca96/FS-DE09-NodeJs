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

// app.listen (PORT=8000)  Ein Port erlaubt die Kommunikation zwischen Ihrem Computer mit anderen Computern sowie mit dem Internet. 

app.listen(8000, ()=> console.log('Server running')
)

// nodemon app.js yazdik cünkü package.json da main olarak app yazili. app.js yazmadan da calisirdi default alirdi ama baska dosya olursa ismini belirtmemiz lazim.