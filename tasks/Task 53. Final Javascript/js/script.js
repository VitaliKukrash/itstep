// 1.  Составить программу, печатающую разложение на простые множители заданного натурального числа n > 0 (другими словами, требуется печатать только простые числа и 

// произведение напечатанных чисел должно быть равно n; если n = 1, печатать ничего не надо)

function getPrime(n){
    let div=2;
    if (n < 0)
    return false;
    else for (let i = 0; i < n/2; i++){
        if (n % div == 0){
            console.log("div:", div);
            n=n/div;
            
        } 
        else div++;
        
        //if (n % div != 0){
            
        //} // else{
            //n=n/div;
            //arr[i]=div;
          //  div++;
         // console.log(n);
       // }
    // } // arr.push(n);
      }  console.log("n:", n);// console.log("arr:", arr.join());
}     
    

getPrime(123456789);

// 4. Дан массив целых чисел. Найти наибольшую сумму подряд идущих элементов. 
// (Например, [1, 0, -4, 5, 6, -7,-2, 3, 8] -> максимальная сумма: 13)

function getMaxSum(arr){
  let maxSum = 0;
  let intermediateSum = 0;
  for(let item of arr){
      intermediateSum += item;
      maxSum = Math.max(maxSum, intermediateSum);
      if (intermediateSum < 0) intermediateSum = 0;
  }
  console.log("maxSum :", maxSum);
  return maxSum;
};

getMaxSum([2, -1, 2, 3, -9]);


// 5. Дано 2 массива и число K. Найти по 1 числу из каждого массива, которые дадут наиближайшую сумму к числу К.


/*   let c =[], d = [], num = 0;
  for(let i = 0; i < a.length; i++){
      c[i] = a[i] - k;
  }console.log("c:", c);

  for(let i = 0; i < b.length; i++){
      
      for (j = 0; j <b.length; j++){
          d[num] = c[i] - b[j];
          num ++;
          console.log("i:", i, "j:", j, "c[i]:", c[i], "b[j]:", b[j], "d[j]", d[j]);
      };
  }console.log("d:", d);
  
  return true;
*/
function getSumFromArray(arrA, arrB, k){
  let sum = 0, itemB, itemA, result=0, count=100;
  for (let i = 0; i < arrA.length; i++){
      let x = arrA[i];
      console.log("itemA", itemA);
      for (let j =0; j < arrB.length; j++){
        console.log("arrA[i] :", arrA[i], "arrB[j] :", arrB[j], "itemA", itemA);
          sum = x + arrB[j];
          console.log("sum:", sum);
          result = Math.abs(sum - k);
          
          console.log("result:", result);
          console.log("count :", count)
          if (result < count){
              count = result;
              itemB=arrB[j];
              console.log("arrA[i] :", arrA[i]);
              itemA=arrA[i];
              console.log("itemA :", itemA);
          }
      }
  } console.log("sum",sum, "count", count, "itemA ", itemA, "itemB", itemB);
  return true;
}; 


getSumFromArray([1, 3, 6], [2, -4, 7], '13');

// 6. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, но их нету в 3 массиве.

function getElemFromArr(arrC, arrD, arrE){
   // let arrRezult = [];
   let arrCC = [];
   let arrDD = [];
   let arrEE = [];
   let arrCDE = [];
   let count = 0;

   for (let str of arrC){
     if (!arrCC.includes(str)){
      arrCC.push(str);
     }
   } console.log("arrCC :", arrCC.join());
   for (let str of arrD){
    if (!arrDD.includes(str)){
     arrDD.push(str);
    }
  } console.log("arrDD :", arrDD.join());
  for (let str of arrE){
    if (!arrEE.includes(str)){
     arrEE.push(str);
    }
  } console.log("arrEE :", arrEE.join());
  arrCDE = arrCC.concat(arrDD, arrEE);
  //console.log("arrCDE :",arrCDE.concat(arrCC, arrDD, arrEE).join());
   console.log("arrCDE :",arrCDE);
  for(let str of arrCDE){
    if (arrCDE.includes(str)){
     console.log("str :", str) 
     count ++;
     console.log("count :", count)
    }
  }
  console.log("count :", count)
  return true;
};

getElemFromArr([1, 1, 3, 5], [1, 6, 7, 7], [1, 2 , 2, 7]);

// 7. Дан массив и число A.
//  Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.

function getAwithArr(arr, A){
  let rezult = [];
  
  for(let i=0; i < arr.length; i++){
    if (arr[i] > A){
      rezult.push(arr[i]);
    } else rezult.unshift(arr[i]);
      
    
  } console.log("rezult:", rezult.join());
  return true;
  
}

getAwithArr ([7, -3, 3, 8, 0, 2, 6], '5');

// 9. Дано предложение на русском языке. Определить, является ли оно панграммой.

function isPangram(str){
  let rezult = [];
  let rezultRezult = [];
  let punct = ".,:;!?-";
  /* \s - это регулярное выражение для "пробелов", 
  а g - это "глобальный" флаг, что означает соответствие всем \s (пробелам).
 Отличное объяснение + можно найти here.
В качестве дополнительной заметки вы можете заменить контент между одинарными кавычками на все, 
что хотите, чтобы вы могли заменить пробелы любой другой строкой.
  */
  str=str.replace(/\s+/g, '');
  console.log("str :", str)
  rezult=str.split("").filter(function(item){
    return punct.indexOf(item) == -1;
});
  console.log("rezult :", rezult);

  for (let item of rezult) {
    if (!rezult.includes(item)) {
      rezultRezult.push(item);
    } 
    
  } console.log("rezultRezult", rezultRezult);
    if(rezultRezult.length == 0) {
      console.log("Дано предложение является панграммой");
    } else console.log("Дано предложение не является панграммой");

  return true;
}  

isPangram("Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.");

// 10. Дана дата и число K. Определить день недели, который будет через K дней от данной даты.

function getDateNext(date, K) {
  let now = new Date(date);
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  now.setDate(date.getDate() + K);
  
  return days[now.getDay()];
}
let date = new Date(2022, 0, 3)
console.log(getDateNext(date, 3));

