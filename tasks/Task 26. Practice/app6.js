// 6. Разработать функцию, которая уменьшает четные элементы в 2 раза.

function fillArray(a, n){
   
    const min = 1, max = 100;
    for (let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}

function lessEven(a){
    for(i = 0; i < a.length; i++){
        if (a[i] % 2 == 0){
            a[i] = a[i] / 2;
        }
    } return a;
}

let b=[];
b = fillArray(b, 10);
console.log(b);

let c=[];
c = lessEven(b);
console.log(c);