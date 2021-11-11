// 1. Дан квадратный зеленый блок.
//     - при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
//    - при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;
//     - при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.

document.querySelector(".square").onmouseover = function(event){
    if(event.target.classList.contains("square")) {
        event.target.classList.add("blue")
    }
}

document.querySelector(".square").onmouseout = function(event){
    if(event.target.classList.contains("square")) {
        event.target.classList.remove("blue")
    }
}

document.querySelector(".square").onclick = function(event){
    if(event.target.classList.contains("square") && event.which == 1) {
        event.target.classList.add("red")
    }
} 
// console.log("div".classList);

 document.querySelector(".square").addEventListener('contextmenu', function(event){
    if(event.target.classList.contains("square")) {
        event.target.classList.add("green")
    }
})
