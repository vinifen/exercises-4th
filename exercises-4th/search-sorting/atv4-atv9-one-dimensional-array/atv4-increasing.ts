// INCREASING – Model a class that has as an attribute a one-dimensional array of 20 integers (received by the constructor). Implement an iterative method that returns whether this array is in ascending order. Abandon the check as soon as you notice otherwise.

import OneDimensionalArray from "./One-dimensional-array";

const array = new OneDimensionalArray([1 , 0]);
console.log(array.increasing());