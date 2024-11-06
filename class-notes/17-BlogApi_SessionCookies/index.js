'use strict'

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/

const express = require("express");
const app = express();
const User = require("./src/models/user");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Middlewares:
app.use(express.json())
require('express-async-errors')

// Session-Cookies
const session = require('cookie-session')
app.use(session({
    secret: process.env.KEY_CODE,
    //maxAge:1000 * 60 * 60 * 24 * 2 // 2 days
}))

// Authentication Middleware

// const authentication = async (req,res,next)=>{
// req.user = null
// console.log(req.session);
// if(req.session._id){

//     const user = await User.findById(req.session._id)
//     if(user && user.password == req.session.password){
        
//         req.user = user

//     }else{
//         req.session
//     }

// }

// next()
// }

//app.use(authentication)

app.use(require('./src/middlewares/authentication'))

// DB Connections
require('./src/configs/dbConnection') 


// Routes
app.all('/', (req, res) => {

    //req.session.user={name:'Ayca'}
    //req.session = null

    res.send({
        msg:'WELCOME TO BLOG APP',
        session:req.session,
        isLogin:req.user

    })
})

app.use('/blog',require('./src/routers/blog'))
app.use('/user',require('./src/routers/user'))
app.use('/auth',require('./src/routers/auth'))

// continue from here...

// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))