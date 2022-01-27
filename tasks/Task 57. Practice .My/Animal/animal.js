"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(food, location, name) {
        this.food = food;
        this.location = location;
        this.name = name;
    }
    Animal.prototype.makeNoise = function () {
        console.log("".concat(this.name, " \u0438\u0437\u0434\u0430\u0435\u0442 \u0437\u0432\u0443\u043A\u0438"));
    };
    Animal.prototype.eat = function () {
        console.log("\u0415\u0441\u0442 ".concat(this.food));
    };
    Animal.prototype.sleep = function () {
        console.log("".concat(this.name, " \u0441\u043F\u0438\u0442"));
    };
    return Animal;
}());
exports.Animal = Animal;
