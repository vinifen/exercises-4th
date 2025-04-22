export default class Matrix {
  private matrixLength = 20;
  private m: number[];

  constructor(){
    this.m = [];
    for (let i = 0; i < this.matrixLength; i ++){
      this.m.push(Math.ceil(Math.random() * 20))
    }
    console.log(this.m);
  }
  
  public firstOccurrence(n: number){
    return this.firstOccurrenceAux(n, 0);
  }
  
  private firstOccurrenceAux(n: number, position: number): number{
    if(position >= this.matrixLength) return -1;
    if(this.m[position] == n) return position;
    return this.firstOccurrenceAux(n, position + 1);
  }
  
  public highestNumber(){
    return this.highestNumberAux(0);
  }
  
  private highestNumberAux(position: number): number{
    if(position == this.matrixLength - 1) return this.m[this.matrixLength - 1]
    let higthest = this.highestNumberAux(position + 1);
    if(this.m[position] > higthest) return this.m[position];
    return higthest;
  }

  public sumNumbers(){
    return this.sumNumbersAux(0);
  }

  private sumNumbersAux(position: number): number {
    if(position == this.matrixLength - 1) return this.m[this.matrixLength - 1];
    let sum = this.m[position] + this.sumNumbersAux(position + 1);
    return sum;
  }
  
  public numberOccurrence(n: number){
    return this.numberOccurrenceAux(n, 0);
  }
  
  private numberOccurrenceAux(n: number, position: number): number{
    if(position == this.matrixLength) return 0;
    
    let occurrences = 0;

    if(this.m[position] == n) {
      occurrences = 1;
    }
    return occurrences + this.numberOccurrenceAux(n, position + 1)
  }
}
