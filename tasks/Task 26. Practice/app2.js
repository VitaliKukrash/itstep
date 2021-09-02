// 2. Разработать функцию для заполнения массива случаныйми числами.

function fillArray(a, n){
   
    const min = 1, max = 100;
    for (let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}
let b=[];
b = fillArray(b, 10);
console.log(b);