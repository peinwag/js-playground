var MyMap = /** @class */ (function () {
    function MyMap() {
        this.items = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.items[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    MyMap.prototype.clear = function () {
        this.items = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.items) {
            console.log(this.items[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem('apples'));
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
