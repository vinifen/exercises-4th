function countBetween(a: number, b: number){
  
  if(a >= b) return;
  console.log(a);
  countBetween(a + 1, b);
 
}

countBetween(1, 20);