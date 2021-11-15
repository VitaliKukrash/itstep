// 1. Дан список из 3 проивольных пунктов.
// - При нажатии на сочатние "Ctrl"+"+" добавить новый пункт;
// - При нажатии на сочатние "Ctrl"+"-" удалить последний пункт, если такое возможно.

document.addEventListener('keydown', function(event){
    if (event.key == '=' && event.ctrlKey){
    let li = document.createElement('li');
    li.textContent = document.querySelectorAll("ul > li").length+1;
    document.querySelector('ul').append(li);
    //li.innerHTML = '!';
    // document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>');
    }
    if (event.key == "-" && event.ctrlKey){
        if(document.querySelectorAll("ul > li").length > 0){
            document.querySelector("ul > li:last-child").remove();
        }
    }
    return false;
});
