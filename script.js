/* let p1 = "Alenere";
let p2 = "David";

let gender = "she";
let drinks = "coffee"; */

// const { id } = require("prelude-ls");

// const { even } = require("prelude-ls");

// const { values } = require("prelude-ls");

// const { values } = require("prelude-ls");

// const { values } = require("prelude-ls");

// const { reject, values } = require("prelude-ls");
// const { resolve } = require("uri-js");

// const { even } = require("prelude-ls");

// const { even } = require("prelude-ls");

// const { even } = require("prelude-ls");

// const { even } = require("prelude-ls");

// import { yellow } from "color-name";

// import { create } from "file-entry-cache";

// const { max } = require("prelude-ls");

// const { cos } = require("prelude-ls");

// const { words, words } = require("prelude-ls");



// const { last } = require("prelude-ls");

// const { last } = require("prelude-ls");

// const { last } = require("prelude-ls");

/* let output = `${p1},  the friendly neighbor, waved at ${p2} as ${gender} walked by ${p2}'s house. ${p2} smiled back and invited ${p1} in for a cup of ${drinks}`;

document.getElementById("text").innerHTML = output;
 */
/* document.getElementById is sensitive, (``) */

//alert(p1 + ", the friendly neigbor, waved at " + p2 + " as " + gender + " walked by " + p2 +"'s" + " house. " + p2 + " smiled back and invited " + p1 + " in for a cup of " + drinks + ".");

//parseInt
//pasrseFloat

/* let math = 97;
let english = 97;
let science = 98;
let filipino = 94;
let ap = 96;

let average = (math + english + science + filipino + ap) / 5;

alert(average); */

/* let x = " Hello ";

y = x.trim();

alert(y.length);
 */

/* let s = "I have a dog, my dog is super cute";

s = s.slice(9, 12);

alert(s); */

/* let num1 = 5;
let num2 = 3;

let sum = num1 + num2;

alert(`${num1} + ${num2} = ${sum+num1}`); */

// STRING LITERALS -----------------------------------

/* let p1 = "Kynesha";
let p2 = "Cedric";

let pronoun = "she";

let drink = "iced tea";

alert(`${p1}, the friendly neighbor, waved at ${p2} as ${pronoun} walked by ${p2}'s house. ${p2} smiled back and invited ${p1} in for a cup of ${drink}.  `); */

/* let names = ["Cedric", "Lawrence", "Nano"];

alert(names[0]); */

//ARRAYS -----------------------------------------

/* let firstName = ["Cedric", "Charles", "Emman", "Christian"];
let lastName = ["Nano", "Alamares", "Espena" , "Dacillo"];
let age = [14, 22, 16, 23];

let id = 3;


console.log(`Id : ${id}`);
console.log(`First Name : ${firstName[id]}`);
console.log(`Last Name : ${lastName[id]}`);
console.log(`Age : ${age[id]}`); */

//If STATEMENT

//let grade = 100;

/* if(grade > 100 ){
  console.log("Invalid Grade")
}else if( grade >= 98  ) {
  console.log("With Highest Honor")
}else if (grade >= 95) {
  console.log("With High Honor")
}else if (grade >= 90) {
  console.log("With Honor")
}else if (grade >= 75) {
  console.log("Passed")
}else {
  console.log("Failed")
} */

/* 
if(grade < 75){
  console.log("Failed")

}else if ( grade <= 89) {
  console.log("Passed")

}else if (grade <= 94) {
  console.log("With Honor")

}else if (grade <= 97) {
  console.log("With High Honor")

}else if (grade <= 100) {
  console.log("With Highest Honor")
  
}else {
  console.log("Invalid Grade")
}

average = grade / 1;
console.log(`Your average grade is: ${average}`); */

//lOGICAL OPERATORS

/* let age = 20;
let isRegistered = true;

if(isRegistered && age >= 18)
  console.log("Valid Voter");

}else if (!isRegistered  && age >= 18 ) {
  console.log("Register First");

}else if (isRegistered  && age < 18 ) {
  console.log("Invalid Voter");

}else if (!isRegistered && age < 18 ) {
  console.log("Non Voter");
} */

//SWITCH

/* let num = 10;

switch(num){
  case 2:
  case 4:
    alert("Even");
    break;

  case 3:
  case 5:
    alert("Odd");
    break;

  default:
    alert("Unknown")
    break;

} */

/* let letter = "a";

switch(letter){
  case "a":
  case "A":
    alert("Apple");
    break;

  case "b":
  case "B":
    alert("Ball");
    break;

  default :
  alert("Invalid Letter");
  break;

} */

/* let day = 7;

switch(day){
  case 1:
    alert("Monday");
    break;

  case 2:
    alert("Tuesday");
    break;

  case 3:
    alert("Wendesday");
    break;

  case 4:
    alert("Thursday");
    break;

  case 5:
    alert("Friday");
    break;

  case 6:
    alert("Saturday");
    break;

  case 7:
    alert("Sunday");
    break;

  default:
    alert("Invalid Day");
    break;

} */

//WHILE & DO WHILE LOOP

/* let names = ["Cedric", "Charles", "James", "Emman", "Majo", "Chan"];
let i = 0;
let search = "Chan";


while(names[i]) {
  if(names[i] === search){
    console.log(`Your name is ${names[i]}`)
    break;

  }
  i++ ;
} */

/* let i = 6;

do{
  console.log("Hello");
  i++;

}while(i < 5);
 */

/* let numbers = [10, 20, 30, 40, 50, 60];
let sum = 0;
let i = 0; 


while(numbers[i]){
  sum += numbers[i]; 
  i++;

}

console.log("The sum is : " + sum); */

/* 
let grades = [90, 89, 94, 98, 99];

let i = 0;
let sum = 0;


while(grades[i]){
  sum += grades[i];
  i++;

}

let average = sum /5;




console.log(`The sum of your grades is: ${sum} `);
console.log(`The average of your grade is: ${average}`); */

//FOR LOOP

/* let names = ["Cedric", "Charles", "Emman", "Majo"];
let search = "cedric";
let isFound = false;



for(let people of names) {
  
  if (people.toLowerCase() === search.toLowerCase()){
    isFound = true;
    console.log(`Found ${people}`);
    break;
  }

  
}

  if(!isFound)
    console.log("Not Found"); */


//JSON (JAVASCRIPT OBJECT NOTATION)

// let people = [
//   {
//     firstName: "Cedric",
//     middleName: "Dino",
//     lastName: "Nano"
//   },

//   {
//     firstName: "Charles",
//     middleName: "Marfil",
//     lastName: "Alamares"
//   },

//   {
//     firstName: "Emman",
//     middleName: "Eadasd",
//     lastName: "Espena"
//   }
    
// ];



// for (let i = 0; i < people.length ; i++) {
//   console.log(`First name: ${people[i].firstName}`);
//   console.log(`Middle name: ${people[i].middleName}`);
//   console.log(`Last name: ${people[i].lastName}`);

// }


// let grade = {
//   English: 95,
//   Math: 90,
//   Science: 94,
//   Filipino: 93,
//   PE: 90,
//   Programming: 80
// };

// let sum = 0;


// for(let keys in grade){
//   console.log(`${keys}:${grade[keys]}`);
//   sum += grade[keys];

// }

// let subject = Object.keys(grade).length;
// let average = sum / subject;

// console.log("")
// console.log(`Average : ${average}`);


// let name = "Cedric";
// let price = 10.22;
// let age = 22;
// let isCoding = true;


// console.log(`Price : $${price}`)
// console.log(`Sold : ${sold}`)


// document.getElementById('text').textContent = name;
// document.getElementById('p1').textContent = `Age : ${age}`;
// document.getElementById('p2').textContent = `Coding at the moment : ${isCoding}`;

// let students = 30;

// students **= 2;

// console.log(students);

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

//INSERTING AN INPUT -----------

// let username;

// document.getElementById('mySubmit').onclick = function(){
//   username = document.getElementById('myText').value;
  
//   document.getElementById('myH1').textContent = `Welcome ${username}`;
// }

//TYPE OF -----------

// let x = "Cedric";
// let y = "Cedric";
// let z = "Cedric";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//USING CONST VARIABLE -------

// const pi = 3.14159;
// let radius;
// let circumference;


// document.getElementById('myButton').onclick = function(){
//   radius = document.getElementById('myText').value;
//   radius = Number(radius);
//   circumference = 2 * pi * radius;

//   document.getElementById('myH1').textContent = circumference + "cm";

// }

//COUNTER PROGRAM --------

// const increaseBtn = document.getElementById('increaseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const decreaseBtn = document.getElementById('decreaseBtn');
// const countLabel = document.getElementById('countLabel'); 

// let count = 0;

// increaseBtn.onclick = function() {
//   count++;
//   countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//   count--;
//   countLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//   count = 0;
//   countLabel.textContent = count;
// }

// JAVASCRIPT MATH -----------------


// let x = 9;
// let y = 3;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.trunc(x);
// x = Math.pow(y, x);
// x = Math.sqrt(x);
// x = Math.log(x, y);
// x = Math.sin(x);
// x = Math.cos(x);
// x = Math.tan(x);
// x = Math.sign(x);

// let max = Math.max(x,y);
// let min = Math.min(y,x);

// console.log(max);

// RANDOM NUMBER GENERATOR -----------------------

// const min = 1;
// const max = 100;

// let randonNum = Math.trunc(Math.random() * (max - min) + min);

// console.log(randonNum);

// const myButton = document.getElementById('myButton');
// const label1 = document.getElementById('label1');
// const label2 = document.getElementById('label2');
// const label3 = document.getElementById('label3');
// const min = 1;
// const max = 100;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//   randomNum1 = Math.trunc(Math.random() * max) + min;
//   randomNum2 = Math.trunc(Math.random() * max) + min;
//   randomNum3 = Math.trunc(Math.random() * max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// }

// IF STATEMENTS ------------------------

// const myText = document.getElementById('myText');
// const mySubmit = document.getElementById('mySubmit');
// const resultElement = document.getElementById('resultElement');

// let age;

// mySubmit.onclick = function(){

//   age = myText.value;
//   age = Number(age);


//   if (age >= 500) {
//     resultElement.textContent = `You are dead`;
//   }
//   else if (age >= 100){
//     resultElement.textContent = `You are TOO OLD for this site`
//   }
//   else if (age == 0) {
//     resultElement.textContent = `You cant enter. You were just born`
//   }

//   else if(age >= 18){
//     resultElement.textContent = `You are allowed to enter this site`
//   }
//   else {
//     resultElement.textContent = `Your age can't be below zero`
//   }

// }

//CHECKBOX --------------------


// const checkBox = document.getElementById('checkBox');
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const payPalBtn = document.getElementById('payPalBtn');
// const submit = document.getElementById('submit');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');

// submit.onclick = function(){

//   if(checkBox.checked){
//     subResult.textContent = `You are subscribed`
//   }
//   else {
//     subResult.textContent = `You are NOT subscribed`
//   }

//   if(visaBtn.checked){
//     paymentResult.textContent = `You are paying with Visa`
//   }
//   else if(masterCardBtn.checked){
//     paymentResult.textContent = `You are paying with MasterCard`
//   }
//   else if(payPalBtn.checked){
//     paymentResult.textContent = `You are paying wtih PayPal`
//   }
//   else {
//     paymentResult.textContent = `You need to select a payment method`
//   }
// }

//TERNARY OPERATOR 

// let purchaseAmount = 100;

// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is : $${purchaseAmount - purchaseAmount * (discount/100)}`); 

//SWITCH 

// let testScore = 60;
// let gradeLet;

// switch(true){
//   case testScore >= 90:
//     gradeLet = 'A';
//     break;
//   case testScore >= 80:
//     gradeLet = 'B';
//     break;
//   case testScore >= 70:
//     gradeLet = 'C';
//     break;
//   case testScore >= 60:
//     gradeLet = 'D';
//     break;
//   case testScore >= 50:
//     gradeLet = 'E';
//     break;
//   default:
//     gradeLet = 'F';
// }

// console.log(gradeLet);

//METHOD CHAINING ----------------------

// let username = window.prompt("Enter your username: ");


// username = username.trim();

// let words = username.split(" ");

// let formattedUserName = words.map(words => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()).join(" ");

// console.log(formattedUserName);

// DO WHILE LOOP ---------------------------------------

// let loggedIn = true;
// let username;
// let password;

// while(!loggedIn){
//   username = window.prompt("Enter you username");
//   password = window.prompt("Enter you password");

//   if(username === "cedik456" && password === "54321"){
//     loggedIn = true;
//     console.log("Succesfully logged in");

//   }
//   else{
//     console.log("Invalid Credentials! Please try again");
//   }

// }

// FOR LOOP --------------------------

// for(i = 1; i <= 20; i++){
  
//   if(i == 10){
//     continue;
//   }
//   else{
//     console.log(i);
//   }

// }

// console.log("Happy Birthday!");
 

//NUMBER GUESSING GAME -------------------------

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//   guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
//   guess = Number(guess);

//   if(isNaN(guess)){
//     window.alert("Please enter a valid number");
//   }
//   else if(guess < minNum || guess > maxNum){
//     window.alert("Please enter a valid number");
//   }
//   else{
//     attempts++;

//     if(guess < answer){
//       window.alert("Too low!");
//     }
//     else if(guess > answer){
//       window.alert("Too High!");
//     }
//     else{
//       window.alert(`You are correct! The correct answer is ${answer}. It took you ${attempts} attempts`);
//     }
//   }
// }

//FUNCTIONS ------------------

// function add(x, y){
//   return x + y;
// }

// function divide(x, y){
//   return x / y;
// }

// function multiply(x, y){
//   return x * y;
// }

// function subtract(y,z) {
//   return y - z;
// }

// console.log(subtract(10, 3));

// function isEven(number){
//   if(number % 2 === 0){
//     console.log("The number is even");
//     return;
//   }
//   console.log("The number is odd");
// }

// isEven(10);

// function isValid(email){

//   if(email.includes("@")) {
//     console.log(`${email} is an available email`);
//     return;
//   }
//   console.log("This email is not available");
// }


// ``
// console.log(isValid("kine@gmail.com"));

// TEMPERATURE CONVERTER

// const textBox = document.getElementById('textBox');
// const toFarenhiett = document.getElementById('toFarenhiett');
// const toCelcius = document.getElementById('toCelcius');
// const submit = document.getElementById('submit');
// const result = document .getElementById('result');

// let temp;


// function convert() {

//   if(toFarenhiett.checked){
//     temp = Number(textBox.value);
//     temp = temp * 9 / 5 + 32;
//     result.textContent = `${temp.toFixed(1)}°F`;

//   }
//   else if(toCelcius.checked){
//     temp = Number(textBox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = `${temp.toFixed(1)} °C`;
//   }
//   else {
//     result.textContent = "Please select a conversion type";
//   }

// }

//ARRAYS ------------------------

// let proteinFoods = ["Chicken Breast", "Eggs", "Tofu", "Fish"];

// let index = proteinFoods.indexOf("Eggs");

// console.log(index);

// DICE ROLL ------------------------------------

// function rollDice(){
  
//   const numOfDice = document.getElementById('numOfDice').value;
//   const diceResult = document.getElementById('diceResult');
//   const diceImages = document.getElementById('diceImages');

//   const values = [];
//   const images = [];

//   for(let i = 0; i < numOfDice; i++){
//     const value = Math.floor(Math.random() * 6) + 1;
//     values.push(value);
//     // images.push(`<img src="`)
//   }

//   diceResult.textContent = `dice: ${values.join(" ")}`;
// }

// RANDOM PASSWORD GENERATOR -----------------------



// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const UppdercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()_+=-";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowercase ? lowercaseChars : "";
//   allowedChars += includeUppercase ? UppdercaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if(length <= 0){
//     return `(Password length must be at least 1)`;
//   }
//   if(allowedChars.length === 0){
//     return `(At least 1 set of characters needs to be selected)`;
//   }

//   for(i = 0; i < length; i++){
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password +=  allowedChars[randomIndex];
    
//   }

  
//   return password;
// }


// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password =  generatePassword(passwordLength,
//                                    includeLowercase,
//                                    includeUppercase,
//                                    includeNumbers,
//                                    includeSymbols);

// console.log(`Generated password: ${password}`)


// CALLBACK ------------------------------------------

// sum(displayPage, 5,10);

// function sum(callback, x, y ){
//   let result = x + y;
//   callback(result);
// }

// function displayPage(result){
//   document.getElementById("myH1").textContent = result;
// }

// FOR EACH WITH CALLBACK ---------------------------------



// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function display(element){
//   console.log(element);
// }

// function double(element, index, array){
//   array[index] = element  * 2;
// }

// function triple(element, index, array){
//   array[index] = element  * 3;
// }

// function square(element, index, array){
//   array[index] = Math.pow(element, 2);
// }


// function cube(element, index, array){
//   array[index] = Math.pow(element, 3);
// }

// let fruits = ["apple", "OrAnGe", "grapes", "banana", "strawberry"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function Uppercase(element, index, array){
//   array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array){
//   array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// function display(element){
//   console.log(element);
// }


// MAP -------------------------------------------

// const names = ["Spongebob", "Patrick", "Sandy"];
// const namesUpper = names.map(upperCase);

// const namesLower = names.map(lowerCase);

// console.log(namesLower);


// function upperCase(element){
//   return element.toUpperCase();
// }

// function lowerCase(element){
//   return element.toLowerCase();
// }

// const dates = ["2023-2-5", "2024-10-1", "2021-6-12"];

// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// FILTER ----------------------------------------------

// const age = [15, 18, 17, 20, 27, 30, 50, 48, 90];
// const adults = age.filter(isAdult);
// const children = age.filter(isChild);
// const old = age.filter(isOld);

// console.log(old);

// function isAdult(element){
//   return element >= 18;
// }

// function isChild(element){
//   return element < 18;
// }

// function isOld(element){
//   return element >= 40;
// }

// const fruits = ["apple","orange","papaya", "strawberry", "avocado","coconut"];

// const shortWords = fruits.filter(shortWord);
// const longWords = fruits.filter(longWord);

// console.log(longWords);

// function shortWord(element){
//   return element.length <= 6;
// }

// function longWord(element){
//   return element.length > 6;
// }

// REDUCE ----------------------------------------

// const grades = [50, 60, 70, 80 ,90 ,95];

// const maximum = grades.reduce(max);
// const minimum = grades.reduce(min);

// console.log(maximum);
// console.log(minimum);

// function max(accumulator, element){
//   return Math.max(accumulator, element);
// }

// function min(accumulator, element){
//   return Math.min(accumulator, element);
// }

// FUNCTION EXPRESSIONS 

// const numbers = [1, 2, 3, 4, 5];

// const square = numbers.map(function(element){
//   return Math.pow(element, 2)
// });

// const cube = numbers.map(function(element){
//   return Math.pow(element, 3)
// });

// const isEven = numbers.filter(function(element){
//   return element % 2 === 0;
// });

// const isOdd = numbers.filter(function(element){
//   return element % 2 !== 0;
// });

// const maximum = numbers.reduce(function(accumulator, element){
//   return Math.max(accumulator, element);
// });

// const minimum = numbers.reduce(function(accumulator, element){  
//   return Math.min(accumulator, element);
// });


// const cube = numbers.map((elements) => Math.pow(elements, 3));

// const sum = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(cube);


//OBJECTS (THIS) -------------------------------------

// const person1 = {
//   name: "Cedric Nano",
//   favFood: "Chicken",
//   sayHello: function(){console.log(`Hello i am ${this.name}`)},
//   eat: function(){console.log(`Hi i am ${this.name} and my favorite food is ${this.favFood}`)}
// }

// const person2 = {
//   name: "Kyle Nano",
//   favFood: "Pares",
//   sayHello: function(){console.log(`Hi i am ${this.name}, and i like to eat ${this.favFood}`)},
// }

// person1.eat();
// person2.sayHello();


//CONSTRUCTOR ------------------------------------------------

// function Car(make, model, year, color){
//   this.make = make,
//   this.model = model,
//   this.year = year,
//   this.color = color,
//   this.drive = function(){console.log(`I drive a ${this.model}`)}
// }

// const car1 = new Car("Ford", "Mustang", "2024", "Black");
// const car2 = new Car("Chevrolet", "Camaro", "2025", "Green");
// const car3 = new Car("Dodge", "Charger", "2026", "White");

// car1.drive();
// car2.drive();
// car3.drive();

//CLASS -----------------------------------------------------------------

// class Product {
//   constructor(name, price){ 
//     this.name = name,
//     this.price = price
//   }

//   displayProduct(){
//     console.log(`Product : ${this.name}`);
//     console.log(`Price   : $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax){
//     return this.price + (this.price * salesTax);
//   }


// }

// const salesTax = 0.05;

// const product1 = new Product("Shoes",100.00);
// const product2 = new Product("Shirt",25.98);
// const product3 = new Product("Pants",45.55);

// product1.displayProduct();

// const total = product1.calculateTotal(salesTax);

// console.log(`Total (With Tax) : $${total.toFixed(2)}`);


// STATIC --------------------------------------------------

// class MathUtil{

//   static PI = 3.14159;

//   static getDiameter(radius){
//     return radius * 2;
//   }

//   static getCircumference(radius){
//     return 2 * this.PI * radius;
//   }

//   static getArea(radius){
//     return this.PI * radius * radius;
//   }

// }

// // console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{

//   static userCount = 0;
  
//   constructor(userName){
//     this.userName = userName;
//     User.userCount++;
//   }

//  static getUserCount(){
//   console.log(`There are ${User.userCount} users online.`);
//  }
// }

// const user1 = new User("Cedric");
// const user2 = new User("Kyle");
// const user3 = new User("Sean");

// console.log(user1.userName);
// console.log(user2.userName);
// console.log(user3.userName);

// User.getUserCount();

// INHERITANCE -----------------------------------

// class Animal{

//   constructor(name, sound){
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound(){
//     console.log(`This ${this.name} is making a ${this.sound} sound`);
//   }
// }

// class Dog extends Animal{
//   constructor(name, breed){
//     super(name, "bark");
//     this.breed = breed;
//   }
// }

// const myDog = new Dog("Yuri", "Labrador");

// myDog.makeSound();


// SUPER -----------------------------------------------

// class Animal{

//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   move(speed){
//     console.log(`This ${this.name} moves at a speed of ${speed}kmh`);
//   }
// }

// class Rabbit extends Animal{

//   constructor(name, age, runSpeed){
//     super(name, age);
//     this.runSpeed = runSpeed;

//   }

//   run(){
//     console.log(`This ${this.name} is running`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal{

//   constructor(name, age, swimSpeed){
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim(){
//     console.log(`This ${this.name} is swimming`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal{

//   constructor(name, age, flySpeed){
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly(){
//     console.log(`This ${this.name} is flying`);
//     super.move(this.flySpeed);

//   }
// }

// const myRabbit = new Rabbit("rabbit", 2, 27);
// const myFish = new Fish("fish", 1, 17);
// const myHawk = new Hawk("hawk", 3, 57);

// myRabbit.run();
// myFish.swim();
// myHawk.fly();

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

// DESTRUCTURING ----------------------------

// function displayPerson({firstName, lastName, age, job="Jobless"}){
//   console.log(`name: ${firstName} ${lastName}`);
//   console.log(`age: ${age}`);
//   console.log(`job: ${job}`);
// } 

// const person1 = {
//   firstName: "Cedric",
//   lastName: "Nano",
//   age: 22,
//   job: "Software Engineer"
// }

// const person2 = {
//   firstName: "Kyle",
//   lastName: "Nano",
//   age: 20,
//   job: "Police Officer"
// }

// displayPerson(person1);

// NESTED OBJECTS ------------------------------


// class Person{

//   constructor(name, age, faveColor, ...address){
//     this.name = name,
//     this.age = age,
//     this.faveColor = faveColor,
//     this.address = new Address(...address)
//   }
// }


// class Address{
  
//   constructor(street, city, country){
//     this.street = street,
//     this.city = city,
//     this.country = country
//   }

// }

// const person1 = new Person("Cedric Lawrence Nano", 22, ["Black", "White"], "Our Lady's Village", "Legazpi City", "Philippines");

// console.log(person1.faveColor[0]);

// ARRAY OF OBJECTS 

// const fruits = [{name: "Apple", color:"red", calories: 97},
//                 {name: "Orange", color:"orange", calories: 67},
//                 {name: "Grapes", color:"purple", calories: 59},
//                 {name: "Pinapple", color:"yellow", calories: 43},
//                 {name: "Banana", color:"yellow", calories: 120}];


// fruits.push({name:"Coconut", color:"white", calories: 120});
// fruits.pop(fruits);
// fruits.unshift({name:"Dragon Fruit", color:"red", calories: 50});

// fruits.forEach(fruit => console.log(fruit)); (ONE PARAMETER)

// fruits.forEach((fruit, index) => console.log(fruit));

// const newFruits = fruits.map(fruit => fruit.color);
// console.log(newFruits);

// const filteredFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(highCalFruits);

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

// console.log(minFruit);

// SORT 

// let numbers = [1, 9, 5 , 8, 6, 3, 7, 4, 10, 2];

// numbers.sort((a,b) => a - b);

// console.log(numbers);

// const people = [{name: "Cedric", age: 22, gpa: 3.0}, 
//                 {name: "Kyle", age: 20, gpa: 2.0},
//                 {name: "Sean", age: 18, gpa: 1.0},
//                 {name: "Kit", age: 18, gpa: 1.5},
//                 {name: "Christian", age: 19, gpa: 1.9}];

// people.sort((a,b) => {
//   if(a.age !== b.age){
//     return a.age - b.age;
//   }
//   if(a.gpa !== b.gpa){
//     return a.gpa - b.gpa;
//   }
//   return a.name.localeCompare(b.name);
// });

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.gpa - b.gpa);
// people.sort((a, b) => a.name.localeCompare(b.name));

// console.log(people);

// Fisher-Yates Algorithm -----------------------------------------

// const cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// shuffle(cards);

// function shuffle(array){
//   for(let i = array.length - 1; i > 0; i--){
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// console.log(cards);

// DATE --------------------------------------------------------------

// const date = new Date();


// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const min = date.getMinutes();
// const sec = date.getSeconds();


// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(min);
// console.log(sec);

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-1-1");

// if(date2 > date2){
//   console.log("Happy New Year!");
// }

// console.log(date1);


// CLOSURE -----------------------------------------------

// function createGame(){
    
//     let score = 0;

//     function increaseScore(points){
//       score += points;
//       console.log(`+${points}pts`)
//     }

//     function decreaseScore(points){
//       score -= points;
//       console.log(`-${points}pts`)
//     }

//     function getScore(){
//       return score;
//     }

//     return {increaseScore, decreaseScore, getScore};

// }

// const game = createGame();

// game.increaseScore(28);
// game.decreaseScore(8);
// game.increaseScore(5);
  
// console.log(`The score is : ${game.getScore()}`);

// let timeOutId;

// function startTimer(){
//   timeOutId = setTimeout(() => window.alert(`Hello`), 3000);
//   console.log("Started");
// }

// function clearTimer(){
//   clearTimeout(timeOutId);
//   console.log("Cleared");
  
// }

// DIGITAL CLOCK PROGRAM --------------------------------------------------

// function updateClock(){
  
//   const now = new Date();
//   let hours = now.getHours().toString().padStart(2,0);
//   const merediem = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12 || 12;
//   hours = hours.toString().padStart(2,0);
//   const min = now.getMinutes().toString().padStart(2,0);
//   const sec = now.getSeconds().toString().padStart(2,0);
//   const timeString = `${hours}:${min}:${sec} ${merediem}`;
//   document.getElementById('clock').textContent = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);

// STOP WATCH CLOCK PROGRAM

// const display = document.getElementById('display');
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){

//   if(!isRunning){
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }
// }

// function stop(){

//   if(isRunning){
//     clearInterval(timer);
//     elapsedTime= Date.now() - startTime;
//     isRunning = false;

//   }
// }

// function reset(){

//   clearInterval(timer);
//   let startTime = 0;
//   let elapsedTime = 0;
//   let isRunning = false;
//   display.textContent = "00:00:00:00"
// }

// function update(){

//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;    

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
//   let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//   let seconds = Math.floor(elapsedTime / 1000 %  60);
//   let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

//   hours = String(hours).padStart(2,"0");
//   minutes = String(minutes).padStart(2,"0");
//   seconds = String(seconds).padStart(2,"0");
//   miliSeconds = String(miliSeconds).padStart(2,"0");

//   display.textContent =  `${hours}:${minutes}:${seconds}:${miliSeconds}:`;

// }

// ES6 Module

// import {PI, getCircumference, getArea, getVolume, greet, version, Logger} from './mathUtil.js';

// console.log(PI);

// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(circumference);
// console.log(area);
// console.log(volume);

// console.log(greet("Cedric"));
// console.log(version);

// const logger = new Logger();

// logger.log("Hello");

// ERROR HANDLING -------------------------------------

// try{

//   const dividend = Number(window.prompt("Enter a divident: "));
//   const divisor = Number(window.prompt("Enter a divisor: "));

//   if(divisor == 0){
//     throw new Error("You can't divide by zero");
//   }

//   if(isNaN(dividend) || isNaN(divisor)){
//     throw new Error("Values must be a number");
//   }

//   // if(typeof dividend === "number" || typeof divisor === "number"){
//   //   throw new Error("Values must be a number");
//   // }
  
//   const result = dividend / divisor;
//   console.lag(result);
// }

// catch(error){
//   console.log(error);
// }

// finally {
//   console.log("This always runs, regadless of errors.")
// }

// CALCULATOR PROGRAM


// const display = document.getElementById('display');

  
// function appendToDisplay(input){
//    display.value += input;
//   }

// function clearDisplay(){
//    display.value = "";
//   }

// function calculate(){
  
//   try{
//     display.value = eval(display.value);
//   }
//   catch(error){
//     display.value = error;
//   }
// }

// DOM (DOCUMENT OBJECT MODEL) -----------------------------


// const userName = "Cedric";
// const welcomeMsg = document.getElementById('welcome-msg');

// welcomeMsg.textContent += userName === " " ? "Guest" :   userName;

// const fruits = document.getElementsByClassName("fruits");

// TYPCASTING HTML COLLECTIONS (USING ARRAYS AND FOR LOOPS)

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });


// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// const ulElements = document.getElementsByTagName("ul");

// console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "yellow";
// h4Elements[1].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//   h4Element.style.backgroundColor = "yellow";
// }

// liElements[1].style.backgroundColor = "yellow";

// for(let liElement of liElements){
//   liElement.style.backgroundColor = "yellow";
// }

// ulElements[1].style.backgroundColor = "yellow";

// Array.from(h4Elements).forEach(h4Element => {
//   h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//   liElement.style.backgroundColor = "lightGreen"
// });

// Array.from(ulElements).forEach(ulElement => {
//   ulElement.style.listStyle = "none";
// });

// const foods = document.querySelector("li");
// const fruits = document.querySelector(".fruits");

// const foods = document.querySelectorAll("li");
// const fruits = document.querySelectorAll(".fruits");

// foods.forEach(food => {
//   food.style.backgroundColor = "yellow";
// });

// fruits.forEach(fruit => {
//   fruit.style.backgroundColor = "yellow";
// });

// fruits[2].style.backgroundColor = "yellow";
// foods[5].style.backgroundColor = "green";

// foods.style.backgroundColor = "yellow";
// fruits.style.backgroundColor = "green";

// DOM NAVIGATION

// first element child *********************

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

// last element child ******************

// const element = document.getElementById("dessert");
// const lastElement = element.lastElementChild;

// lastElement.style.backgroundColor = "yellow";

// const elements = document.querySelectorAll("ul");


// elements.forEach(element => {
  //   const lastElement = element.lastElementChild;
  //   lastElement.style.backgroundColor = "yellow";
  // });

  // next element sibling *************

  // const element = document.getElementById("cake");
  // const nextElement = element.nextElementSibling;

  // nextElement.style.backgroundColor = "yellow"; 

  // const element = document.getElementById("fruits");

  // const nextSibling = element.nextElementSibling;

  // nextSibling.style.backgroundColor = "pink";

  // previous element sibling **********

  // const element = document.getElementById("dessert");
  // const prevSibling = element.previousElementSibling;

  // prevSibling.style.backgroundColor = "green";

  // parent element

  // const element = document.getElementById("lettuce");
  // const parent = element.parentElement;

  // parent.style.backgroundColor = "pink";

  // children element

  // const element = document.getElementById("fruits");
  // const children = element.children;

  // children[1].style.backgroundColor = "yellow";


  // ADD & CHANGE HTML (USING DOM)

  // step 1. Create the element ***

  // const newListItem = document.createElement("li");

  // step 2. Add attributes/properties ***

  // newListItem.textContent = "coconut";
  // newListItem.id = "coconut";
  // newListItem.style.alignItems = "center";
  // newListItem.style.backgroundColor = "brown";

  // step 3. Append element to the DOM ***

  // document.body.append(newListItem);
  // document.body.prepend(newListItem);
  // document.getElementById("fruits").append(newListItem);
  // document.getElementById("fruits").prepend(newListItem);

  // const listItems = document.querySelectorAll("#fruits li");
  // document.getElementById("fruits").insertBefore(newListItem, listItems[4]);

  // const orange = document.getElementById("orange");
  // document.getElementById("fruits").insertBefore(newListItem, orange);

  // const box2 = document.getElementById("box2");
  // document.body.insertBefore(newListItem, box2)

  // const boxes = document.querySelectorAll(".box");
  // document.body.insertBefore(newListItem, boxes[2]);

  // step 4. Remove html element ***

  // document.body.removeChild(newListItem);
// document.getElementById("fruits").removeChild(newListItem);

// document.getElementById("box4").append(newListItem);
// document.getElementById("box4").removeChild(newListItem);

// ADD EVENT LISTENERS ( .addEventListener(event,callback or arrow function()) )

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", event => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "You just clicked!";
// });

// myButton.addEventListener("mouseover", event => {
//   myBox.style.backgroundColor = "pink";
//   myBox.textContent = "Dont do it!!";
// });

// myButton.addEventListener("mouseout", event => {
//   myBox.style.backgroundColor = "#3498db";
//   myBox.textContent = "Click Me!";
// });

// ADD EVENT LISTENERS (keydown and keyup)

// const myBox = document.getElementById("myBox");
// const moveAmount = 10;

// let x = 0;
// let y = 0;


// document.addEventListener("keydown", event => {
//   myBox.style.backgroundColor =   "red";
//   myBox.textContent = "😲";
// });

// document.addEventListener("keyup", event => {
//   myBox.style.backgroundColor = "lightblue";
//   myBox.textContent = "😂";
// });

// document.addEventListener("keydown", event => {

//   if(event.key.startsWith("Arrow")){

//     switch(event.key){
//       case "ArrowUp":
//         y -= moveAmount;
//         break;

//       case "ArrowDown":
//         y += moveAmount;
//         break;
      
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;

//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }

//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }


// });

// document.addEventListener("keydown", event => {
//   console.log(event.key);

//   if(event.key.startsWith("Arrow")){
//     switch(event.key){
//       case "ArrowUp":
//         console.log("Up arrow key pressed");
//         break;
      
//       case "ArrowDown":
//         console.log("Down arrow key pressed");
//         break;

//       case "ArowLeft":
//         console.log("Left arrow ky pressed");
//         break;

//       case "ArowRight":
//         console.log("Right arrow key pressed");
//         break;
//     }
//   }
// });

// SHOW AND HIDE HTML ELEMENTS 

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");


// myButton.addEventListener("click", event => {

//   if(myImg.style.visibility === "hidden"){ 
//     myImg.style.visibility = "visible";
//     myButton.textContent = "hide";
//   }
//   else{
//     myImg.style.visibility = "hidden";
//     myButton.textContent = "Show";
//   }

// });

// NODE LIST (wont update automatically) ---------------------------------------

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//   button.style.backgroundColor = "yellow";
//   button.textContent += "Click here"; (Append)
//   button.textContent = "Click here"; (Replace)
// });

// event listeners

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "red"
//   });
// });

// mouseover and mouseout

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "red";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "#4CAF50";
//   });
// });

// add an element

// const newButton = document.createElement("button");

// newButton.textContent = "button 5";
// newButton.classList = "myButtons";

// document.body.append(newButton);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// const addHoverEffect = button => {

//   button.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "red";
//   });

//   button.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "#4CAF50";
//   });

// };

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => addHoverEffect(button));

// const newButton = document.createElement("button");

// newButton.textContent = "button5";
// newButton.classList.add = "myButtons";

// document.body.append(newButton);

// addHoverEffect(newButton);

// remove an element 

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.remove();
//     buttons = document.querySelectorAll(".myButtons");
//     console.log(buttons);
//   });
// });


// CLASS LIST ------------------------------------------------------\\

// const buttons = Array.from(document.getElementsByClassName("myButtons"));

// buttons.forEach(button => {
//     button.classList.add("enabled");
// });

// const myButtons = document.getElementById("myButtons");

// add & remove

// myButtons.addEventListener("mouseover", event => {
//    event.target.classList.add("hover");
// });

// myButtons.addEventListener("mouseout", event => {
//   event.target.classList.remove("hover");
// });

// toggle (Remove if present, Add if not)

// myButtons.addEventListener("mouseover", event => {
//   event.target.classList.toggle("hover");
// });

// myButtons.addEventListener("mouseout", event => {
//   event.target.classList.toggle("hover");
// });

// replace (oldClass, newClass)

// myButtons.classList.add("enabled");

// myButtons.addEventListener("click", event => {
//   event.target.classList.replace("enabled", "disabled");
// });

// contains 

// myButtons.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//       event.target.textContent = "This is disabled";
//     }else{
//       event.target.classList.replace("enabled", "disabled");
//     }
// });

// const myH1 = document.getElementById("myH1");


// myH1.classList.add("enabled");

// myH1.addEventListener("click", event => {

//   if(event.target.classList.contains("disabled")){
//     event.target.textContent = "This is disabled!";
//   }
//   else{
//    event.target.classList.replace("enabled", "disabled");
//   }
// });

// NODELIST & CLASS LIST ----------------------------------------

// const buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.classList.add("enabled");
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.classList.remove("enabled");
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover")
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover")
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//       event.target.textContent += "😒";
//     }
//     else{
//       event.target.classList.replace("enabled", "disabled");
//     }
//   });
// });

// ROCK, PAPER AND SCISSORS 

// const choices = ["rock", "paper", "scissors"];

// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice) {

//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     let result = "";

//     if(playerChoice === computerChoice){
//       result = "ITS A TIE !!";
//     }
//     else{
//       switch(playerChoice){
//         case "rock":
//          result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
//          break;

//         case "paper":
//          result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//          break;

//         case "scissors":
//          result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//          break;
//       }
//     }

//     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//     resultDisplay.textContent = result;

//     resultDisplay.classList.remove("greenText", "redText");

//     switch(result){
//       case "YOU WIN!":
//         resultDisplay.classList.add("greenText");
//         playerScore++;
//         playerScoreDisplay.textContent = playerScore;
//         break;

//       case "YOU LOSE!":
//         resultDisplay.classList.add("redText");
//         computerScore++;
//         computerScoreDisplay.textContent = computerScore;
//         break;
//     }
// }

// IMAGE SLIDER ---------------------------------------

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// // initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){

//     if(slides.length > 0){
//       slides[slideIndex].classList.add("displaySlide");
//       intervalId = setInterval(nextSlide, 5000);
//     }
//     // console.log(intervalId);
// }

// function showSlide(index){

//     if(index >= slides.length){
//       slideIndex = 0;
//     }
//     else if(index < 0){
//       slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//       slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");

// }

// function prevSlide(){

//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide(){

//     slideIndex++;
//     showSlide(slideIndex);

// }

// CALLBACK HELL (AVOID IT AS MUCH AS POSSIBLE) --------------------------------------------------

// function task1(callback){
//   setTimeout(() => {
//     console.log("Task 1 Complete");
//     callback();
//   }, 2000);
  
// }

// function task2(callback){
//   setTimeout(() => {
//     console.log("Task 2 Complete");
//     callback();
//   }, 1500);
// }

// function task3(callback){
//   setTimeout(() => {
//     console.log("Task 3 Complete");
//     callback();
//   }, 2500);
// }

// function task4(callback){
//   setTimeout(() => {
//     console.log("Task 4 Complete");
//     callback();
//   }, 4000);
// }


// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("All tasks are complete!");
//       });
//     });
//   });
// });

// console.log("All tasks are complete");

// PROMISES --------------------------------------------------

// WALK THE DOG
// CLEAN THE KITCHEN
// TAKE OUT THE TRASH

// function walkDog(){

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {

//         const dogWalked = true;

//         if(dogWalked){
//           resolve("You walk the dog!");
//         }
//         else{
//           reject("You DIDN'T walked the dog!")
//         }
        
//       }, 2000)
//     });
// };

// function cleanKitchen(){

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
        
//         const kitchenCleaned = true;

//         if(kitchenCleaned){
//           resolve("You clean the kitchen!");
//         }
//         else{
//           reject("You DIDN'T clean the kitchen!")
//         }

//       }, 2500)
//     });
// };

// function takeOutTrash(){
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
        
//         const trashTakenOut = true;

//         if(trashTakenOut){
//           resolve("You take out all the trash!");
//         }
//         else{
//           reject("You DIDN'T take out all the trash!")
//         }

//       }, 500);
//     });
// }

// // walkDog().then(value => {console.log(value); return cleanKitchen()})
// //          .then(value => {console.log(value); return takeOutTrash()})
// //          .then(value => {console.log(value); console.log("You finished all the chores")})
// //          .catch(error => console.error(error));

// ASYNC AND AWAIT ------------------------------------------------------------

// async function doChores(){


//     try{
//       const walkDogResult = await walkDog();
//       console.log(walkDogResult);
  
//       const takeOutTrashResult = await takeOutTrash();
//       console.log(takeOutTrashResult);
  
//       const cleanKitchenResult = await cleanKitchen();
//       console.log(cleanKitchenResult);

//       console.log("You finished all the chores!")
//     }
//     catch(error){
//       console.log(error);
//     }
// }

// doChores();

// JSON (JavaScript Object Notation) ----------------------------------------------------

// const names = ["Cedric", "Charles", "Emman", "Majo"];
// const person = {
//   "name": "Cedric",
//   "age" : 30,
//   "isEmployed": true,
//   "hobbies": ["Reading", "Working out", "Watching Movies"]
// }
// const people = `[
//   {
//     "name": "Cedric",
//     "age" : 22,
//     "isEmployed": true,
//     "hobbies": ["Reading", "Working out", "Coding"]
//   },

//   {
//     "name": "Emman",
//     "age" : 20,
//     "isEmployed": true,
//     "hobbies": ["Reading", "Working out", "Computer Games"]
//   },

//   {
//     "name": "James",
//     "age" : 21,
//     "isEmployed": true,
//     "hobbies": ["Reading", "Working out", "Editing"]
//   },

//   {
//     "name": "Charles",
//     "age" : 23,
//     "isEmployed": true,
//     "hobbies": ["Eating", "Computer Games", "Watching Anime"]
//   }
// ]`

// // const stringJson = JSON.stringify(people);
// const jsonParse = JSON.parse(people)

// console.log(jsonParse);

// FETCH ---------------------------------------------------

// 1. Fetch json files

// fetch("person.json")
//     .then(response => response.json())
//     .then(values => values.for)
//     .catch(error => console.error(error))

// 2. Fetch http requests

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu",)
//     .then(response => {

//         if(!response.ok){
//           console.log("Unable to fetch the resource")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.species))
//     .catch(error => console.error(error));

// 3. Fetch using async and await / Fetch apis and http requests

// async function fetchData(){

//     try{

//       const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//       if(!response.ok){
//         throw new Error("There's no pokemon with that name!");
//       }

//       const data = await response.json();

//       if(!data.sprites || !data.sprites.front_default){
//         throw new Error("There's no pokemon with that name!")
//       }
      
//       const pokemonSprite = data.sprites.front_default;
//       const pokemonImg = document.getElementById("pokemonSprite");

//       pokemonImg.src = pokemonSprite;
//       pokemonImg.style.display = "block";

//       document.getElementById("errorMessage").textContent = "";
//     }
//     catch(error){
//       document.getElementById("errorMessage").textContent = error.message;

//     }
// }

// WEATHER APP PROJECT --------------------------------------------

// const card = document.querySelector(".card");

// function displayCard(){
//   card.style.display = "block";
// }

// displayCard();

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "f3a74f507a95746ba7af9ce90377c89d";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
      try{
        const weatherData = await getWeatherData(city);
        displayWeatherData(weatherData);
      }
      catch(error){
        console.error(error);
        displayError(error);
      }

    }
    else{
      displayError("Please enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
      throw new Error("Could not fetch weather data");
    }
    return await response.json();

}

function displayWeatherData(data){

    const {name: city, 
           main:{temp, humidity},
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
    

}

function getWeatherEmoji(weatherId){

    switch(true){
      case (weatherId >= 200  || weatherId < 300):
        return "⛈️";
      case (weatherId >= 300  || weatherId < 400):
        return "⛈️";
      case (weatherId >= 500  || weatherId < 600):
        return "⛈️";
      case (weatherId >= 600  || weatherId < 700):
        return "❄️";
      case (weatherId >= 700  || weatherId < 781):
        return "💨";
      case (weatherId === 800):
        return "☀️";
      case (weatherId >= 800  || weatherId < 804):
        return "☁️";
      default:
        return "❓❓";
      
    }

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



















