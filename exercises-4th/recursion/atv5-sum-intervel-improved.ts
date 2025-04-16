function sumIntervalImproved(a: number, b: number): number{
  let e = 0; 
  if(b > a){
    e = b;
  }else{
    e = a;
    a = b; 
  }

  if(a >= e) return 0;
  
  return a + sumIntervalImproved(a + 1, e);

}

console.log(sumIntervalImproved(30, 1));