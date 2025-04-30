// CLOSEST-END SEARCH
// In the same class from Exercise 4, implement a sequential search that:

// Verifies whether the searched number can possibly exist in the sequence, i.e., a[0] <= x <= a[n-1];

// Starts the search from the end (left or right) that is closest to the searched number;

// Stops the search as soon as it encounters an element that exceeds the searched number.

// Note: This search applies to sorted arrays, so you must invoke a sorting method before performing the search.

import OneDimensionalArray from "./One-dimensional-array";

const randomArray = [42, 7, 85, 13, 61, 29, 94, 5, 70, 31, 16, 99, 23, 2, 54, 77, 11, 68, 38, 46];
const increasingArray = [2, 5, 7, 11, 13, 16, 23, 29, 31, 38, 42, 46, 54, 61, 68, 70, 77, 85, 94, 99];

console.log("Result 1:");
const array1 = new OneDimensionalArray(randomArray);
console.log(array1.closestEndSearch(13));

console.log("Result 2:");
const array2 = new OneDimensionalArray(increasingArray);
console.log(array2.closestEndSearch(94));