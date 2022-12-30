class Account{
    minBal=200;
    bankId;
    bankHolderName;
   remainingBal= 1000;
   constructor(a,b,c){
     //console.log("I AM A CONSTRUCTOR")
     this.bankId=a;
     this.bankHolderName=b;
     this.age=c;
   }
   depositAmount(amount){
       this.balance= this.minBal+amount
   }
}
let a1=new Account(101,'akhila',18);
let a2=new Account(102,'Shivani',25);
console.log(a1)
console.log(a2)
a1.depositAmount(500)
console.log(a1)

//500+200=700

