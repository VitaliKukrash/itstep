// 3) Dog, Cat, Horse переопределяют методы makeNoise, eat. 
// 4) Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. 

import {Animal} from "./animal.js"

class Dog extends Animal{
    sort;
    constructor(food, location, name, sort){
        super(food, location, name);
        this.sort = sort;
    }
    makeNoise(){
        console.log(this.name, this.sort + ' ha-ha');
    }
    eat(){

    }
}

export {Dog};