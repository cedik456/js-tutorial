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