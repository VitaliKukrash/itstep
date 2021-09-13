// 2. Найти сумму только положительных элементов массива.

let a = [-1, 0, 2, 3, 5, -6];

let b = a.filter(item => item > 0);

console.log(b);

let result = b.reduce((sum, current) => sum + current, 0);

console.log(result);
