// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.

let str = 'я учу javascript!';

let result = str.split(" ").map(function(item){
    return item[0].toUpperCase()+item.substr(1);
}).join(" ");

console.log(result);