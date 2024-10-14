'use strict'
/* 
OOP
*/

// Obje isimlendirmede PascalCase/ camelCase

// const sampleObject={
//   // property/attribute/field
//   propertyName:'value',
//   propertyArray:[],
//   propertyObje:{},

//   // function=method

//   methodName:function(){
//     return 'this is method'
//   },

//   // or
//   methodName2:function(){
//     return 'this is method'
//   }
// }
// //obje property cagirma

// console.log(sampleObject.propertyName);
// console.log(sampleObject.methodName());

// // example object

// const Car = {
//   brand: 'Mercedes',
//   model: 'S500',
//   year: 2020,
//   isAutoGear: true,
//   colors: ['Blue', 'Black'],
//   engine:{
//   cylinderCounts:8,
//   hp:100,
// },
//   startEngine: function(){
//       return 'engine started'
//   },
//   stopEngine: function(){
//     return 'engine stopped'
// },


// }

// // . dot notation

// console.log(Car.brand);
// console.log(Car.colors);
// console.log(Car.colors[0]);
// console.log(Car.engine);

// console.log(Car.startEngine());

// // bracket notation []

// console.log(Car['brand']);
// console.log(Car['colors'][0]);
// console.log(Car['stopEngine']()); 

//Burada "stopEngine" metodu string olarak belirtildiği için dinamik bir şekilde erişim sağlanır. Tırnaklar olmadan Car[stopEngine] yazarsan, JavaScript stopEngine'i bir değişken olarak arar. Eğer böyle bir değişken tanımlı değilse hata verir.

// Köşeli parantezde tırnak kullanmak, özelliğin adını bir string olarak belirtir ve bu, özellikle dinamik olarak özelliklere erişmek istediğimizde veya geçerli bir JavaScript tanımlayıcısı olmayan özelliklere erişirken gereklidir.

//todo   This keyword
// icinde bulundugu objeyi ifade eder

const Car = {
     brand: 'Mercedes',
     model: 'S500',
     year: 2020,
     isAutoGear: true,
     colors: ['Blue', 'Black'],
     engine:{
     cylinderCounts:8,
     hp:100,
   },
     startEngine: function(){
         return 'engine started'
     },
     stopEngine: function(){
       return 'engine stopped'
   },

   detailFunction: function(){
   // console.log(this);
    return this.brand
    
},

//! arrow Function global scope this i tanimiyor.
arrowMethod: () =>{
  return this
}
  
 }

 console.log(Car.detailFunction());
 console.log(Car.arrowMethod());
 