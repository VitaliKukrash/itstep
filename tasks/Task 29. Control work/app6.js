// 6. Проверить 2 массива на полное совпадение.

let a =[1, 6, 8], b = [1, 6, 2];

/*function comparison(a, b){
    for (let i = 0; i < a.length; i++){
        if ( a[i] == b[i]){
            return console.log("true");
        }
    }     
};*/

/*function comparison(element, index, array) {
    return element >= 10;
  }*/

  function isPositive (num, index){
      return num == b[index];
  }

  console.log(a.every(isPositive));

  /* let result = a.every(function(item, index, array){
        return item == b[index];
  });
  console.log(result); */