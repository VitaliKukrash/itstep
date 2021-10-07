// Задание #3
// Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon). 
//А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(), так, 
// чтобы они выводили строки о размере животного.

import {SmallAnimal} from "./smallanimal.js";

class Goose extends SmallAnimal{
    constructor(size){
        super(size);
    }

} export {Goose};