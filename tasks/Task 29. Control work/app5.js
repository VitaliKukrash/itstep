// 5. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений.

let a =[1, 6 , 8], b = [0, -1], c = [10, 3, -6];

let d = a.concat(a, b, c);

console.log(d);

// d.sort((a, b) => b - a);

d.sort(function(a, b){
    return b - a;
})

console.log(d);