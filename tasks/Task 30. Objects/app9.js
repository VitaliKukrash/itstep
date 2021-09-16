// Проверка объукта на пустотн

let user = {};

function isEmpty(object){
for(key in object){
     return false;
  }  return true;
}; 

let u ={};

console.log(isEmpty(u));

   
