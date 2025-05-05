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