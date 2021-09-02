// 5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)

function fillArray(a, n){
   
    const min = 1, max = 100;
    for (let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}



function showStr(a){

let str = "";
for(let i = 0; i < a.length - 1; i++){
    str =  str + a[i] + ", ";
}
console.log(str + a[a.length - 1]);
}


let b=[];
b = fillArray(b, 10);
console.log(b);

let str;
str = showStr(b);
