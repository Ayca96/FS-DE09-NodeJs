'use strict'

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/


const {Schema, model} = require('mongoose')

const crypto = require('node:crypto')
// Parameters:
//const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı.
const keyCode = '21yuifhsdkjfgisafisadhfsgawfhssvsfifashfusagfjsdga' // secretKey 
const loopCount = 10000 // Döngü sayısı
const charCount = 32 // write 32 for 64
const encType = 'sha512' // Şifreleme algoritması.
// Return encrypted password:
const passwordEncrypt = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

const UserSchema = new Schema ({

 email:{
  type:String,
  trim:true,
  unique:true,
  required:[true, "Email is required!"],
//   validate:()=>{
//     if(email.includes('@') && email.includes('.'))
// { 
//     return true
//   }else {
//     return false
//   }
//   },

  // validate: (email)=> (email.includes('@') && email.includes('.'))

  validate:[(email)=> (email.includes('@') && email.includes('.')), "Email type is incorrect"]

},
password: {
  type: String,
  trim: true,
  // required: true,
  required: [true, 'Password is required.'],
  /* ------------------------------------------------------- *

        set: (password) => {
            return 'customPassword'
        },
        validate: (password) => {
            if (password.length < 5) return false
            else true
        },

        /* ------------------------------------------------------- *

        set: (password) => { // set runs before validate
            if (password.length < 5) {
                // throw new Error('Invalid Password!') // Syntax Error
                return 'InvalidPassword'

            } else {
                return passwordEncrypt(password)
            }
        },
        validate: (password) => {
            if (password === 'InvalidPassword') {
                return false
            } else {
                return true
            }
        }
        /* ------------------------------------------------------- */
  set: (password) => (password.length >= 8 ?  passwordEncrypt(password) : 'wrong'),
  validate: (password) => (password != 'wrong') // Güncelleme yaparken default olarak validate çalışmaz. // { runValidators: true }
},

 userName:{
  type:String,
  trim:true,
  unique:true,
  required:true

 },

 firstName:String,

 lastName:String,


}, 

{

  collection:'users',
  timestamps:true
})

module.exports = model('User', UserSchema)



// model ismi her zaman büyük harfle baslar.