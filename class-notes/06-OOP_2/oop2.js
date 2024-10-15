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


//* constructor

class Car{
  isRunning=false
  //brand='noname'
  constructor ( brand,model,year) {
    this.brand=brand,
    this.model=model,
    this.year=year
  }
  runEngine(){
    this.isRunning=true
    return this.isRunning

  }
}

const Opel=new Car('Opel','Corsa','2020')
console.log(Opel);

// Ayni isimde birden fazla method olusturulabilir fark aldigi parametreler. AMA JS BUNU DESTEKLEMIYOR.

console.log(Opel.runEngine());

