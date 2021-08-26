// 3. Дан массив из n элементов. Вывести сумму максимального и минимального элемента.

let a=[], n = 20, min = 1, max = 100, numberMin, numberMax;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

numberMin = a[0];

for (i = 0; i < n; i++){
    if (numberMin > a[i])
    numberMin = a [i];
} console.log(numberMin);

numberMax = a[0];

for (i = 0; i < n; i++){
    if (numberMax < a[i])
    numberMax = a [i];
} console.log(numberMax);

console.log(numberMin + numberMax);