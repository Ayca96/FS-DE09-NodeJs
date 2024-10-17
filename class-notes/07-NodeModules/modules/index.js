'use strict'

/* *************** */
console.log('hey this is from module folder');

/* 

function test(){
  console.log('this is test function');

}

module.exports= test

*/




function test1(){
  console.log('this is test1 function');
}

function test2(){
  console.log('this is test2 function');
}

function test3(){
  console.log('this is test3 function');
}

// module.exports = [test1,test2,test3] 

// birden fazla fonksiyonu array veya obje seklinde export edebiliriz.


module.exports = {test1,test2,test3} 

// key ve value isimleri ayni ise sadece yukardaki gibi tek isim yazabiliriz. Asagidaki gibi tekrar tekrar yazmaya gerek yok.

// module.exports = {test1:test1,test2:test2,test3:test3} 