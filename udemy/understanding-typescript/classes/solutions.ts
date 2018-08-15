// 1
class Car {
    constructor(public name: string, public acceleration: number = 0){};

    public honk() {
        console.log("Toooooooot!");
    }

    public accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// 2
abstract class baseObject {
    constructor(protected width: number, protected length: number){}
}

class rectangle extends baseObject {
    public calcSize() : number {
        return this.width * this.length;
    }
}
const rec = new rectangle(5,2);
console.log(rec.calcSize());

// 3
class Person {
    private _firstName: string = "";
    get firstName(): string {
        return this._firstName;
    }
    set firstName(name: string) {
        if (name.length > 3) {
            this._firstName = name;
        } else {
            this._firstName = "";
        }
    }

}

const person = new Person();
person.firstName = "12";
console.log(person.firstName);
person.firstName = "1234";
console.log(person.firstName);