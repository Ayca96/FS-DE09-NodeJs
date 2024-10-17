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

const name='Ömer'

// module.exports = [test1,test2,test3] 

// birden fazla degiskeni ,fonksiyonu array veya obje seklinde export edebiliriz.


module.exports = {test1,test2,test3,name} // birden fazla seyi bu sekilde export edebiliriz.

// key ve value isimleri ayni ise sadece yukardaki gibi tek isim yazabiliriz. Asagidaki gibi tekrar tekrar yazmaya gerek yok.

// module.exports = {test1:test1,test2:test2,test3:test3} 

//module.exports = name

// bir sayfa da sadece 1 tane module.exports olabilir. yoksa syntax hatasi aliriz.en son yazilani kabul eder ve hata verir.