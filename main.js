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
var Car = /** @class */ (function () {
    function Car(name, color) {
        this.name = '';
        this.color = '';
        this.name = name;
        this.color = color;
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(type, color, name) {
        var _this = _super.call(this, name, color) || this;
        _this.type = '';
        _this.type = type;
        return _this;
    }
    Audi.prototype.display = function () {
        console.log("Car is : ".concat(this.type, ", ").concat(this.color, ", ").concat(this.name));
    };
    return Audi;
}(Car));
var myAudi = new Audi('s500', 'pink', 'mercedes');
myAudi.display();
/**Nap chong*/
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("Typescript"));
