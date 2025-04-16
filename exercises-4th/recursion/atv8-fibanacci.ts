function fibanacci(n: number): number{
  if(n === 0) return 0;
  if(n === 1) return 1;
  console.log(n)
  return fibanacci(n - 1) + fibanacci(n - 2);
}

console.log(fibanacci(4));