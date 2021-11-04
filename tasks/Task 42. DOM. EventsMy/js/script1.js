// 4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.
var button = document.getElementById("calc4");
button.onclick=function(){
    let x = document.getElementsByTagName("input").item(0).value;
    let y = document.getElementsByTagName("input").item(1).value;
    document.getElementsByTagName("input").item(0).value = y;
    document.getElementsByTagName("input").item(1).value = x;
  
}


