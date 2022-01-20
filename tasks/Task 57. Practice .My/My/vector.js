"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.getLength = function () {
        // console.log(Math.sqrt(this.x**2 + this.y**2 + this.y**2));
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.y, 2));
    };
    Vector.prototype.getScalar = function (vector) {
        return (this.x * vector.x + this.y * vector.y + this.z * vector.z);
    };
    return Vector;
}());
exports.Vector = Vector;
