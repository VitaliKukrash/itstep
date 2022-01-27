import {Animal} from "./animal";

class Dog extends Animal{

    constructor(food: string, location: string,name: string){
        super(food, location, name);
    }

    makeNoise(){
        console.log(`${this.name} делает гав-гав`);
    }

    eat(){
        console.log(`Ест свою ${this.food}`);
    }
}

export {Dog};