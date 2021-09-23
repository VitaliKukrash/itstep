let a = 3;

Number.prototype.sign = function () {
    if (this < 0) {
        return "-";
    } else if (this == 0){
        return "0"; 
    } else {
        return "+";
    }
};

console.log(a.sign()); // понимает, что а - число и прототип для него Number;

Number.prototype.factorial = function () {
    let fact = 1;
    for (let i = 1; i <= this; i++) {
        fact *= i;      
    }  return fact;
};

console.log(a.factorial());