// 1. Дана площать квадрата. Найти его периметр.

let square = 100, perimetr;

perimetr = square ** 0.5 * 4;

console.log(perimetr);

// 2. Даны длины сторон стреугольника - a, b, c. Определить, является ли он разностронним, ранобедренным или равносторонним

let a = 4, b = 5, c = 7;

if (a == b && b == c) {
    console.log("Треугольник равносторонний");
} else if (a == b || b == c || c == a) {
    console.log("Треугольник равнобедренный");
} else {
    console.log("Треугольник разносторонний");
}

// 3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 

a = 8, b = 12, c = 10;

if ((a + b) > c && (a + c) > b && (b + c) > a) {
    console.log("Такой треугольник возможно составить");
} else {
    console.log("Такой треугольник невозможно составить");
}

// 4. Дано число k (от 1 до 300) и последовательность следующего вида: 100101102103104105..198199. Вывести k-цифру в этой последовательности.



// 5. Дано 2 числа. Если сумма этих чисел четная, то вывести произведение, если нет - то частное.

let n = 9, m = 7;

if ((n + m) % 2 == 0) {
    console.log(n * m);
} else {
    console.log(n / m);
}

// 6. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).

let old = 1000;

if (old < 17) {
    console.log("Вы молодой");
} else if (old > 17 && old < 69) {
    console.log("Вы взрослый");
} else if (old > 70 && old < 99) {
    console.log("Вы пожилой");
} else 
    console.log("Какой интересный возраст!");

// 7. Дан радиус круга и сторона квадрата. Опеределить, поместится ли круг в квадрат, либо квадрат в круг, либо ничего ни во что не поместится.

let radiusCircle = 100, squareSide = 10;

if (radiusCircle == squareSide/2 ** 0.5) {
    console.log("Квадрат впишется в окружность");
} else if (radiusCircle == squareSide/2) {
    console.log("Окружность впишется в  квадрат");
} else {
    console.log("Ничего ни во что не поместится");
}

// 8. Дан день, месяц и год (3 числа). Определить, явялется ли дата корректной.

let day = 31, month = 12, year = 2020;

switch (month) {
    case 1:
    case 3:    
    case 5:
    case 7:
    case 8:    
    case 10:    
    case 12:     
       if (day <= 31 && day > 0) {
         console.log("Дата корректна первая ветка");
       }
        break;
    case 4:
    case 6:    
    case 9:
    case 11:
        if (day <= 30 && day > 0) {
            console.log("Дата корректна вторая ветка");
        }
           break;
    case 2:
        if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0 && day <= 29 && day > 0) {
            console.log("Дата корректна третья ветка");  
        } else if (day <= 28 && day > 0) {
            console.log("Дата корректна четвертая ветка");
        } else   
        console.log("Дата некорректна пятая ветка");    
        break;
    default:
        console.log("Дата некорректна");     
        break;
}

// 9. Даны координаты точки (x,y). Определить в какой четверти (1,2,3 или 4) лежит точка либо она лежит на какой-то оси координат.

let x = 1, y = 1;

if (x > 0 && y > 0) {
    console.log("Первая четверть");
} else if (x == 0 || y == 0) {
    console.log("Лежит на какой-то оси координат");
} else if (x < 0 && y > 0) {
    console.log("Вторая четверть");
} else if (x < 0 && y < 0) {
    console.log("Третья четверть");
} else {
    console.log("Четвертая четверть");
}
    
// 10. Даны 2 окружности (радиусы и центры). определить их взаимное расположение.

let radiusCircle1, radiusCircle2, x1, y1, x2, y2, d;

d = ((x1 + x2) ** 2 + (y1 + y2) ** 2) ** 0.5;

if (d > (radiusCircle1 + radiusCircle2)) {
    console.log("Окружности лежат отдельно");
} else if (d < (radiusCircle1 - radiusCircle2)) {
    console.log("Окружности вписаны одна в одну");
} else if (d == (radiusCircle1 + radiusCircle2)) {
    console.log("Окружности соприкасаются в одной точке");
} else {
    console.log("Окружности пересекаются");
}

// 11. Пользователь вводит 2 числа и операцию (+, -, *, /). Вывести результат или сообщени о ошибке.

 let number1 = 2, number2 = 3, operation = "+";

 switch (o) {
     case "+":
        console.log(number1 + number2);
         break;
     case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
            break;  
    case "/":
         if (number2 == 0)
         console.log("Division by zero");
         else 
         console.log(number1/number2);
             break;  
     default:
        console.log("Error");
         break;
 }

// 12. Найти сумму первых 20 натуральных чисел кратных 5.

let sum = 0, number = 0; 

for (let i = 0; i < 20; ) {
    if (number % 5 == 0) {
        i++;
        sum = sum + number;
    };
    number++;
}   console.log("Сумма равна = " + sum, "Число равно = " + --number);

// 13. Составьте программу, выводящую в консоль квадраты чисел от 10 до 20.

let squareNumber3 = 0, number3 = 10;

while (number3 != 21) {
    squareNumber3 = number3 ** 2;
    console.log(squareNumber3);
    number3++;
}

// 14. В бригаде, работающей на уборке сена, имеется N сенокосилок.Первая сенокосилка работала m часов,
// а каждая следующая на 10 минут больше, чем предыдущая.Сколько часов проработала вся бригада?

let numberCut = 5, mHoures = 1, time = 0;

mHoures = mHoures * 60;

for (let i = 1; i <= numberCut; i++) {
    time = time + mHoures;
    console.log("Время работы " + i + "-ой косилки " + mHoures);
    mHoures = mHoures + 10;
    
//    console.log(time);
}   time = time / 60;
    console.log("Вся бригада отработала " + time + " часов");

//  15. Найти произведение двузначных нечетных чисел кратных 13.

let number4 = 10, multiplication = 1;
   
for (number4 = 10; number4 < 99; number4++) {
    if(number4 % 2 != 0 && number4 % 13 == 0){
        console.log(number4);
         multiplication *= number4;     
    }
    
} console.log("произведение двузначных нечетных чисел кратных 13" + multiplication);

// 16. Дан прямоугольник размерами NхM. Каждый раз от него отрезают квадрат со стороной 
//равной меьншей стороне оставшегося прямоугольника. 
// Например, квадрат 10х6, то сначала отрезаю 6х6, потом 4х4 и т.д. 
//Сколько нужно сделать отрезаний до того, как получится квардрат.

 let length = 10, height = 6, step = 0;

while (height != length) {

    step++;
    console.log(step);
    
    length -= height;
    console.log(length);

    if (height == length)
    break;
    
    height -= length;
    console.log(height);
    
    

    
} console.log("нужно сделать " + step + " отрезаний");

while (height != length) {
    step++;
    if (length > height) {      
        length = length - height;
    } else {
        height = height - length;
    }
}

// 18. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).

let x3 = 0, y3 = 1, q = 50, temp;

for(q = 2; q <= 50; q++){
    temp = x3 + y3;
    x3 = y3;
    y3 = temp;
}

// 17. Пользователь задумал число от 1 до 100. Компьютер пытается его угадать (генерирует случайное число). После того, как компьютер называет число, пользователь говорит меьнше, больше или равно загадонному. Комьютер соотвественно генерирует заного число, но с учетом того, что сказал пользователь. 
// Вывести все числа, которые сгенерировал компьютер перед тем как угадать число пользваотеля (Игра Угадай).

let number5 = 87, min = 1, max = 100;

do  {
    let comp = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log

    }

    while(1)