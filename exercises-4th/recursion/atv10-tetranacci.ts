function tetranacci (n: number): number {
  if(n === 0) return -1;
  if(n == 1 || n == 2) return 1;
  if(n == 3) return 2;
  if(n == 4 ) return 4;
  return tetranacci(n - 1) + tetranacci(n - 2) + tetranacci (n - 3) + tetranacci(n - 4);
}

console.log(tetranacci(5));