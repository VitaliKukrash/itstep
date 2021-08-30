// 8. Дан массив из n элементов и число k<n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.

let a=[], b=[], c=[], n = 20, min = 1, max = 100, k = 5, isFind = false;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

for (i = k; i < n; i++){
    a[i] = a[i + 1];
} console.log(a);