"use strict"
/* -------------------- NodeJS -------------------- */

// Official: https://nodejs.org
// Documents: https://nodejs.org/api

/* -------------------- Node Shell -------------------- */

// $ node
// > console.log('Hello World')
// > let moduleName = require("module")
// > moduleName.builtinModules // Show included modules.
// > .exit // > process.exit()

/* -------------------- NodeJS -------------------- */

let node = 'NodeJS'

console.log(`------*------
  ${node}    
------*------ 
Kodda  yaptigimiz her bir degisikligi aninda görmek istiyorsak nodemon paketini kullanabiliriz.`);

/* -------------------- node -------------------- */

// $ node index.js
// $ node index
// $ node . # default: index.js

/* -------------------- nodemon -------------------- */

// $ nodemon index.js
// $ Ctrl + C 
// $ nodemon # default: index.js
// $ Ctrl + C 

/* -------------------------------------------- */


//npm install komutu, package.json dosyasında belirtilen bağımlılıkları indirir. Eğer package.json dosyasında bağımlılıklar (dependencies veya devDependencies) tanımlı değilse, node_modules klasörü oluşturulmaz.!!!