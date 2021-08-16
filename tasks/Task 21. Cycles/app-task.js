let sum = 0, i = 1;

while (i <= 100) {

    if ( i % 2 == 0) {
        
        sum += i;
    
    } 

    i++;
}

console.log(sum);

sum = 0, i = 2;

do { 

    sum += i;
    i += 2;
    
} while ( i<=100 );

console.log(sum);



for (sum = 0, i = 1; i <= 50; i++){

    sum +=i;
}

sum *= 2;

console.log(sum);

// Гипотеза Сиракуз

let n =1_000_000, count = 0;

while (n != 1) {
    
    if (n % 2 == 0) {

        n /= 2;
        
    }
    else {
        n = (n * 3 + 1) / 2;
    }

    count++;
}

console.log(count);

 n = 1; count = 0;

while (count != 51) {

     if (n % 7 == 0 && n % 5 !=0) {
         count++;
     }  
         n++;
     
    
}
console.log(--n);

// первые 10 чисел начиная со 100, которые / 21 и не / 14

n = 100; count = 0;

while (count !=10) {
    
    if (n % 21 && n % 14 !=0){
       
        console.log(n);
        count++;
    }
    
    n++;
}