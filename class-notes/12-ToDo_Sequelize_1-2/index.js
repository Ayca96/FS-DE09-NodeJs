"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();
require('express-async-errors')
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const DB_PATH = process.env.DB_PATH || './db.sqlite3';
const DB_NAME = process.env.DB_NAME || './db.sqlite3';
/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

/**********************************************************/
// Sequelize

const {Sequelize,DataTypes}=require('sequelize')

// Creating new instance
const sequelize = new Sequelize(`${DB_NAME}:${DB_PATH}`) // define your db and the path

// Creating Model
//sequelize.define('modelName', {attributes})

const Todo = sequelize.define('todos',{
 /* id:{ // this attribute created auto
    type:DataTypes.INTEGER,
    allowNull:false, // default true
    unique:true, // default false
    comment:'this is comment',
    primaryKey:true, // default false
    autoIncrement: true, //default false
    field:'custom name',
    defaultValue:0 //default : null
  } */

 title:{
  type:DataTypes.STRING,
  allowNull:false
 },
 description:DataTypes.TEXT,  // =>shorthand using, uzun hali type:DataTypes.TEXT

 priority:{ // -1:low, 0:normal, 1:high
  type:DataTypes.TINYINT,
  allowNull:false, // Bu alan NULL değer kabul etmez
  defaultValue:0
 },

 isDone:{
  type:DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: false,
 }
// No need to define created At and updatedAt Created auto:
})




// Sync  just execute once > sadece bir kez yürüt yoruma al.
//sequelize.sync() // executing model
//sequelize.sync({force:true}) // drop table & create table
//sequelize.sync({alter:true}) // to backup & drop table & create table from backup


//Connecting to DB
sequelize.authenticate() // orm de calisirken bütün fonksiyonlar asenkrondur.
.then(()=>console.log('*DB connected*'))
.catch(()=>console.log('*DB not connected*'))

//Routes
const router= express.Router()

//List Todo

router.get('/todo', async(req,res)=>{

 //const result= await Todo.findAll() // findAll bir nevi select yani okuma anlaminda read gibi.

 const result= await Todo.findAndCountAll() // count getiriyor ekstra

 res.status(200).send({
    error:false,
    result
    
  })
})

// CRUD OPERATIONS

// Create Todo
router.post('/todo',async (req,res)=>{

  // await Todo.create({
  //   title:'Title 1',
  //   description:'Description',
  //   priority:0,
  //   isDone:false
  
  // })

 
 const result = await Todo.create(req.body)
  res.status(201).send({
    error:false,
    result
  })

 
})



// Read Todo

router.get('/todo/:id', async(req,res)=>{
  
  // const result = await Todo.findOne({where:{id:req.params.id}})

  const result = await Todo.findByPk(req.params.id)

  res.status(200).send({
    error:false,
    result
  })
})


// Update Todo

router.put('/todo/:id', async(req,res)=>{

//const result = await Todo.update({...newData},{...filter})
const result = await Todo.update(req.body,{where: {id:req.params.id}})
const isUpdated = result[0]
res.status(isUpdated ? 202 : 404).send({
  error:isUpdated ? false : true,
  message:isUpdated ? 'Updated':"Something went wrong",
  updatedData : isUpdated && await Todo.findByPk(req.params.id)
})

})




// Delete Todo
router.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const isDeleted = await Todo.destroy({
      where: { id }
  });

 if(isDeleted){
  res.sendStatus(204)
 }else{
  res.errorStatusCode = 404
  throw new Error('Can not deleted ! or Maybe already deleted.')
 }

  res.status(202).send({
    error: false,
  
  })

});




app.use(router)

// continue from here...

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));