
class Animal{

  constructor(name, sound){
    this.name = name,
    this.sound = sound
  }

  makeSound(){
    console.log(`${this.name} is making a ${this.sound} sound.`)
  }
}

class Dog extends Animal{
  
  constructor(name, sound, breed){
    super(name, sound),
    this.breed = breed;
  }
}


class Bird extends Animal{

  constructor(name, sound){
    super(name, sound)
  }

  makeSound(){
    console.log(`The bird is ${this.sound}`)
  }
}

// const newAnimal = new Animal("Cat", "Meow");
const dog = new Dog("Yuri","Arf","Labrado");
const bird = new Bird("Woodpecker", "Chirping")
console.log(dog);
console.log(bird);

dog.makeSound();
bird.makeSound();