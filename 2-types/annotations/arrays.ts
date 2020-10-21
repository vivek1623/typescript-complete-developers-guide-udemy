//add type if you are assigning empty array

const array1: string[] = [];

const array2 = ["vivek", "hasi"];

const dates = [new Date(), new Date()];

const carMakers: string[][] = [];

/*
WHY DO WE CARE ABOUT ARRAY TYPE

- TS can do type inference when extracting values from an array
- TS can prevent us from adding incompatiable value in the array
- We can get help with 'map', 'forEach', 'reduce' function
- Flexible - arrays can still contain multiple different types 
 */

//1) inference when extracting values from an array

const vivek = array2[0];
const hasi = array2.pop();

//2) prevent us from adding incompatiable value

// array2.push(100);

//3) help with 'map'

array2.map((name: string): string => {
  return name.toUpperCase();
});

//4) Flexible types

const importantDates: (Date | string)[] = [];
importantDates.push("16-09-2000");
importantDates.push(new Date("23-06-1990"));
// importantDates.push(100);

/*
 Where to use Typed Array
- Anytime we need to represent a collection of records with some arbitrary sort order
 */
