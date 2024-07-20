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