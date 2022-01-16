// 1. Дана площать квадрата. Найти его периметр.

function getSquare (s: number): number {
	
    return Math.sqrt(s)*4;
	};
   
// // 2. Даны длины сторон стреугольника - a, b, c. Определить, является ли он разностронним, ранобедренным или равносторонним

function getTriangle (a: number, b: number, c: number):  string {
    if (a == b && b == c) {
        return ("Треугольник равносторонний");
    } else if (a == b || b == c || c == a) {
        return ("Треугольник равнобедренный");
    } else {
        return ("Треугольник разносторонний");
    }
};

// 3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 

function isTriagle (a: number, b: number, c: number): string{
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return ("Такой треугольник возможно составить");
    } else {
        return ("Такой треугольник невозможно составить");
    }
};

// 4. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).

function isOld(a: number): string{
    if (a < 17) {
        return ("Вы молодой");
    } else if (a > 17 && a < 69) {
        return ("Вы взрослый");
    } else if (a > 70 && a < 99) {
        return ("Вы пожилой");
    } else 
         return ("Какой интересный возраст!");
};

// 5. Вывести в консоль квадраты чисел от 10 до 20.

function getQuadrate(a: number = 10, b: number = 20): void{
    for(let i = a; i <= b; i++){
        console.log (i * i);
        console.log ("i :", i)
    }
}; 

// 6. Найти сумму первых 20 натуральных чисел кратных 5.

function getSumNat(): void{
    let sum = 0, number = 0; 

    for (let i = 0; i < 20; ) {
        if (number % 5 == 0) {
            i++;
            sum = sum + number;
        };
        number++;
    }   console.log("Сумма равна = " + sum, "Число равно = " + --number);
    
};

// 7. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).

function getFibbonachi(n: number): void{
    let x = 0, y = 1, temp: number;

    for(let q = 2; q <= n; q++){
        temp = x + y;
        x = y;
        y = temp;
    } console.log(temp);
};
getFibbonachi(8);

// 8. Разработать функцию для вычисления НОД 2 натуральных чисел.

function getNOD(a: number, b: number): number{
    while (a != 0 && b != 0) {
        if (a > b){
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return (a + b);
};


// 9. Дано предложение. Вывести последнее слово в предложении.

function getLastWord(a: string): string{
     const str: string[] = a.split(' ');  //переменную str  задаем как массив строк
    return(str[str.length - 1]); 
};

getLastWord("Здравствуй, Дедушка Мороз!");

// 10. Дан массив. Найти сумму только положительных элементов массива.

function getPositiveArray(arr: number[]): number{
      let sum = 0;
    arr.forEach((item) => {
        if (item > 0){
            sum = sum + item;
        };
    }); console.log("sum :", sum);
    return sum;
};
getPositiveArray([1, 3, 5, -4]);

// 11. Дано предложение. Преобразуйте первую букву каждого слова строки в верхний регистр.

function getToUpperCase(a: string): string{
    const str: string = a.split(" ").map(function(item){
        return item[0].toUpperCase()+item.substr(1);
    }).join(" ");
    
    console.log(str);
    return (str);
};
getToUpperCase("снова пошел снег");

// 12. Проверить 2 массива на полное совпадение.
function areArraysSame(a: number[], b: number[]): boolean{
    if (a.length !== b.length)  {
        console.log("Массивы не совпадают, увы...");
        return false;
    }   
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                console.log("Массивы не совпадают, увы...");
                return false;
            }    
         
    }
    console.log("Массивы совпадают, ура!");
     return  true;
    
};
areArraysSame([1, 2, 3], [1, 2, 3]);

// 13. Удалить из предложения все знаки препинания (. , : ; ! ? -).

function deletePunctuationMarks (a: string): string{

    let punct: string = ". , : ; ! ? -";
    const str: string = a.split("").filter(function(item){
        return punct.indexOf(item) == -1;
    }).join("");
    console.log("str :", str);
    return str;
};
deletePunctuationMarks("a,g,;sdf,!sg");