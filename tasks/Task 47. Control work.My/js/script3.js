// 3. Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и выводился порядковый номер блока, а при уведении курсора все возвращалось в исходное состояние.
document.querySelector(".container").onmouseover = function(event){
    if(event.target.classList.contains("block")){
        event.target.classList.add("mig");
    }
    let target = event.target;
    console.log(target);
}

document.querySelector(".container").onmouseout = function(event){
    if(event.target.classList.contains("block")){
        event.target.classList.remove("mig");
    }
}
