"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require('../models/user')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    login: async (req, res) => {

        const { email, password } = req.body

        if (email && password) { // checking email and password

            const user = await User.findOne({ email: email }) // checking data from database

            if (user) {

                if (user.password == passwordEncrypt(password)) {

                    res.status(202).send({
                        error: false,
                        msg:'Login Success',
                        user,
                    })
                    
                } else {
                    res.errorStatusCode = 401
                    throw new Error('User is not found!')
                }

            } else {
                res.errorStatusCode = 401
                throw new Error('Wrong password or email.')
            }



        } else {
            res.errorStatusCode = 401
            throw new Error('Email and Password Required!')
        }

    },

    logout: async (req, res) => {

    },

}