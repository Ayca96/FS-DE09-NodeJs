'use strict'

/*---------------------------------------

          Error Handling in NodeJS
---------------------------------------*/

/*

npm init -y
npm install express dotenv
echo PORT=8000 > .env  (terminalden .env dosyasi aciyoruz.)
cat > .gitignore (kopyalanan gitinore verilerini terminale yapistir ve sonra ctrl+c ile cikis yap. terminalden böylece gitignore olusturmus oluyoruz.)
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>console.log(`Running at : http://127.0.0.1:${PORT}` ))