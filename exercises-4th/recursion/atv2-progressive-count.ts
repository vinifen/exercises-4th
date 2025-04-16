function count(n: number){
  if(n < 1) return;
  count(n -1);
  console.log(n);
}

count(23);