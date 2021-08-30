// Функции для создания массива и вычисления суммы его элеметов.



function fillArray(a, n){
   
    const min = 1, max = 100;
    for (i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}

function getSumArray(a){
    let sum = 0;
    for(i = 0; i < a.length; i++){
        sum  += a[i];
    }
    return sum;
}


let b=[];
b = fillArray(b, 2);
console.log(b);

let sum;
sum = getSumArray(b);
console.log(sum);
