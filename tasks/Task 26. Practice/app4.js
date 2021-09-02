// 4. Разработать функцию для нахождения индекса максимального элемента в массиве.

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

function getMaxIndex(a){

    numberMax = a[0];
    for (i = 0; i < a.length; i++){
        if (numberMax < a[i]){
            numberMax = a[i];
            maxIndex = i;
       }
    }  return maxIndex;
}

let c;
c = getMaxIndex(b);
console.log(c);
