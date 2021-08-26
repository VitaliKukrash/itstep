let sum = 0, x = 1, n = 1, e = 0.0001;

do {
    sum = sum + x;
    n++;
    x = (x ** n) / n;
} while (x >= e);
console.log(sum, n, x);