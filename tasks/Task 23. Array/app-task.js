let min = 1, max = 100, n = 10, k = 0, a=[]; 

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min +1)) + min;
    if (a[i] % 2 ==0) {
        k++;
    }
} console.log(k);


// найти максимальный

let number, b=[];

for(let i = 0; i < n; i++){
    b[i] = Math.floor(Math.random() * (max - min +1)) + min;   
}  

number = b[0];

for (let i = 0; i < n; i++){
    if (number < b[i])
    number = b[i];
}
console.log("максимальный" + number);

// среднеарифметическое

let average, sum = 0;

for (let i = 0; i < n; i++){
    sum =+ a[i];
}
average = sum / n;

console.log("Среднеарифметическое = " + average);

// Реверс (элементов массива, т. е. 0,1,2...10 станет 10,9,8...0)

let j = 0;

for (j = 0; j < n; j++){
    a[j] = Math.floor(Math.random() * (max - min +1)) + min; 
} console.log(a);


for (let i = (n-1), y = 0; i >= 0; i--, y++){
    b[i] = a[y];
} console.log(b); 

// 

let x = 5, m = 10;

do {

} while ();