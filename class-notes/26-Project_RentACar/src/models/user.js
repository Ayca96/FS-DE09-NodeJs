"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const emailValidation = require("../helpers/emailValidation");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const uniqueValidator = require("mongoose-unique-validator");
// User Model:
const UserSchema = new mongoose.Schema(
  {
    username: {
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
      // select:false
    },

    email: {
      type: String,
      trim: true,
      required: [true, "An Email address is required"],
      unique: [true, "There is this email. Email field must be unique"],
      validate: [
        (email) => emailValidation(email),
        "Email format is not valid",
      ],
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
  },
  { collection: "users", timestamps: true },
);

UserSchema.plugin(uniqueValidator, {
  message: "This {PATH} is exist",
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);

//Mongoose'da bir şema tanımlarken unique: true özelliği kullanılır. Ancak, bu özellik aslında bir doğrulama (validation) sağlamaz; yalnızca MongoDB seviyesinde bir benzersizlik dizini (unique index) oluşturur. mongoose-unique-validator, bu eksikliği tamamlar ve uygulama seviyesinde benzersizlik doğrulaması sağlar. Yani, aynı benzersiz değeri kaydetmeye çalıştığınızda hata döndürür.

// Kullanıcı dostu hata mesajları sağlar.
// Aynı benzersiz anahtarla birden fazla belge eklenmesini önler.
// Doğrulama sürecini hem uygulama seviyesinde hem de veritabanı seviyesinde daha güvenilir hale getirir.