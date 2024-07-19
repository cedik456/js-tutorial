// DOM (DOCUMENT OBJECT MODEL) -----------------------------


// const userName = "Cedric";
// const welcomeMsg = document.getElementById('welcome-msg');

// welcomeMsg.textContent += userName === " " ? "Guest" :   userName;


// TYPCASTING HTML COLLECTIONS (USING ARRAYS AND FOR LOOPS)

// const fruits = document.getElementsByClassName("fruits");

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