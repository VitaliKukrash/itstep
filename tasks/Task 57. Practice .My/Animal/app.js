"use strict";
//Задача 2.
// 1) Создать класс Animal и расширяющие его классы Dog, Cat, Horse. 
// 2) Класс Animal содержит переменные food, location и методы makeNoise, eat, sleep. Метод makeNoise, например, может выводить на консоль "Такое-то животное спит".
// 3) Dog, Cat, Horse переопределяют методы makeNoise, eat. 
// 4) Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. 
// 5) Создайте класс Ветеринар, в котором определите метод void treatAnimal(Animal animal). Пусть этот метод распечатывает food и location пришедшего на прием животного. 
// 6) В главном файле app.ts создайте массив типа Animal, в который запишите животных всех имеющихся у вас типов. В цикле отправляйте их на прием к ветеринару.
exports.__esModule = true;
var cat_1 = require("./cat");
var cat = new cat_1.Cat("fish", "house", "fire");
console.log(cat);
