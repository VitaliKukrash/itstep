//    1. Дана форма с одним полем ввода.
//    - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
//    - при убирании курсора из поля возвращать фон в начальное состояние.

/*input.onfocus = function() {
      this.classList.add('focused');
    }
input.onblur = function() {
      this.classList.remove('focused');
    }


let form = document.forms.my;

let elem = form.elements.name;

console.log(elem);

document.forms[0].addEventListener(('focusin'), () => elem.classList.add('focused'));


document.forms[0].addEventListener(('focusout'), () => elem.classList.remove('focused'));

// 2. Дано 3 поля ввода. После ввода ухода курсора из каждого поля необходимо выводить сообщение об ошибки под полем, если (focusout)
// - в первом поле ничего не введено
// - во втором поле введено не число
// - в третьем поле введен не email  

//5. Дано форма с полями:
//    - имя
//    - email
//    - выбор пола (радиокнопки)
//    - выпадающий языками программирования
//    - "Я не робот" (чекбокс)
// Если пользователь заполнит все данные, то необоходимо скрыть (не удалить) форму и отобразить эти данные.
// Если хотя бы одно поле не заполнено или заполнено некорректно, то нужно под полем вывести ошибку об этом.

let form1 = document.forms.form5;

let elem1 = form1.elements.email;

console.log(elem1);*/

document.forms.reg_form.onsubmit = function(event){
  let FIO = this.FIO.value;
  console.log(FIO);

  return false;
}