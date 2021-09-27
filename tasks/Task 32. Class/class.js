class Ellipse{

    a = 0; // поля
    b = 0;

    constructor(a,b){
        
        this.a = a;  // обращение к полям;
        this.b = b;
    }

    getSquare (){
        return Math.PI*this.a*this.b;
    }

}

let ellipse1 = new Ellipse(3,4);
let ellipse2 = new Ellipse(5,6);
let ellipse3 = new Ellipse(8,4);

console.log(ellipse1.getSquare());