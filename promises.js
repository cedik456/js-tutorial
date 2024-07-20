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