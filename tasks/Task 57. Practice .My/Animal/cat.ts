import {Animal} from "./animal";

class Cat extends Animal{
    constructor(food: string, location: string,name: string){
        super(food, location, name);
    }

    makeNoise(){
        console.log(`${this.name} делает мяу-мяу`);
    }

    eat(){
        console.log(`Ест твою ${this.food}`);
    }
}
export {Cat};