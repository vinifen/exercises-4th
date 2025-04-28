export default class Clock {
  constructor (private numbers: number[]) {}

 
  getValidHours(){
    const validHours: number[][] = [];
    
    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.numbers.length; j++) {
        if (j === i) continue;

        for (let k = 0; k < this.numbers.length; k++) {
          if (k === i || k === j) continue;

          for (let l = 0; l < this.numbers.length; l++) {
            if (l === i || l === j || l === k) continue;

            const hourCombination: number[] = [this.numbers[i], this.numbers[j], this.numbers[k], this.numbers[l]];

            if((hourCombination[0] * 10) + hourCombination[1] < 24 && (hourCombination[2] * 10) + hourCombination[3] < 60){
              validHours.push(hourCombination);
            }
          }
        }
      }
    }

    return validHours;
  }

  closestToMidnight(){
    console.log("Vinicius Ferreira Novacoski & Nicolas Justino Veiga");

    const validHours = this.getValidHours();
    let resultMinutes = 0;

    let result: string = ""; 

    for (let i = 0; i < validHours.length; i++) {
      const minutes = (((validHours[i][0] * 10) + validHours[i][1]) * 60) + ((validHours[i][2] * 10) + validHours[i][3]);

      if(resultMinutes < minutes){
        resultMinutes = minutes;
        result = `${validHours[i][0]}${validHours[i][1]}:${validHours[i][2]}${validHours[i][3]}`;
      }

    }
    return "O número mais próximo da meia noite é: " + result;
    
  }
}

const clock = new Clock([ 5, 2, 4, 3]);
console.log(clock.closestToMidnight());