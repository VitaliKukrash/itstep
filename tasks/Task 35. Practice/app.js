// Задание #1
// а) Создайте класс Phone, который содержит поля number, model и weight.
// б) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
// в) Создайте три экземпляра этого класса. 
// г) Выведите на консоль значения их переменных. 
// д) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – возвращает номер телефона. Вызвать эти методы для каждого из объектов.
 
// Задание #2
// Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
// а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
// б) Добавить конструктор в оба класса. 
// в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. 
// Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
// г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.

// Задание #3
// Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon). 
//А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(), так, 
// чтобы они выводили строки о размере животного.

// Задание #4
// а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
// б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
// в) Создать класс Basket, содержащий массив купленных товаров. 
// г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.


import {Phone} from "./phone.js";
import {Student} from "./student.js";
import {Aspirant} from "./aspirant.js";
import {Goose} from "./goose.js";
import {Dragon} from "./dragon.js";
import {BigAnimal} from "./biganimal.js";
import {SmallAnimal} from "./smallanimal.js";



let phone1 = new Phone(101, "nokia", 50);
let phone2 = new Phone(102, "huawei", 150);
let phone3 = new Phone(103, "xiaomi", 100);

phone1.showPhone();
phone2.showPhone();
phone3.showPhone();

phone1.receiveCall("Gena");

console.log(phone1.getNumber());

let student1 = new Student("Петя","Иванов","машиностроение",3);
let student2 = new Student("Ира","Петрова","программирование",5)

student1.snowStudent();
student2.snowStudent();

console.log(student1.getScholarship());
console.log(student2.getScholarship());

let aspirant1 = new Aspirant("Билли","Янсон","биология","тараканы",5);
let aspirant2 = new Aspirant("Мадонна","Стрит","исскуство","тараканы",4);

aspirant1.snowAspirant();
aspirant2.snowAspirant();

console.log(aspirant1.getScholarship());
console.log(aspirant2.getScholarship());

let Students = [];

Students.push(student1);
Students.push(student2);
Students.push(aspirant1);
Students.push(aspirant2);

console.table(Students);

Students.forEach(function(item){
    console.log(item.getScholarship());
});

let goose1 = new Goose(200);

console.log(` Вес животного - ${goose1.getSize()}`);