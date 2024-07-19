// CLOSURE -----------------------------------------------

// function createGame(){
    
//     let score = 0;

//     function increaseScore(points){
//       score += points;
//       console.log(`+${points}pts`)
//     }

//     function decreaseScore(points){
//       score -= points;
//       console.log(`-${points}pts`)
//     }

//     function getScore(){
//       return score;
//     }

//     return {increaseScore, decreaseScore, getScore};

// }

// const game = createGame();

// game.increaseScore(28);
// game.decreaseScore(8);
// game.increaseScore(5);
  
// console.log(`The score is : ${game.getScore()}`);

// let timeOutId;

// function startTimer(){
//   timeOutId = setTimeout(() => window.alert(`Hello`), 3000);
//   console.log("Started");
// }

// function clearTimer(){
//   clearTimeout(timeOutId);
//   console.log("Cleared");
  
// }