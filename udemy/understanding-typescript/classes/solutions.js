var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    ;
    Car.prototype.honk = function () {
        console.log("Toooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// 2
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return rectangle;
}(baseObject));
var rec = new rectangle(5, 2);
console.log(rec.calcSize());
// 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "12";
console.log(person.firstName);
person.firstName = "1234";
console.log(person.firstName);
