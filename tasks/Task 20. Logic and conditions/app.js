let x = (3 && 5) || (4 && 0); // => 5 || 0 => 5
let y = 3 || (5 && 4) || 0; // 3 || 4 || 0 => 3
let z = !x || y; // false || 3 => 3

let condition1 = x > y;
let condition2 = x < y;
let condition3 = x == y;
let condition4 = x != y;
let condition5 = x >= y;
let condition6 = x <= y;
let condition7 = !x;

if(x== undefined || x == null || x == 0 || x == "") {//!x
    console.log("Error");    
    }

if (condition1) {
    
}

if (condition2) {
    
} else {
    
}

if (x > 0) {
    console.log("positive");
} else if (x < 0) {
    console.log("negative")
} else {
    console.log("0")
} 

let a = 4, b = 5;

if(a > b)
    {
    console.log(a);
    console.log(a++);
    }
else if(b > a)
    console.log(b);
else
    console.log("equal");

if (condition) {
    
} else {
    
}

let c = 7;

if (c % 2 == 0) {
    console.log("even");
} else if (c % 2 !=0) {
    console.log("odd");
} else {
    console.log("o");
}

// високосный или невисокосный год

let year = 2010;

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    console.log("leap");
} else {
    console.log("common");
}

// гриб 

let mushroom = 121;

if (mushroom % 10 == 0 ) {
    console.log(mushroom + "гриб");
} else if (mushroom % 10 == 1) {
    console.log(mushroom + "гриба");
} else {
    console.log(mushroom + "грибов");
}