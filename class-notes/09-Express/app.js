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


// app.get('/',(req,res)=>{
//  /* res.write('clarusway')
//   res.write('hallo')
//   res.end()*/ // bitiriyor. burdan sonra write yazamayiz artik.

// //   res.write(JSON.stringify( {  // objeyi yazamaz
// //     message:'clarusway'
// // }))
// // res.end()

//   res.send({ // obje dönüsümü yapar.
//     message:'clarusway'
//   })

// })

// app.get('/',(req,res)=>{res.send('method GET')})
// app.post('/',(req,res)=>{res.send('method POST')})
// app.put('/',(req,res)=>{res.send('method PUT')}) // PUT = PATCH
// app.patch('/',(req,res)=>{res.send('method PATCH')}) // PUT = PATCH
// app.delete('/',(req,res)=>{res.send('method DELETE')})

//app.all('/',(req,res)=>{res,send('method GET')})  // tavsiye edilmez.

//app.get('/abc(x?)123',(req,res)=>{res.send('method GET')}) //  ? varsa ya da yoksa calistirir.
//app.get('/abc(x+)123',(req,res)=>{res.send('method GET')})// + yazinca  n adet x yazilabilir
//app.get('/abc(x*)123',(req,res)=>{res.send('method GET')})// * arada ne olursa olsun veriyi ceker.

//app.get(/abc/,(req,res)=>{res.send('method GET')})
 // tek tirnaklar yok burda. Bu bir regex ifadesidir. Bu ifade, URL'de "abc" dizisinin herhangi bir yerde geçtiği yollarla eşleşir.
//app.get(/abc$/,(req,res)=>{res.send('method GET')}) //Bu rota, URL'nin tamamen /abc ile bitmesini bekler.

//app.get(/^\/abc/,(req,res)=>{ res.send( ' method GET') }) //  sonuna ne gelirse gelsin


//$: Düzenli ifadelerde, $ işareti "sonu" temsil eder. Yani bu rota, URL'nin sonunda "abc" ile bitmesini zorunlu kılar.




//? url Parametre

// app.get('/user/:userId/:name',(req,res)=>{
//   res.send({
//      url: {
//          protocol:req.protocol,
//          secure:req.secure,
//          hostname:req.hostname,
//          subdomain:req.subdomains,
//          url:req.url,
//          originalURL:req.originalUrl, // hangi routerdaysak onu verir isleyecegiz bu konuyu
//          params:req.params,
//          method:req.method,
//          query:req.query
//      },
//      id:req.params.userId
//  })
// })

//? Status Codes
//todo default status code 200
// app.get('/', (req, res) => {res.status(200).send({ message: 'ok' })});
// app.put('/', (req, res) => {res.status(201).send({ message: 'ok' })});
// app.post('/', (req, res) => {res.status(202).send({ message: 'ok' })});
// app.get('/', (req, res) => {res.status(203).send({ message: 'ok' })});

//app.get('/download',(req,res)=>{res.download ('./app.js','newName.js')}) // newName app.js nin yeni adi, degistirmis oluyoruz. download methodu ile indirme yapiyoruz.

//? show file content
//app.get('/show',(req,res)=>{res.sendFile(__dirname+'/app.js')}) // tam dosya yolu lazim -> path must be absolute or specify root to res.sendFile.

//? redirect 301 or 302

//app.get('/kalici',(req,res)=>{res.redirect(301,'https://www.clarusway.com')})  //301 kalici kaydediyor
//app.get('/gecici',(req,res)=>{res.redirect(302,'https://www.clarusway.com/courses/')}) 
//app.get('/gecici',(req,res)=>{res.redirect(302,'https://clarusway.com/courses/')}) //302 gecici kaydediyor sayfayi  













// app.listen (PORT=8000)  Ein Port erlaubt die Kommunikation zwischen Ihrem Computer mit anderen Computern sowie mit dem Internet. 
app.listen(8000, ()=> console.log(`Server running on http://${HOST}:${PORT}`)
)


 // nodemon app.js yazdik cünkü package.json da main olarak app yazili. app.js yazmadan da calisirdi default alirdi ama baska dosya olursa ismini belirtmemiz lazim.

 //https://regexr.com