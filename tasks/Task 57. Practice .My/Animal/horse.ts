import {Animal} from "./animal";

class Horse extends Animal{
    constructor(food: string, location: string,name: string){
        super(food, location, name);
    }

    makeNoise(){
        console.log(`${this.name} делает иго-го`);
    }

    eat(){
        console.log(`Ест всю ${this.food}`);
    }
}

export {Horse};