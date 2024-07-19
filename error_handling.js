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