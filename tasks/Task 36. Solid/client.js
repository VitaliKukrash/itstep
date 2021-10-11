import {User} from "./user.js"

class Client extends User{
    pets;
    constructor(name, login, pass){
        super(name, login, pass);
        this.pets = [];
    }

    addPet(pets){

    }

    checkPet(name){

    }

} export {Client};