'use strict'

/* ******** */ 
// require('./modules/index.js')
// require('./modules/index')

require('./modules')  // require =import gibi.
// dosya index ise özellikle yazmaya gerekte yok. index default olarak gelir. baska dosya bile olsa indexi baz alir.

/* ------------------------------------- */


/*
const test = require ('./modules/index.js')
test ()

require('./modules') ()


*/

/*

const arrayFunc = require ('./modules/index')

arrayFunc[0]()

arrayFunc[1]()

arrayFunc[2]()

*/


/*
//Array Destructuring
const [test1,test2,test3] = require ('./modules/index')

test1()
test2()
test3()

// Arraylerde index oldugu icin ayni sirayla destructuring yapmak zorundayiz

*/

/*
const objFunc = require ('./modules/index')
objFunc.test1();
objFunc.test2();
objFunc.test3();

*/
// Object Destucturing
const{test2,test1,test3}=require('./modules/index')
test1()
test2()
test3()
// objelerde index olayi olmadigi icin sira önemli degil.

const name = require('./modules/index')
console.log(name);


/* ----------------------------------------- */


console.log('this is module.js');
