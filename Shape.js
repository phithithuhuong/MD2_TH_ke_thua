"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (value) {
        return this.color = value;
    };
    Shape.prototype.getFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (value) {
        this.filled = value;
    };
    Shape.prototype.toString = function () {
        return 'A Shape with color of ' +
            this.getColor() +
            ' and ' +
            (this.getFilled() ? 'filled' : 'not filled');
    };
    return Shape;
}());
exports.Shape = Shape;
var myShape = new Shape('blue', false);
console.log(myShape.toString());
