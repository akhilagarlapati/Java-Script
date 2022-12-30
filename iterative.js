
//program to print 1 to 10 numbers using a while loop
let i=1
while(i<=10){
    console.log(i)
    i++
}

//program to print 10 to 1 numbers using a while loop
let j=10
 while(j>0){
    console.log(j)
   j--
}

//program to print 15 to 10 numbers using for loop
for(i=15;i>=10;i--){
    console.log(i);
}

//program to print 1 to 10 odd numbers using for loop
for(i=1;i<=10;i=i+2){
    console.log(i);
}

//program to print first ten multiples of 4 using a while loop
let k=4;
while(k<=16){
    console.log('4*',k,'=',4*k)    
    k=k+4
}
console.log('***********')
//Write a program to print 1 to 10 odd numbers using while Loop
let h=1;
while(h<10){
    console.log(h)
    h=h+2
}

// Write a program to print 1 to 10 numbers using a do while loop
let g=1
do{
    console.log(g)
    g++
}
while(g<=10)

console.log('***********')
//Write a program to print 1 to 10 even numbers using a do while loop
let H=2;
do{
    console.log(H)
    H=H+2
}while(H<=10)
console.log('***********')
//Write a program to print a multiplication table of 6 using a while loop.
let G=1;
let K=6
do{
    console.log('6*',G,'=',K)
    K=K+6
    G=G+1
}while(K<65)

//sontha telivi:(
//Write a program Factors of 24 using while loop
//(Factors of 24 are 1, ,3, 4, 6, 12, 24)
// let arr3=[1,3, 4, 6, 12, 24];
// let l=arr3.length-6
// while(24%(arr3[l])==0){
//   console.log(`${arr3[l]} is factor of 24`);
//   l=l+1
// }

//Write a program Factors of 24 using while loop
//(Factors of 24 are 1, ,3, 4, 6, 12, 24)
//24%anything=0(24%1==0,24%3==0...24)
v=1;
 while(v<=24){
     if(24%v==0){
        console.log(`${v} is a factor of 24`)
     }
    v++
 }

//The while loop loops through a block of code as long as a specified condition is true
//so..it stops after once the condition is false,just like below case
v=1;
while(v<=24,24%v==0){
    
    console.log(`${v} is a factor of 24`)
    v++

}

// Write a program to print reverse of digits of numbers
let arr4=[2,3,4,5,6];
console.log(arr4.reverse())

//Write a program to read 5 numbers and print only the even numbers
//Write a program to print the Fibonacci number series up to a given number.
//Expected out 17 -: 0 1 1 2 3 5 8 13
let a1=0,b1=1;
  console.log(a1);
  console.log(b1);
for(let i=0;i<=10;i++){
    temp=a1+b1;
    console.log(temp);
    a1=b1;
    b1=temp;
}

//Write a program to check if a given number is an Armstrong number or not.
