function message(n: number){
  if(n < 1){
    return;
  }else{
    console.log("Message: " + n)
    message(n - 1);
  }
}

message(10);