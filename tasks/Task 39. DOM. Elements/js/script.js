let element = document.getElementById("first-element");
console.log(element.tagName);
console.log(element);
// 
// 1. Элемент: #first-element. 
// - Добавьте ему класс www.
element.classList.add("www");

// - Удалите у него класс www.
element.classList.remove("www");

//  - Проверьте наличие у него класса www.
console.log(element.classList.contains("www"));

//  - Добавьте ему класс www, если его нет и удалите - если есть.
element.classList.toggle("www");

element.classList.toggle("www", false);

// - Узнайте количество его классов.

console.log(element.classList.length);

// - Выведите последовательно через console.log его классы.
console.log(element.classList);

// - Сделайте его красного цвета, размером 30px, добавьте ему границу
element.style.cssText='color: red; font-size: 30px; border: 2px solid black';

//  - Выведите название его тега в нижнем регистре
console.log(element.tagName.toLocaleLowerCase());

//  - Вставьте ему в конец span с текстом 'мой любимый спан'
let first_element = document.querySelector('#first-element');
let span = document.createElement('span');
span.innerHTML = 'мой любимый спан';
first_element.appendChild(span);

//  - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
// let ul = document.createElement('ul');
// ul.innerHTML += 
// first_element.appendChild(ul);
element.insertAdjacentHTML('beforeend', '<ul> <li> createElement </li> <li> appendChild </li> <li> insertBefore </li> <ul>');

//  - Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
element.insertAdjacentHTML('beforebegin', '<div class="neighbor"> еще один сосед </div>');

// 2. Элемент: #second-element.
//  - Вставьте перед ним span с текстом '!!!'.

let element2 = document.getElementById("second-element");
element2.insertAdjacentHTML('beforeBegin', '<span> !!! </span>');

// - Вставьте после него span с текстом '!!!'.
element2.insertAdjacentHTML('afterEnd', '<span> !!! </span>');

// - Вставьте ему в начало span с текстом '!!!'.
element2.insertAdjacentHTML('afterBegin', '<span> !!! </span>');

// - Вставьте ему в конец span с текстом '!!!'.
element2.insertAdjacentHTML('beforeEnd', '<span> !!! </span>');

// 3. Элемент: #third-element.
//  - Найдите первого потомка этого элемента и сделайте его текст красного цвета.
document.getElementById("third-element").firstElementChild.style.cssText = 'color: red';

//  - Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
//  - Найдите всех потомков этого элемента и добавьте им в конец текст '!'.