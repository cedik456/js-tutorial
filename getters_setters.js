// GETTERS AND SETTERS
 
// class Rectangle{

//   constructor(width, height){
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth){
//     if(newWidth > 0){
//       this._width = newWidth;
//     }
//     else{
//       console.error(`Width must be a possitive number`);
//     }
//   }

//   set height(newHeight){
//     if(newHeight > 0){
//       this._height = newHeight;
//     }
//     else{
//       console.error(`Height must be a postive number`);
//     }
//   }

//   get width(){
//     return `${this._width.toFixed(1)}cm`;
//   }

//   get height(){
//     return `${this._height.toFixed(1)}cm`;
//   }

//   get area(){
//     return `${(this._width * this._height).toFixed(1)}cm`;
//   }
// }

// const rectangle = new Rectangle(4, 5);

// rectangle.width = 10;
// rectangle.height = 10;


// console.log(rectangle.width);
// console.log(rectangle.height);

// console.log(rectangle.area);

// Define a simple class

// class Car {
//   constructor(make, model, year) {
//     this.make = make;     // Public property
//     this.model = model;   // Public property
//     this.year = year;     // Public property
//     this._mileage = 0;    // Private property
//   }

//   // Getter and setter for mileage (private property)
//   get mileage() {
//     return this._mileage;
//   }

//   set mileage(newMileage) {
//     if (newMileage >= 0) {
//       this._mileage = newMileage;
//     } else {
//       console.error('Mileage cannot be negative');
//     }
//   }

//   // Method to drive the car (updates mileage)
//   drive(distance) {
//     this._mileage += distance;
//     console.log(`You drove ${distance} miles.`);
//   }
// }

// // Create an instance of the Car class
// const myCar = new Car('Toyota', 'Camry', 2020);

// // Accessing and modifying public properties
// console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}`);
// myCar.year = 2022;
// console.log(`After a year, my car is now a ${myCar.year} ${myCar.make} ${myCar.model}`);

// // Accessing and modifying private property using getter and setter
// console.log(`Current mileage: ${myCar.mileage} miles`);
// myCar.drive(100);
// console.log(`Updated mileage: ${myCar.mileage} miles`);
// myCar.mileage = 5000; // Using setter to modify private property
// console.log(`New mileage set: ${myCar.mileage} miles`);

// class Person{

//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName){
//     if(typeof newFirstName === "string" && newFirstName.length > 0){
//       this._firstName = newFirstName;
//     }
//     else{
//       console.error(`Your first name must be a non-empty string`);
//     }
//   }

//   set lastName(newLastName){
//     if(typeof newLastName === "string" && newLastName.length > 0){
//       this._lastName = newLastName;
//     }
//     else{
//       console.error(`You last name must be a non-empty string`);
//     }
//   }

//   set age(newAge){
//     if(typeof newAge === "number" && newAge > 0){
//       this._age = newAge;
//     }
//     else{
//       console.error(`Your age must be a non-negative number`)
//     }
//   }

//   get firstName(){
//     return this._firstName;
//   }

//   get lastName(){
//     return this._lastName;
//   }

//   get age(){
//     return this._age;
//   }
// }

// const person = new Person("Cedric", "Nano", 22);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);