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
const { stringify } = require("node:querystring");

/* -------------------------------------------- */

//http.createServer((req, res) => {});

// const app = http.createServer((request, response) => {
//   res.end("Hello World response end");
//   console.log("Hello from console");
// });

// DEFAULT server domain (local domain) => localhost : 127.0.0.1
// app.listen(PORT, () => {
//   console.log(`Server is running at: http://${HOST}:${PORT}`);
// });

/* -------------------------------------------- */

// http.createServer((req, res) => {
//   // console.log(req);
//  // console.log(res);

//   console.log(req.url);
//   if (req.url == '/') {
//       res.end('<h1>this is Home Page</h1>')
//   } else if (req.url == '/about') {
//       res.end('<h1>this is about Page</h1>')
//   } else {
//       res.end('<h1>this is any Page</h1>')
//   }
// }).listen(PORT,HOST () => console.log(`Server is running at : http://${HOST}:${PORT}`))

// const newApp= http.createServer((req,res)=>{

// if(req.url=='/'){
//   res.end('<h2>Hier ist Startseite</h2>')
// }else if (req.url == '/uns'){
//   res.end('<h2>Hier ist über uns</h2>')
// }else {
//   res.end('<h2>Hier ist andere Seite</h2>')
// }

// })

// newApp.listen(PORT, ()=>console.log(`Server läuft auf : http://${HOST}:${PORT}`))

http.createServer((req, res) => {

  /* res.write('<h1>this is write - 1 </h1>')
     res.write('<h1>this is write - 2 </h1>')
     res.write('<h1>this is write - 3 </h1>')
     res.write('<h1>this is write - 4 </h1>') */

  if (req.method == 'GET') {

      // setHeader (single header method)
      res.setHeader('title', 'value')

      // writeHead ( statusCode, statusMessage, {multi headers})
      res.writeHead(200, {
          'content-encoding': 'utf-8',
          'multi-headers-exp': "test header value"
      })

      const obj = {
          result: true,
          message: 'Hello world!'
      }

      res.write(JSON.stringify(obj))
      res.end()

  } else {
    res.writeHead(400)
      res.end('Wrong Method!')
  }

}).listen(PORT, () => console.log(`Server is running at : http://${HOST}:${PORT}`))