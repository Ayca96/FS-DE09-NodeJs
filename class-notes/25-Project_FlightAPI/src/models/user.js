"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false,
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema = new mongoose.Schema({

    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password),
        // validate: (password) => true -> we will do this validation in controller get, bir özelliğe erişildiğinde işlem yapar.set, bir özelliğe değer atandığında işlem yapar.
    },

    email: {
        type: String,
        trim: true,
        unique: [true, 'This email has been taken already'],
        required: [true, 'Email is required!'],
        validate: [
            (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            "Please fill a valid email address",
        ],
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isStaff:{
        type:Boolean,
        default:false
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

},{
    collection:"user",
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
