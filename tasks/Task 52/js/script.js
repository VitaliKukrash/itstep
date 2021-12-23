let str1 = "ток"; 
let str2 = "кот";

let arr1 = str1.split('');
console.log(arr1);

let arr2 = str2.split('');
console.log(arr2);

arr1.sort();
console.log(arr1);

arr2.sort();
console.log(arr2);

if(arr1 = arr2){
    console.log("Строки состоят из идентичных букв") 
}else {
    console.log("Строки состоят из неидентичных букв") 
};