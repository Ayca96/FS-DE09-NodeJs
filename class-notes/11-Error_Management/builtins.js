'use strict'

/*---------------------------------------
     EXPRESSJS - BUILT IN MIDDLEWARES
---------------------------------------*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/********************************************/

// Receving Data
//? Parse (ayristirmak) data which is coming in body 
app.use(express.json())

//? Parse  data which is coming in text
app.use(express.text())


//? Parse  data which is coming in Form-encode
app.use(express.urlencoded())



app.all('/:id',(req,res)=>{

 const{params,query,body,headers} = req
  
res.send({
  error:false,
  params,
  query,
  body,
  headers
})
})












app.listen(PORT, () => console.log(`Running at : http://127.0.0.1:${PORT}`)); // hep asagida durmasi lazim.