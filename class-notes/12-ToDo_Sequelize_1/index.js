"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

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
const sequelize = new Sequelize('sqlite:./db.sqlite3') 

// Creating Model
//sequelize.define('todos', {attributes})

sequelize.define('todos',{
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




// Sync  just execute once > sadece bir kez yürüt
//sequelize.sync() // executing model
//sequelize.sync({force:true}) // drop table & create table
sequelize.sync({alter:true}) // to backup & drop table & create table from backup


//Connecting to DB
sequelize.authenticate()
.then(()=>console.log('*DB connected*'))
.catch(()=>console.log('*DB not connected*'))





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