function sumInterval(a: number, b: number): number{
  if(a >= b) return 0;
  
  return a + sumInterval(a + 1, b);

}

console.log(sumInterval(1, 30));