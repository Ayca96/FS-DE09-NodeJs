"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */


const crypto = require('node:crypto')
// Parameters:
//const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı.
// const keyCode = process.env.KEY_CODE // secretKey 
// const loopCount = Number(process.env.LOOP_COUNT)
// //console.log(loopCount);// Döngü sayısı
// const charCount = Number(process.env.CHAR_COUNT) // write 32 for 64
// const encType = process.env.ENC_TYPE // Şifreleme algoritması.


const keyCode ="988a30566cec80ac2fd5a9e35f9b89ba3c5b7f4befc5660dd7d0cd4878332181c7d9ad075b2b86fd12120760979cf6621a61adf2097c8b12452ebbb07bf9316a"
const loopCount = 10_000 // number of loops
const charCount = 32 // write 32 for 64
const encType = 'sha512' // Type of algorithm

// Return encrypted password:
// const passwordEncrypt = function (password) {
//     return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
// }

module.exports = function (password) {
  return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

//module.exports = passwordEncrypt