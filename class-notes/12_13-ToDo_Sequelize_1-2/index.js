"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();
require('express-async-errors')
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Async Errors to errorHandler
require('express-async-errors')

// Parse json data:
app.use(express.json())

// Routes

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})


//Routes
app.use(require('./src/routes/todo'))

// continue from here...

// const errorHandler = require('./src/middlewares/errorHandler')

// Errorhandler
app.use(require('./src/middlewares/errorHandler')
)

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));