var userName = "Вася";

const userSurname = "Пупкин";

var growth, weight;

growth = 180, weight = 0.89;

var weightKg = weight * 100;

console.log("Меня зовут " + userName + " " + " " + userSurname + ". Я вешу" + growth +" ц "+" Мой рост - "+weight+"кг.");

weightKg += 10, growth -=2;

console.log("Вася Пупкин потолстел и стоптался.");

userName = "Петя", weightKg *=2;

console.log("Теперь я Петя Пупкин и вешу в "+weightKg/100/weight+" больше, чем в молодости.");