// GNOME SORT – Gnome Sort is a simpler algorithm than the bubble method itself. 
// It is based on the ancient technique in which garden gnomes sort flower pots from smallest to largest. 
// Since the pots are heavy, the little gnomes cannot carry them over long distances. 
// So, they compare and exchange them only two by two. 
// Basically, the gnome looks at the flower pot in front of him and also at the previous pot. 
// If they are in the correct order, the gnome goes to the next pot in the sequence. 
// Otherwise, the gnome exchanges one pot for the other and returns to the previous pot. 
// The limit conditions are: (1) if there is no previous pot, the gnome goes to the next pot; and (2) if there is no next pot, the job is over. 
// Thinking computationally, the algorithm extracted from this logic also goes through the sequence comparing elements two by two. 
// As soon as it finds an element in the wrong position, that is, a larger number before a smaller one, it swaps the position of the elements, and goes back with the element that was out of order until it finds its respective place. 
// The following are the steps to order the sequence of the first line.

import OneDimensionalArray from "./One-dimensional-array";

const randomArray = [42, 7, 85, 13, 61, 29, 94, 5, 70, 31, 16, 99, 23, 2, 54, 77, 11, 68, 38, 46];
const increasingArray = [2, 5, 7, 11, 13, 16, 23, 29, 31, 38, 42, 46, 54, 61, 68, 70, 77, 85, 94, 99];

console.log("Result 1:");
const array1 = new OneDimensionalArray(randomArray);
console.log(array1.gnomeSort());

console.log("Result 2:");
const array2 = new OneDimensionalArray(increasingArray);
console.log(array2.gnomeSort());