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

// DB Connections
require('./src/configs/dbConnection') 


// Routes
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

app.use('/blog',require('./src/routers/blog'))
app.use('/user',require('./src/routers/user'))

// continue from here...

// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))