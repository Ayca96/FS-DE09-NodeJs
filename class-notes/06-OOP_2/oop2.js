'use strict'

/*

OOP Classes

*/

//? Class Expression

// const PascalCaseName = class {
//   ...
// }

//? Class Decleration tercih edilen

class PascalCaseName {
  
 // propertyName // deger verilem zorunda degil undefined olur.
  propertyName='value'
  // method basina function yazilmaz.



  methodName (){
    return 'this is method'
  }
}

// class tan bir obje üretimine 'instance' denir

const NewInstance = new PascalCaseName() // yeni instance üretimi
console.log(NewInstance);
console.log(NewInstance.methodName ());


//* constructor yapici

// class Car{
//   isRunning=false
//   //brand='noname'
//   constructor ( brand,model,year) {
//     this.brand=brand,
//     this.model=model,
//     this.year=year
//   }
//   runEngine(){
//     this.isRunning=true
//     return this.isRunning

//   }
// }

// const Opel=new Car('Opel','Corsa','2020')
// console.log(Opel); 

// Ayni isimde birden fazla method olusturulabilir fark aldigi parametreler. AMA JS BUNU DESTEKLEMIYOR.

/*console.log(Opel.runEngine());

const Mercedes = new Car ('Mercedes', 'E200', 2023)

console.log((Mercedes));
console.log(Mercedes.runEngine()); */

//? Inheritance = Miras Alma 'vererben'

// Baska bir class in sahip oldugu her seyi aliyor + kendi sahip olduklari

class Vehicle{
  isActive=false
  seatCount=5
  hp
  constructor (vehicleType){
    this.vehicleType=vehicleType
  }
}

class Car extends Vehicle{
  isRunning=false
  
  //brand='noname'
  constructor ( brand,model,year=1900,vehicleType) {
    super(vehicleType)
    this.brand=brand,
    this.model=model,
    this.year=year
  }
  runEngine(){
    this.isRunning=true
    return this.isRunning

  }
}

const Mercedes = new Car ('Mercedes', 'E200', 2023, 'Car')

//console.log((Mercedes));
// console.log(Mercedes.runEngine()); 

class Track extends Vehicle{
  isRunning=false
  maxCapacity
  //brand='noname'
  constructor ( brand='noname',model,year=1900,vehicleType) {
    super(vehicleType)
    this.brand=brand,
    this.model=model,
    this.year=year
  }
  runEngine(){
    this.isRunning=true
    return this.isRunning

  }
}

class Accessory extends Car{
constructor(accessoryName,brand,model,year,vehicleType){
  super(brand,model,year,vehicleType)
  this.accessoryName=accessoryName
}
}

const Seat= new Accessory('Leader', 'Audi', 'Q8', 2022, 'Car')
console.log(Seat);

// POLYMORPHISM

