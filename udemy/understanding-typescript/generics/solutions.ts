class MyMap<T extends number|string> {
    private items :{[key :string] : T} = {}
    setItem(key :string, item :T) {
        this.items[key] = item;
    }
    getItem(key :string) {
        return this.items[key];
    }
    clear() {
        this.items = {};
    }
    printMap() {
        for (let key in this.items) {
            console.log(this.items[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem('apples'));
numberMap.clear();
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();