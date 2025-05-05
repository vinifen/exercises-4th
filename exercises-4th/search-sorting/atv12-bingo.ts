// BINGO –– Design and implement a class that generates a bingo card. The card consists of 25 numbers from 1 to 50, divided into five columns. There must be no repeated numbers. The toString() method should return the card in a formatted output.

class Bingo {
  constructor(){
    let bingo: number[][] = [];
    let used: number[] = []
    for (let i = 0; i < 5; i++) {
      bingo[i] = [];
      for (let j = 0; j < 5; j++) {
        let randomNumber: number = 0;
        let stop = false;
        while(!stop){ 
          randomNumber =  Math.floor(Math.random() * 50) + 1;
          for (let k = 0; k < used.length; k++) {
            
            if(used[j] === randomNumber){
              stop = true;
              break;
            }
            
          }
          stop = true;
        }
        used.push(randomNumber);
        console.log(randomNumber);
        bingo[i][j] = randomNumber;
        
      }
      
    }
    console.table(bingo);
  }
}

new Bingo();