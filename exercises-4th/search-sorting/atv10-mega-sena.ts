// Model a Mega Sena ticket such that a one-dimensional array of 6 to 20 numbers is received by the constructor. Assume the numbers are valid, in order, and non-repeating.

// After that, implement a method that receives the six winning numbers, in the order they were drawn, and returns the number of matches.

// Provide another method that returns, depending on the case, one of the following messages:
// "sena", "quina", "quadra", or "not a winner".

class MegaSena {
  private resultNumbers: number[] = []
  constructor(private numbers: number[]){}
  
  public winningDozens(dozens: number[]){
    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j <= dozens.length; j++) {
        if(this.numbers[i] === dozens[j]){
          this.resultNumbers.push(this.numbers[i]);
        }
        
      }
    }
    return this.resultNumbers;
  }
  
  public result() {
    switch (this.resultNumbers.length) {
      case 6:
        return "Jackpot";   
      case 5:
        return "Five hits"; 
      case 4:
        return "Four hits"; 
      default:
        return "No prize";   
    }
  }
}

const megasena = new MegaSena([1, 10, 6, 9, 2, 13, 20, 10, 7]);
console.log(megasena.winningDozens([8, 11, 2, 9, 6, 10]));
console.log(megasena.result());
