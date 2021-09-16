// 1. Создайте пустой объект user.
//2. Добавьте свойство name со значением John.

let user = {};

user.name = "John";

console.log(user.name);

// 3. Добавьте свойство surname со значением Smith.

user.surname = "Smith";

// 4. Измените значение свойства name на Pete.

user.name = "Pete";

console.log(user.name);

delete user.name;

console.log(user.name);