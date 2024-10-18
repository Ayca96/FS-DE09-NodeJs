// 'use strict'

// /* ------------------------- *

//           NodeJs Server

// /* --------------------------*/   

 

// // HTTP SERVER:
// const http =require('node:http') // built in module

// const PORT = process.env.PORT
// const HOST = process.env.HOSTNAME


// // require('node:http'), Node.js içinde HTTP protokolünü kullanarak sunucu oluşturmak ve HTTP isteklerini işlemek için gerekli olan http modülünü içe aktarmak için kullanılan bir ifadedir. 

// // http.createServer((request,response)=>{...})

// const app = http.createServer((request,response)=>{

//   response.end('Hallo world response end')
//   console.log('Hello world from console');
  
// })

// // DEFAULT SERVER DOMAIN (local domain) => localhost : 127.0.0.1
// app.listen(PORT,()=> console.log('Server running')
// )


// require('dotenv').config() // en yukari yazilmak zorunda.

// // .env dosyasında saklanan değişkenler, require('dotenv').config() ile uygulamaya yüklenir.
// // process.env ile bu değişkenlere uygulamanın herhangi bir yerinde erişilebilir.
// // Bu yöntem, uygulamanın güvenliğini artırır ve hassas bilgileri kod içinde doğrudan yazmak zorunda kalmazsınız.


// console.log('Hello world', PORT , HOST);




"use strict";
/* -------------------------------------------- *
                       NodeJs Server
/* -------------------------------------------- */

require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// HTTP SERVER:
const http = require("node:http"); // built in module

/* -------------------------------------------- */

//http.createServer((req, res) => {});

const app = http.createServer((req, res) => {
  res.end("Hello World response end");
  console.log("Hello from console");
});

// DEFAULT server domain (local domain) => localhost : 127.0.0.1
// app.listen(PORT, () => {
//   console.log(`Server is running at: http://${HOST}:${PORT}`);
// });

/* -------------------------------------------- */

