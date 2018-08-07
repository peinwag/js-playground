// Exercise 1 - arrow functions
const double = (val: number) => val * 2
console.log(double(10))

// Exercise 2 - arrow function w. default values
const greet = (name: string = 'Max') => {
    console.log("Hello, " + name);
};
greet();
greet("Patrick");

// Exercise 3 - spread operator
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - spread operator
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - destructuring arrays
let testResults:number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3)

// Exercise 6 - destructuring objects
let scientist = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);