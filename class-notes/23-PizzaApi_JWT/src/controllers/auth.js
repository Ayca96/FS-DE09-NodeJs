"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const passwordEncrypt = require("../helpers/passwordEncrypt");
const User = require("../models/user");
const Token = require('../models/token')
const jwt = require('jsonwebtoken')
module.exports = {

    login: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "aA?123456",
                }
            }
        */

        const { userName, password, email } = req.body

        if (!((userName || email) && password)) {
            res.errorStatusCode = 401;
            throw new Error("UserName/Email and Password required!")
        }

        const user = await User.findOne({ $or: [{ userName }, { email }] })

        if (user?.password !== passwordEncrypt(password)) {
            res.errorStatusCode = 401;
            throw new Error("Incorrect username/email or password.");
        }

        if (!user.isActive) {
            res.errorStatusCode = 401;
            throw new Error("This account is not active.");
        }


            /* Simple token */

        let tokenData = await Token.findOne({ userId: user._id });

        if (!tokenData) {
            tokenData = await Token.create({
                userId: user._id,
                token: passwordEncrypt(user._id + Date.now()),
            });
        }

         /* Simple token */

         /* jwt */
  
         //Access Token
            //const {_id, userName,email,isActive,isAdmin}= user


            const accessData = {
                _id:user._id,
                userName:user.userName,
                email:user.email,
                isActive:user.isActive,
                isAdmin:user.isAdmin

            }

        // convert to jwt 

        //jst.sign(payload,key,{expireIn:3m})
        const accessToken = jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn:'30m'})

        // refreshToken

        const refreshData ={
            _id:user._id,
            password:user.password
        }


        // convert to jwt

        const refreshToken= jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn:'1d'})


         
        /*jwt  */



        res.send({
            error: false,
            token: tokenData.token,
            user,
        });



    },
    logout: async (req, res) => {
       /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "simpleToken: Logout"
            #swagger.description = 'Delete token key.'
        */

        const auth = req.headers?.authorization; //"Token fgdgfhg623gjhbksj"
        const tokenKey = auth ? auth.split(" ") : null; // [ "Token", tokenKey]
        const result = await Token.deleteOne({ token: tokenKey[1] });

        res.send({
            error: false,
            message: 'Token deleted.',
            result
        })

    },
}