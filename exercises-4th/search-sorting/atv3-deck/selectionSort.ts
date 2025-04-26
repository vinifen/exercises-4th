import Deck from "./Deck";


const deck1 = new Deck([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(deck1.selectionSort());
const deck2 = new Deck([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
console.log(deck2.selectionSort());
const deck3 = new Deck([4, 5, 6, 1, 2, 3, 7, 8, 9, 10, ]);
console.log(deck3.selectionSort());