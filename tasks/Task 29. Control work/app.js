// 1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив этим значением.

let n = 6, value = 5;

let b = Array(n).fill(value, 0, n);

console.log(b);