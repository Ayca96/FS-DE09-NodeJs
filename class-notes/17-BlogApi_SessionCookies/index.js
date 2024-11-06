'use strict'

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Middlewares:
app.use(express.json())
require('express-async-errors')

// Session-Cookies
const session = require('cookie-session')
app.use(session({
    secret: process.env.KEY_CODE
}))

// DB Connections
require('./src/configs/dbConnection') 


// Routes
app.all('/', (req, res) => {
    res.send({
        msg:'WELCOME TO BLOG APP',
        session:req.session

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