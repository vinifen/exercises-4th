function tribonacci (n: number): number {
  if(n === 0) return -1;
  if(n == 1 || n == 2) return 1;
  if(n == 3) return 2;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci (n - 3);
}

console.log(tribonacci(8));