export default class Order {
  constructor(
    private n1: number, 
    private n2: number,
    private n3: number,
  ){}
  
  public orderThree(){
    if (this.n1 > this.n2) {
      this.n1 = this.n1 + this.n2;
      this.n2 = this.n1 - this.n2;
      this.n1 = this.n1 - this.n2;
    }
    if(this.n1 > this.n3){
      this.n1 = this.n1 + this.n3;
      this.n3 = this.n1 - this.n3;
      this.n1 = this.n1 - this.n3;
    }
    if(this.n2 > this.n3){
      this.n2 = this.n2 + this.n3;
      this.n3 = this.n2 - this.n3;
      this.n2 = this.n2 - this.n3;
    }
    
    return this.n1 + "" + this.n2 + "" + this.n3;
  }

  public greatestOfThree() {
    if(this.n1 > this.n2 && this.n1 > this.n3){
      return this.n1;
    }
    if(this.n2 > this.n3 && this.n2 > this.n1){
      return this.n2;
    }
    return this.n3
  }

}