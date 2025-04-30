export default class OneDimensionalArray {
  constructor(private array: number[]){}
  
  public increasing() {
    let i = 0;
    while (this.array[i] <= this.array[i + 1]) {
      i++;
    }
    if(this.array.length - 1 == i) return true;
    return false;
  }
  
  public bubbleImproved(){
    let comparison = 0;
    let swap = 0;
    for (let i = 0; i < this.array.length - 1; i++) {
      let isSwapped = false;
      for (let j = 0; j < this.array.length; j++) {
        comparison++;
        if(this.array[j] > this.array[j + 1]){
          let aux = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = aux;
          swap++;
          isSwapped = true;
        }
      }
      if(!isSwapped) break;
    }
    return {array: this.array, comparison, swap}
  }
  
  public shifting(){
    for (let i = 0; i < this.array.length - 1; i++) {
      const randomNumber = Math.floor(Math.random() * this.array.length);
      [this.array[i], this.array[randomNumber]] = [this.array[randomNumber], this.array[i]]
    }
    return this.array;
  }
  
  public gnomeSort(){
    let comparison = 0;
    let swap = 0;
    for (let i = 1; i < this.array.length;) {
      comparison++;
      if(this.array[i - 1] > this.array[i]){
        [this.array[i - 1], this.array[i]] = [this.array[i], this.array[i - 1]];
        swap++;
        i--;
      }else{
        i++;
      }
    }
    return {array: this.array, comparison, swap}
  }
  
  public recursiveSelection(){
    // let comparison = 0;
    // let swap = 0;
    // for (let i = 0; i < this.array.length - 1; i++) {
    //   let position = i;
    //   for (let j = i + 1; j < this.array.length; j++){
    //     comparison++;
    //     if (this.array[j] < this.array[position]) {
    //       position = j;
    //     }
    //   }
    //   if(position != i){
    //     swap++;
    //     let aux = this.array[i];
    //     this.array[i] = this.array[position];
    //     this.array[position] = aux;
    //   }
    // }
    // return {array: this.array, comparison, swap}
    return this.recursiveSelectionAux(0);
  }
  
  private recursiveSelectionAux(position: number): number[] {
    if (position >= this.array.length - 1) return this.array;
  
    let minPosition = position;
    for (let i = position + 1; i < this.array.length; i++) {
      if (this.array[i] < this.array[minPosition]) {
        minPosition = i;
      }
    }
  
    [this.array[position], this.array[minPosition]] = [this.array[minPosition], this.array[position]];
    
    return this.recursiveSelectionAux(position + 1);
  }

  public closestEndSearch(number: number){
    this.bubbleImproved(); 
    console.log(this.array)
    const start = this.array[0];
    const end = this.array[this.array.length - 1];

    if(start > number || number > end){
      return false;
    }


    
    const distStart = number - start;
    const distEnd = end - number;


    if(distStart <= distEnd){
      console.log("start");
      for (let i = 0; i < this.array.length - 1; i++) {
        if(this.array[i] === number) return true;
      }
    }
    console.log("end");
    for (let i = this.array.length - 1; i != 0; i--) {
      if(this.array[i] === number) return true;
    }
    return false;
  }



}