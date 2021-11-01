function myclick(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x+y;
    
    button2.style.background = "white";
}

var button2 = document.getElementById("calc2")
button2.onclick = function(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x-y;
}

button2.addEventListener("click", function() {
    button2.style.background = "red";
});

button2.addEventListener("click", function() {
    calc.style.background = "red";
});

var button3 = document.getElementById("calc3")
button3.onclick = function(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);
    let z = document.getElementById("c").value;
    switch(z){
        case "+":
            document.getElementsByTagName("p").item(0).innerHTML = x+y;  
            break;
        case "-": 
            document.getElementsByTagName("p").item(0).innerHTML = x-y;  
            break;  
        default:
        document.getElementsByTagName("p").item(0).innerHTML = "Error";     
    }
    
}

var button4 = document.getElementById("calc4");
button4.onclick = function(){
    let x = Math.floor(Math.random() * (100 - 1)) + 1;
    
    let y = + document.getElementById("d").value;
    if(y < x){
        document.getElementsByTagName("p").item(0).innerHTML = (`Вы ввели меньшее число, загаданное число ${x}`);
        }
        else if (y > x){
            document.getElementsByTagName("p").item(0).innerHTML = (`Вы ввели большое число, загаданное число ${x}`);
        }
        else if (y == x){
            document.getElementsByTagName("p").item(0).innerHTML = (`Числа равны ${x}`);
        }
        else {
            document.getElementsByTagName("p").item(0).innerHTML = (`Error`); 
        }
    }
    
var button5 = document.getElementById("create");
button5.onclick = function(){
    let ul = document.createElement("ul");

for(let i = 1; i <= 10; i++){
    let li = document.createElement("li");
    //document.getElementsByTagName("button").innerHTML = `Пункт ${i}`;
    li.innerHTML = `Пункт ${i}`;
    ul.appendChild(li);
}

button5.appendChild(ul);

}





