// 1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.
var button=document.getElementById("calc");
button.onclick = function(){

    let x = + document.getElementsByTagName("p").item(0).textContent;
    console.log(x);
    document.getElementsByTagName("p").item(0).innerHTML = x+1;
}

// 2. Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.

var button1=document.getElementById("calc2");

button1.onclick = function(){
    let b=document.createElement("b");
    let x = document.getElementsByTagName("p").item(1).textContent;
    let p = document.getElementsByTagName("p").item(1);
 
    b.innerHTML = x;
    p.innerHTML = "";
    p.appendChild(b);
    
}


// 3. Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.

document.getElementById("calc3").onclick = function(){
    let classes = document.getElementsByTagName("div").item(0).classList;

    let ol = document.createElement("ol");
    for (let i = 0; i < classes.length; i++){
        let li = document.createElement("li");
        li.textContent = classes[i];
        ol.appendChild(li);
    }
    document.getElementsByTagName("div").item(0).append(ol);

}

// 4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.

document.getElementById("calc4").onclick = function(){
    x = document.getElementsByTagName("input").item(0).value;
    console.log(x);
}
