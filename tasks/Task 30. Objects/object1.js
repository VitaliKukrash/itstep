function Calculator(){
    
    this.add = function(a, b){
        return (a + b);    
    }
    this.sub = function(a, b){
        return (a - b);    
    }
    this.mul = function(a, b){
        return (a * b);    
    }
    this.div = function(a, b){
        return (a / b);    
    }
}

let calc = new Calculator();

let x = 4, y = 5;

let result = calc.div(calc.sub(x,calc.mul(y,2)),calc.add(x,y));

console.log(result);


