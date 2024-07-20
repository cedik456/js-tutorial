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