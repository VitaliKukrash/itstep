var squareSide = 10;

var squarePerimeter = squareSide * 4;

console.log("Периметр квадрата равен "+squarePerimeter+".");

var circleRadius = 20;

var circleSquare = Math.PI*circleRadius**2;

console.log("Площадь круга равна "+circleSquare+".");

var a = 5, b = 7, c;

c = (a**2+b**2)**0.5;

console.log("Гипотенуза равна "+ c +".");

var d = 9, e = 12, f;

f = e;

e = d;

d = f;

console.log(d,e);

var j = 123, h, g, k;

h = 123 % 10;

g = (123 % 100 - h)/10;

k = (123 - h - g*10)/100;

console.log("Сумма цифр числа равна " + (h + g + k));