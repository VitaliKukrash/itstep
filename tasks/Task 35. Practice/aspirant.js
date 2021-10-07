// Задание #2
// Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
// а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
// б) Добавить конструктор в оба класса. 
// в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. 
// Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
// г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.


class Aspirant{
    firstName;
    lastName;
    group;
    scientificWork;
    averageMark;

    constructor(firstName, lastName, group, scientificWork, averageMark){
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.scientificWork = scientificWork;
        this.averageMark = averageMark;
    }

    snowAspirant(){
        console.log(`firstName - ${this.firstName}`,`lastName - ${this.lastName}`,`group - ${this.group}`,`scientificWork - ${this.scientificWork}`,this.averageMark);
    }

    getScholarship(){
        if(this.averageMark == 5){
            return 200;
        } else return 180;
    }
} export {Aspirant};