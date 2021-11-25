// 1. Дано поле ввода и кнопка. Вводится число. При нажатии сгенерировать маркированный список из чисел от 1 до введенного.
// 2. Дана ссылка. Сделать так, чтобы при нажатии на ссылку не происходил переход по адресу.

// 4. Дано поле ввода. В поле ввода вводятся чила через пробел. Сделать так, чтобы при наборе текста в цифр выводилась сумма этих чисел.
// 5. Дано 2 поля ввода для чисел 4 радиокнопки (+,-,*,/). Выводить результат выранной операции над 2 числами, когда выбирается сама операция. В случае неккоретного ввода чисел предусмотреть вывод сообщение об этом вместо результат.


var button=document.getElementById("calc");

button.onclick = function(){
    let ul = document.createElement("ul");

    let count = document.getElementById("a").value;
    console.log(count);
    for(let i = 1; i <= count; i++){
        let li = document.createElement("li");
        li.innerHTML = `Пункт ${i}`;
        ul.appendChild(li);
    }
    button.appendChild(ul);
}

// 3. Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и выводился порядковый номер блока, а при уведении курсора все возвращалось в исходное состояние.
document.querySelector(".block").onmouseover = function(event){
    if(event.target.classList.contains("block")){
        event.target.classList.add("mig");
    }
}