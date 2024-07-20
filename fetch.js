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