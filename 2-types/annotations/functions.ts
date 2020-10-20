/* 
------------------- Type annotations for functions ------------------
Code we add to tell typescript what type of argument a function will receive and what type of value will return

const add1 = (a: number, b: number): number => {
  return a + b;
}

*/

/*
-------------- Type Inference of Functions -----------------
Typescript tries to figure out what type of value a function will return

const add2 = (a: number, b: number) => {
  return a + b;
}

 */

const add1 = (a: number, b: number): number => {
  return a + b;
};

const add2 = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorMsg = (data: number, message: string): number => {
  if (message) {
    throw new Error(message);
  }
  return data;
};

// Destructuring with annotations

const weatherInfo = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
