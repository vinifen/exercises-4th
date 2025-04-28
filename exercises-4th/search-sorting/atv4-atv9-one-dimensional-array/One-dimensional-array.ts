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
  
  }
  
  public shifting(){
  
  }
  
}