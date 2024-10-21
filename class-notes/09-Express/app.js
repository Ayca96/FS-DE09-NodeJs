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
 /* res.write('clarusway')
  res.write('hallo')
  res.end()*/ // bitiriyor. burdan sonra write yazamayiz artik.

//   res.write(JSON.stringify( {  // objeyi yazamaz
//     message:'clarusway'
// }))
// res.end()

  res.send({ // obje dönüsümü yapar.
    message:'clarusway'
  })

})

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
app.get(/abc$/,(req,res)=>{res.send('method GET')}) //Bu rota, URL'nin tamamen /abc ile bitmesini bekler.

app.get(/^\/abc/,(req,res)=>{ res.send( ' method GET') }) //  sonuna ne gelirse gelsin


//$: Düzenli ifadelerde, $ işareti "sonu" temsil eder. Yani bu rota, URL'nin sonunda "abc" ile bitmesini zorunlu kılar.



app.listen(8000, ()=> console.log(`Server running on http://${HOST}:${PORT}`)
)


 // nodemon app.js yazdik cünkü package.json da main olarak app yazili. app.js yazmadan da calisirdi default alirdi ama baska dosya olursa ismini belirtmemiz lazim.

 //https://regexr.com