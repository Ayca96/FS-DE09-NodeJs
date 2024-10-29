'use strict'

const DB_PATH = process.env.DB_PATH || './db.sqlite3';
const DB_NAME = process.env.DB_NAME || 'sqlite';

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

module.exports = Todo