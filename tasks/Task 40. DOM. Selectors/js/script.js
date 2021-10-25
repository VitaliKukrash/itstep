// let element = document.getElementById("first-element");

// let elements = document.getElementsByTagName("div");

// console.log(elements.length);

// let sections = document.getElementsByClassName("first-section");

// let section = sections.item(0);// sections[0];

// let sectionDivs = section.getElementsByTagName("div");

// console.log(sectionDivs.length);

// let divs = document.querySelectorAll(".first-section div");

// console.log(divs.length);

// Все необходимые элементы находятся в index.html
// https://developer.mozilla.org/ru/docs/Web/API/Element

// 1. Элемент: #first-element. 
// - поменяйте "Я сосед" на "Я хороший сосед"
let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];

console.log(sections.item(0));

let neighbors = section.getElementsByClassName("neighbor");


for(let i = 0; i < neighbors.length; i++){
    neighbors.item(i).innerHTML =  "Я хороший сосед";
}
// - добавить к каждому соседу его номер, например, "Я хороший сосед №2"

for(let i = 0; i < neighbors.length; i++){
    neighbors.item(i).innerHTML +=`№${i+1}`;
}

// - оберните текст в элементах с классом "neighbor" в тег span

 for(let i = 0; i < neighbors.length; i++){
 neighbors.item(i).innerHTML =`<span>${neighbors.item(i).innerHTML}</span>`;
}

// - замените теги span на тег b

for(let i = 0; i < neighbors.length; i++){

    let span = neighbors.item(i).getElementsByTagName("span").item(0);
    console.log(neighbors.item(i));
    span.outerHTML = `<b>${span.innerHTML}</b>`;
   }

// - замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"

let fourth_neighbors = section.getElementsByClassName("fourth-neighbor");

// console.log(fourth_neighbors.item(0));

for(let i = 0; i < fourth_neighbors.length; i++){
    fourth_neighbors.item(i).innerHTML =  "Я последний хороший сосед";
}

// 2. Элемент: #second-element.

let element = document.getElementById("second-element");

for(let i = 0; )



// - добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
// - каждый четный пункт покрасить в красный цвет
// - каждому нечетному пункту добавить класс odd-element
// - элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

// 3. Элемент: #third-element.

// 4. Элемент: #fourth-element

// 5. Элемент: #fifth-element

