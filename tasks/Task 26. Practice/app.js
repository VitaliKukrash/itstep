// 1. Разрабоать функцию для генерации случаного целого числа от min до max.


function createNumber(min, max){
   
    {
        a = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}

function isPrime(b){
  
    for (let i = 2; i < b; i++) {
        if(b % i == 0) 
        return console.log("Число простое");;
    }
    return console.log("Число непростое");;
}



    let b = createNumber(10, 20);
    console.log(b);
    
    let c = isPrime(b);

   