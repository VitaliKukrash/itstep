// 9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.

let a=[], min = 1, max = 100, k = 5, isFind = false;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

for (i = k; i < n; i++){
    a[i] = a[i + 1];
} console.log(a);

let isgrow = true, isless = true;

for ( let i = 1; i < n; i++){
    if(a[i] > a[i-1]){
        isgrow = false;
    }
    if(a[i] < a[i-1]){
        isgrow = false;
    }
}
if(isless){
    console.log("Массив упорядочен по убыванию");
}
if(isgrow){
    console.log("Массив упорядочен по возрастанию");
} else{
    console.log("Массив неуупорядочен");
}