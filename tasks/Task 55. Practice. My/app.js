// 1. Дана площать квадрата. Найти его периметр.
function getSquare(s) {
    return Math.sqrt(s) * 4;
}
;
// // 2. Даны длины сторон стреугольника - a, b, c. Определить, является ли он разностронним, ранобедренным или равносторонним
function getTriangle(a, b, c) {
    if (a == b && b == c) {
        return ("Треугольник равносторонний");
    }
    else if (a == b || b == c || c == a) {
        return ("Треугольник равнобедренный");
    }
    else {
        return ("Треугольник разносторонний");
    }
}
;
// 3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 
function isTriagle(a, b, c) {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return ("Такой треугольник возможно составить");
    }
    else {
        return ("Такой треугольник невозможно составить");
    }
}
;
// 4. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).
function isOld(a) {
    if (a < 17) {
        return ("Вы молодой");
    }
    else if (a > 17 && a < 69) {
        return ("Вы взрослый");
    }
    else if (a > 70 && a < 99) {
        return ("Вы пожилой");
    }
    else
        return ("Какой интересный возраст!");
}
;
// 5. Вывести в консоль квадраты чисел от 10 до 20.
function getQuadrate(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    for (var i = a; i <= b; i++) {
        console.log(i * i);
        console.log("i :", i);
    }
}
;
// 6. Найти сумму первых 20 натуральных чисел кратных 5.
function getSumNat() {
    var sum = 0, number = 0;
    for (var i = 0; i < 20;) {
        if (number % 5 == 0) {
            i++;
            sum = sum + number;
        }
        ;
        number++;
    }
    console.log("Сумма равна = " + sum, "Число равно = " + --number);
}
;
// 7. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).
function getFibbonachi(n) {
    var x = 0, y = 1, temp;
    for (var q = 2; q <= n; q++) {
        temp = x + y;
        x = y;
        y = temp;
    }
    console.log(temp);
}
;
getFibbonachi(8);
// 8. Разработать функцию для вычисления НОД 2 натуральных чисел.
// function getNOD()
// 9. Дано предложение. Вывести последнее слово в предложении.
function getLastWord(a) {
    var str = a.split(' ');
    return (str[str.length - 1]);
}
;
