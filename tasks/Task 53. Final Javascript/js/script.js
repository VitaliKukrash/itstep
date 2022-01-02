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

getElemFromArr(arrC, arrD, arrE){

}