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