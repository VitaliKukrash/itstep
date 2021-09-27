class Clothes {
    name = " ";
    size = " ";
    color = " ";

    constructor(name, size, color){
        this.name = name;
        this.size = size;
        this.color = color;
    }

}

 class Trouses extends Clothes {
      belt = " ";
  constructor(name, size, color, belt){   
      super(name, size, color);
      this.belt = belt;
    }
}



 let clothes = new Clothes("n","s","c");

console.log(clothes); 

 let trouses = new Trouses("n","s","c","b");

console.log(trouses); 