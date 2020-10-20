let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//Build in objects
let now: Date = new Date();

//Array
let words: string[] = ["red", "blue", "green"];
let myNumbers: number[] = [1, 2, 3];
let truthy: boolean[] = [true, true, false];

//Class
class Car {}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
//1) when functions return 'any' types

const json = '{"x": 10, "y": 20}';
const cordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse return 'any' type
console.log(cordinates);

//2) when we declare a variable in one line and initialize it later

let colors = ["red", "green", "orange"];
let foundColor: boolean;

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "green") {
    foundColor = true;
  }
}

// 3) when we want a variable to have a type that can't be inferred

let numbers = [-10, 0, 12]
let numAboveZero: boolean | number = false // will be number above Zero or false i.e two type of value

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i]
  }
}