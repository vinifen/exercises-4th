export default class Palindromo {
  constructor(private word: string){}
  
  public isPalindromo() {
    return this.isPalindromoAux(0);
  }

  public isPalindromoAux(position: number): boolean{
    console.log(position);
    console.log(this.word[position], this.word[(this.word.length - position) - 1])
    
    if(this.word[position] == this.word[(this.word.length - position) - 1]){
      if((Math.floor(this.word.length / 2)) - 1 <= position){
        return true;
      }
      return this.isPalindromoAux(position + 1);
    }
    return false;
  }
  
}

// export default class Palindromo {
//   constructor(private word: string) {}

//   public isPalindromo(): boolean {
//     return this.isPalindromoAux(0, this.word.length - 1);
//   }

//   private isPalindromoAux(inicio: number, fim: number): boolean {
//     if (inicio >= fim) return true; 
//     if (this.word[inicio] !== this.word[fim]) return false;
//     return this.isPalindromoAux(inicio + 1, fim - 1); 
//   }
// }

