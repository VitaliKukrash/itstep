import {Animal} from "./animal";

class Vet{
    treatAnimal(animal: Animal){
        console.log(`${animal.name} ест ${animal.food} в месте ${animal.location}`);
    }
}

export {Vet};