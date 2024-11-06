'use strict'

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/

// mongoose

const mongoose = require('mongoose')

// const SchemaName = new mongoose.Schema({...fields},{...settings}) 

// const SchemaName = new mongoose.Schema({

// // id:number
// //_id:ObjectId mongodb de id böyle yaziliyor. defaut olarak olusturuluyor hexedecimal format id type mongoose özgü

// fieldName:{
//   type:Number,
//   default:null,// if value not send.
//   trim:true,
//   unique:true,
//   //required:true
//   required:[true,'This required fieldname'],
//   index:true, // to access data faster
//   //enum:[1,2,3]
//  // enum:["1","2","3"],
//   enum:[["1","2","3"],"This is enum error message"],
//   //validate:(data)=> true // validate dogrulamak
//   validate:[
//     (data)=>{return true} , "This is validate error message"
//   ],
//   get:(data)=>data, // auto runs - to get the data from db
//   set:(data)=>data, // auto runs - to save the data to db
// },

// fieldName: String // shorthand

// },{
//   collection:'tableName',
//   timestamps:true
// })

/*-------------------------------------------------*/

// Blog Category Schema


const BlogCategorySchema = new mongoose.Schema({

  // _id
  name:{
    type:String,
    trim:true,
    required:true
  }

},{
  collection:'BlogCategories', // Table Name
  timestamps:true // creates -> createdAt, updatedAt
})

//const BlogCategory = mongoose.model('BlogCategory',BlogCategorySchema)


// Blog Post Schema

const BlogPostSchema = new mongoose.Schema({

  //_id
  categoryId:{ // default realtion is ManyToOne
    ref: "BlogCategory", // Yukardaki model isminde geliyor.
    required:true,
    type:mongoose.Schema.Types.ObjectId,
    unique:true // Convert to One ToOne relation
  },
 title:{
  type:String,
  trim:true,
  required:true
 },

 content:{
  type:String,
  trim:true,
  required:[true, "this content is required"]
 }
},
  
  // updatedAt
  // createdAt
  {
    collection:'BlogPosts', // Table Name
    timestamps:true //creates -> createdAt, updatedAt

})

// export sekilleri

//const BlogPost= mongoose.model('BlogPost',BlogPostSchema)

//module.exports = {BlogCategory, BlogPost} // key value degeri ayni ise tek isim yazmak yeterli.

module.exports = {
 BlogCategory : mongoose.model('BlogCategory',BlogCategorySchema),
 BlogPost: mongoose.model('BlogPost',BlogPostSchema)
}