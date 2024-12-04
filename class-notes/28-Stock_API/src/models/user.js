"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: [true, "An Email address is required"],
      unique: [true, "There is this email. Email field must be unique"],
      index: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    // role:{
    //     type:String,
    //     enum:['client','staff','admin', 'superAdmin']
    // },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) { // database kaydetmeden hemen önce calisir.
//console.log("Pre-save run!");
 //console.log(this);

 const data = this;

 //Email Control with Regex:

 const isEmailValidated= data.email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) : true

 if(!isEmailValidated){
 // throw new Error('Email is not validated')
 next(new Error('Email is not validated')) // ErrorHandler middleware ine yönlendirmek icin kullaniyoruz.
 }
 
  next();
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
