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

// const Car = {
//      brand: 'Mercedes',
//      model: 'S500',
//      year: 2020,
//      isAutoGear: true,
//      colors: ['Blue', 'Black'],
//      engine:{
//      cylinderCounts:8,
//      hp:100,
//    },
//      startEngine: function(){
//          return 'engine started'
//      },
//      stopEngine: function(){
//        return 'engine stopped'
//    },

//    detailFunction: function(){
//    // console.log(this);
//     return this.brand
    
// },

// //! arrow Function global scope this i tanimiyor.
// arrowMethod: () =>{
//   return this
// }
  
//  }

//  console.log(Car.detailFunction());
//  console.log(Car.arrowMethod());
 

 //? Array destructing

 const sampleArray=['val1','val2','val3','val4','val5'];
//  const v1=sampleArray[0];
//  const v2=sampleArray[1];
//  const v3=sampleArray[2];
//  const v4=sampleArray.slice(2,3);

//  console.log(v1);
//  console.log(v4);


 const [v1,v2, ...vN]=sampleArray;
 // rest operator  toplayici esitligin solunda oluyor
 console.log(vN);


 // spread operator dagitici esitligin saginda oluyor

 const newArray = ['valx','valy',...sampleArray]
 console.log(newArray);
 
 
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
 
}, //function expression

}

// rest

const {brand:marka,model,year, ...others}=Car // rest operatöründe objedeki siralamanin önemi yok.

console.log(marka);
console.log(year,marka,model,others);
//=> rest operatörü, bir nesne veya dizi içindeki kalan elemanları veya özellikleri toplayarak yeni bir nesne veya dizi oluşturmanıza olanak tanır.

// Mercedes
// 2020 Mercedes S500 {
//   isAutoGear: true,
//   colors: [ 'Blue', 'Black' ],
//   engine: { cylinderCounts: 8, hp: 100 },
//   startEngine: [Function: startEngine],
//   stopEngine: [Function: stopEngine],
//   detailFunction: [Function: detailFunction]
// }


// spread operatör
 /* const newCar={
  ...Car,
  oilType:'gas',
 }

 console.log(newCar); */

// object to Json

// const jsonCar=JSON.stringify(Car)
// console.log(jsonCar);
// console.log(typeof jsonCar);
// console.log(typeof Car);


// // Json to object

// const objCar=JSON.parse(jsonCar)
// console.log(objCar);

// // object to array 
// const arrayKeys=Object.keys(Car)
// console.log(arrayKeys);
// const arrayValues=Object.values(Car)
// console.log(arrayValues);
// const arrayAll=Object.entries(Car)
// console.log(arrayAll);


// Construction  => constructor function (yapıcı fonksiyon) kullanarak nesneler (objeler) oluşturuyorsunuz. Yapıcı fonksiyonlar, belirli bir yapı ve özelliklere sahip yeni nesneler oluşturmak için kullanılır

const constructionFunction=function(){
  this.property='value'
}

const carConstruction=function(brand,model,year){
  this.brand=brand,
  this.model=model,
  this.year=year,
  this.startEngine= function(param){
      return (param)
  }
}

const newCar1=new carConstruction('Volswagen','passat',2024)
// console.log(typeof newCar1, newCar1);
 console.log(newCar1.startEngine('Tesla'));
  

const newCar2=new carConstruction('Audi','A4',2023)
console.log(newCar2.startEngine('Mercedes'));



