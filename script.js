
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

// const weatherForm = document.querySelector(".weatherForm");
// const cityInput = document.querySelector(".cityInput");
// const card = document.querySelector(".card");
// const apiKey = "f3a74f507a95746ba7af9ce90377c89d";


// weatherForm.addEventListener("submit", async event => {

//     event.preventDefault();

//     const city = cityInput.value;

//     if(city){
//       try{
//         const weatherData = await getWeatherData(city);
//         displayWeatherData(weatherData);
//       }
//       catch(error){
//         console.error(error);
//         displayError(error);
//       }

//     }
//     else{
//       displayError("Please enter a city");
//     }

// });

// async function getWeatherData(city){

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     const response = await fetch(apiUrl);

//     if(!response.ok){
//       throw new Error("Could not fetch weather data");
//     }
//     return await response.json();

// }

// function displayWeatherData(data){

//     const {name: city, 
//            main:{temp, humidity},
//            weather: [{description, id}]} = data;

//     card.textContent = "";
//     card.style.display = "flex";

//     const cityDisplay = document.createElement("h1");
//     const tempDisplay = document.createElement("p");
//     const humidityDisplay = document.createElement("p");
//     const descDisplay = document.createElement("p");
//     const weatherEmoji = document.createElement("p");

//     cityDisplay.textContent = city;
//     tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
//     humidityDisplay.textContent = `Humidity: ${humidity}%`;
//     descDisplay.textContent = description;
//     weatherEmoji.textContent = getWeatherEmoji(id);

//     cityDisplay.classList.add("cityDisplay");
//     tempDisplay.classList.add("tempDisplay");
//     humidityDisplay.classList.add("humidityDisplay");
//     descDisplay.classList.add("descDisplay");
//     weatherEmoji.classList.add("weatherEmoji");

//     card.appendChild(cityDisplay);
//     card.appendChild(tempDisplay);
//     card.appendChild(humidityDisplay);
//     card.appendChild(descDisplay);
//     card.appendChild(weatherEmoji);
    

// }

// function getWeatherEmoji(weatherId){

//     switch(true){
//       case (weatherId >= 200  || weatherId < 300):
//         return "⛈️";
//       case (weatherId >= 300  || weatherId < 400):
//         return "⛈️";
//       case (weatherId >= 500  || weatherId < 600):
//         return "⛈️";
//       case (weatherId >= 600  || weatherId < 700):
//         return "❄️";
//       case (weatherId >= 700  || weatherId < 781):
//         return "💨";
//       case (weatherId === 800):
//         return "☀️";
//       case (weatherId >= 800  || weatherId < 804):
//         return "☁️";
//       default:
//         return "❓❓";
      
//     }

// }

// function displayError(message){

//     const errorDisplay = document.createElement("p");
//     errorDisplay.textContent = message;
//     errorDisplay.classList.add("errorDisplay");

//     card.textContent = "";
//     card.style.display = "flex";
//     card.appendChild(errorDisplay);
// }



















