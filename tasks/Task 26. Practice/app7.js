// 7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.

function fillArray(a, n){
   
    const min = 1, max = 100;
    for (let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}

function findElement(a, n){
    let isPrime = false;
    for (let i = 0; i < a.length; i++){
        if(a[i == n]){
            isPrime = true;   
        }
    }  return isPrime;

}


let b=[];
b = fillArray(b, 10);
console.log(b);