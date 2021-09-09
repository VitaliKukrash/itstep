// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let str = '2025-12-31', a=[];

a = str.split('-');

console.log(a);

a.reverse();

console.log(a);

let b = a.join('.');

console.log(b);