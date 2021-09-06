// forEach: массив не изменяет
// 14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

let a = [3, 4, 1, 2, 7], b = [];

a.forEach(function(item, index, array){
    b.push(item**2);
});

console.log(b);