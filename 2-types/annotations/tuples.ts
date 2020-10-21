const drink = {
  color: "brown",
  carbonated: true,
  suger: 40,
};

//ARRAY
const frooty = ["orange", false, 90];
frooty[0] = 100; // correct
frooty[4] = 300; // correct

//TUPLES

// to define a tuples
// each element of array indicates specific property like object
//[string, boolean, number] order will define tuple value
// most common example in CSV file

const pepsi: [string, boolean, number] = ["brown", true, 40];

// pepsi[0]= 50 //error
// pepsi[4] = 100 // error

// Another way to define tuple

type Drink = [string, boolean, number];

const coke: Drink = ["brown", true, 45];
const sprite: Drink = ["clear", true, 38];
const tea: Drink = ["brown", false, 0];
