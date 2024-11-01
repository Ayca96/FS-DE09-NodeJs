'use strict'

const mongoose = require('mongoose')


module.exports = mongoose.connect('mongodb://localhost:27017/blogAPI')
.then(()=>console.log('* DB Connected'))
.catch(()=>console.log('* DB Not Connected'))
