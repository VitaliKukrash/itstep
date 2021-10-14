class Driver extends User{
   car;
   reviews;
   constructor (name, login, password){
       super(name, login, password);
       this.reviews = [];
   }
}
export{Driver}; 