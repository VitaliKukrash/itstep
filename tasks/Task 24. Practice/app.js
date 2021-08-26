// 1. Дан массив из n элементов и число k<n. Вывести последние k элементов массива.

let n = 10; a = [], min = 1, max = 100, k = 5;

for (j = 0; j < n; j++){
    a[j] = Math.floor(Math.random() * (max - min +1)) + min; 
} console.log(a);

for (i = n - k; i < n; i++)
console.log(a[i]);

 