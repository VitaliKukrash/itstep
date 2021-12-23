function isEqual(str1, str2){

    if(str1.split("").sort().join("") == str2.split("").sort().join("")){
        return true;
    }

    return false;
}


function outArray(arr) {
    let i = 0;
    let  counter  = setInterval(function() {
          console.log(i);
          i++;
          if(i == arr.length)
            clearInterval(counter);
        }, 3000);
}

outArray([1,2,3,4,5]);

// 3. Напишите функцию, которая на вход получает произвольное количество аргументов и возвращает массив, 
// состоящих только из уникальных значений параметров функции.

let arr = []; 

function getArrayUnic(){
    for (i = 0; i < arguments.length; i++){
    let x = arguments[i];
    
       for(let j = i+1; j < arguments.length; j++){
           if (arguments[j] == x){
               for(let k = j+1; k <= arguments.length; k++){
                   
                arguments[k-1] = arguments[k];
                    
               } 
               arguments.length--;
               j--;
           }
       }
    arr[i] = arguments[i];
     } return false;
}; 

getArrayUnic(1, 2, 3, 5, 2, 2, 2);

console.log('arr:', arr.join());


// 4. Написать функцию, принимающую в аргументах массив и возвращающую новый массив, 
// в котором отсортированы все нечетные числа по возрастанию, четные числа по убыванию, 
// но при этом сами чётные и нечетные числа остаются на своих местах. 
// ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).

arr = [7, 3, 4, 9, 5, 2, 17];

function getSort(array){

    array = array.sort(((a, b) => b - a)).reverse();
    
    return true;
};

getSort(arr);

console.log(arr);


// 8. Создать массив на 100 элементов и заполнить его случайными числами. Найти разницу между максимальным и мнимальными элементами.



function getDifference(){

    let n = 100; a = [], min = 1, max = 1000, numberMin = 0, numberMax = 0;

    for (i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } console.log(a);
    
    numberMin = a[0];
    
    for (i = 0; i < n; i++){
        if (numberMin > a[i])
        numberMin = a [i];
    } console.log(numberMin);
    
    numberMax = a[0];
    
    for (i = 0; i < n; i++){
        if (numberMax < a[i])
        numberMax = a [i];
    } console.log(numberMax);
    console.log(numberMax - numberMin);
    return true;

} 



getDifference();

// console.log('a:', a.join());

// 9. Сделать туже самую задачу из предыдущего пункта для двумерного массива 10х10.

let matrix = [];

function getTwoDimensionalArray(){
    
    for (let i = 0; i < 10; i++){
        matrix [i] = [];   
        for (let j = 0; j < 10; j++){
            matrix [i][j] = Math.floor(Math.random() * (max - min)) + min;         
        } 
    }
    
    console.log(matrix);

    numberMin = matrix[0][0];
    
    for (i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
        if (numberMin > matrix[i][j])
        numberMin = matrix [i][j];
        }
    } console.log(numberMin);

    numberMax = matrix[0][0];
    
    for (i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
        if (numberMax < matrix[i][j])
        numberMax = matrix [i][j];
        }
    } console.log(numberMax);
    console.log(numberMax - numberMin);
    return true;
};

getTwoDimensionalArray();

// 10. Написать функцию, которая проверяет 2 числа на дружественность (2 числа называются дружественными, если сумма делителей этих чисел, не влчючая сами числа, равны).

function getFriendlyNumbers(a, b){

    let c = []; d = [], resultA = 0, resultB = 0;
    for (let i = 0; i < a / 2; i++){
        if (a % i == 0){
            c [i] = +i;
            resultA = c.reduce((sum, current) => sum + current, 0);
        }
    } console.log(c);
    console.log(resultA); 

    for (let i = 0; i < b / 2; i++){
        if (b % i == 0){
            d [i] = +i;
            resultB = d.reduce((sum, current) => sum + current, 0);
        }
    } console.log(d);
    console.log(resultB); 

    if(resultA == resultB){
        console.log("числа называются дружественными");
    } else console.log("числа называются Недружественными");
};

getFriendlyNumbers(48, 95);


// 11. Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. 

function getArrayWithoutRepetitions(ArrayA, ArrayB){
    let ArrayC = [];

    ArrayC = ArrayC.concat(ArrayA, ArrayB);
    console.log(ArrayC);
    return true;

};

getArrayWithoutRepetitions([1,2], [3,8,9]);
