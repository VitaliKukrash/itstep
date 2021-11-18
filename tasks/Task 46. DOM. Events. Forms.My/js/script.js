//    1. Дана форма с одним полем ввода.
//    - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
//    - при убирании курсора из поля возвращать фон в начальное состояние.

/*input.onfocus = function() {
      this.classList.add('focused');
    }
input.onblur = function() {
      this.classList.remove('focused');
    }
*/

let form = document.forms.my;

let elem = form.elements.name;

console.log(elem);

document.forms[0].addEventListener(('focusin'), () => elem.classList.add('focused'));


document.forms[0].addEventListener(('focusout'), () => elem.classList.remove('focused'));

// 2. Дано 3 поля ввода. После ввода ухода курсора из каждого поля необходимо выводить сообщение об ошибки под полем, если (focusout)
// - в первом поле ничего не введено
// - во втором поле введено не число
// - в третьем поле введен не email  

