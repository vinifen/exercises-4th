// INCREASING – Model a class that has as an attribute a one-dimensional array of 20 integers (received by the constructor). Implement an iterative method that returns whether this array is in ascending order. Abandon the check as soon as you notice otherwise.

import OneDimensionalArray from "./One-dimensional-array";

const randomArray = [42, 7, 85, 13, 61, 29, 94, 5, 70, 31, 16, 99, 23, 2, 54, 77, 11, 68, 38, 46];
const increasingArray = [2, 5, 7, 11, 13, 16, 23, 29, 31, 38, 42, 46, 54, 61, 68, 70, 77, 85, 94, 99];

console.log("Result 1:");
const array1 = new OneDimensionalArray(randomArray);
console.log(array1.increasing());

console.log("Result 2:");
const array2 = new OneDimensionalArray(increasingArray);
console.log(array2.increasing());