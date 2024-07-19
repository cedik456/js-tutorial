// SUPER -----------------------------------------------

// class Animal{

//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   move(speed){
//     console.log(`This ${this.name} moves at a speed of ${speed}kmh`);
//   }
// }

// class Rabbit extends Animal{

//   constructor(name, age, runSpeed){
//     super(name, age);
//     this.runSpeed = runSpeed;

//   }

//   run(){
//     console.log(`This ${this.name} is running`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal{

//   constructor(name, age, swimSpeed){
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim(){
//     console.log(`This ${this.name} is swimming`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal{

//   constructor(name, age, flySpeed){
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly(){
//     console.log(`This ${this.name} is flying`);
//     super.move(this.flySpeed);

//   }
// }

// const myRabbit = new Rabbit("rabbit", 2, 27);
// const myFish = new Fish("fish", 1, 17);
// const myHawk = new Hawk("hawk", 3, 57);

// myRabbit.run();
// myFish.swim();
// myHawk.fly();