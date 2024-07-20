// ASYNC AND AWAIT ------------------------------------------------------------


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

