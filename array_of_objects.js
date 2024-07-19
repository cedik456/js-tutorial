// ARRAY OF OBJECTS 

// const fruits = [{name: "Apple", color:"red", calories: 97},
//                 {name: "Orange", color:"orange", calories: 67},
//                 {name: "Grapes", color:"purple", calories: 59},
//                 {name: "Pinapple", color:"yellow", calories: 43},
//                 {name: "Banana", color:"yellow", calories: 120}];


// fruits.push({name:"Coconut", color:"white", calories: 120});
// fruits.pop(fruits);
// fruits.unshift({name:"Dragon Fruit", color:"red", calories: 50});

// fruits.forEach(fruit => console.log(fruit));  /* (ONE PARAMETER) */

// fruits.forEach((fruit, index) => console.log(fruit));

// const newFruits = fruits.map(fruit => fruit.color);
// console.log(newFruits);

// const filteredFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(highCalFruits);

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

// console.log(minFruit);