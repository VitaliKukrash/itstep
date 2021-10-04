import {Matrix} from "./matrix.js";
import {Animal} from "./animal.js";
import {Dog} from "./dog.js";
import {Vitirinar} from "./vitirinar.js";

let matrix = new Matrix(4,4);

matrix.show();

let animal = new Animal('','','Rex');

animal.makeNoise();

let dog = new Dog('meat','','Rex','boy');

dog.makeNoise();

let vitirinar = new Vitirinar();

vitirinar.treatAnimal(dog);


// 6) В главном файле app.js создайте массив типа Animal, в который запишите животных всех имеющихся у вас типов. В цикле отправляйте их на прием к ветеринару.
