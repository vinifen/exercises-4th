import Deck from "./Deck";

const deck1 = new Deck([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(deck1.insertionSort());
const deck2 = new Deck([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
console.log(deck2.insertionSort());
const deck3 = new Deck([11, 11, 1, 1, 1, 1, 1]);
console.log(deck3.insertionSort());