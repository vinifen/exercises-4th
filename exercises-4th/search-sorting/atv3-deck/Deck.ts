// DECK – Using the deck, apply the Selection Sort, Bubble Sort and Insertion Sort algorithms to the following arrangements. Obtain the number of comparisons and the number of exchanges made in each case. Use cards from 1 to 10 of the same suit (consider that the ace is 1). (a) First arrangement: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1. (b) Second arrangement: 10, 1, 9, 2, 8, 3, 7, 4, 6, 5. (c) Third arrangement: 4, 5, 6, 1, 2, 3, 7, 8, 9, 10.

export default class Deck {
  constructor(private array: number[]){}
  

  public selectionSort(){
    let comparison = 0;
    let swap = 0;
    for (let i = 0; i < this.array.length - 1; i++) {
      let position = i;
      for (let j = i + 1; j < this.array.length; j++){
        comparison++;
        if (this.array[j] < this.array[position]) {
          position = j;
        }
      }
      if(position != i){
        swap++;
        let aux = this.array[i];
        this.array[i] = this.array[position];
        this.array[position] = aux;
      }
    }
    return {array: this.array, comparison, swap}
  }

  public bubbleSort(){
    let comparison = 0;
    let swap = 0;
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = 0; j < this.array.length; j++) {
        comparison++;
        if(this.array[j] > this.array[j + 1]){
          swap++;
          let aux = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = aux;
        }
      }
    }
    return {array: this.array, comparison, swap}
  }

  public insertionSort(){
    let newArray: number[] = [this.array[0]];
    let comparison = 0;
    let swap = 0;
    
    for (let i = 1; i < this.array.length ; i++) {
      let j = newArray.length - 1
      comparison++;
      if(this.array[i] >= newArray[j]){
        newArray[j + 1] = this.array[i];
      }else{ 
        while (this.array[i] < newArray[j]){    
          swap++;
          newArray[j + 1] = newArray[j];
          newArray[j] = this.array[i];
          j--;
        }
      }
      
      
    }
    return {array: newArray, comparison, swap}
  }

}

