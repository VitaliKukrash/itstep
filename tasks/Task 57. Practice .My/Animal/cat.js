"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cat = void 0;
var animal_1 = require("./animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(food, location, name) {
        return _super.call(this, food, location, name) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log("".concat(this.name, " \u0434\u0435\u043B\u0430\u0435\u0442 \u043C\u044F\u0443-\u043C\u044F\u0443"));
    };
    Cat.prototype.eat = function () {
        console.log("\u0415\u0441\u0442 \u0442\u0432\u043E\u044E ".concat(this.food));
    };
    return Cat;
}(animal_1.Animal));
exports.Cat = Cat;
