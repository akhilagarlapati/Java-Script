//1 program to check if number is divisible by 7 or not
let a=49;
if(a%7==0){
    console.log('number is divisible by 7')
}else{
    console.log('number is not divisible by 7')
}

//2 program to check if number is multiple of 3 or not
let  b=27;
 b%3 == 0 ? console.log('it is multiple of 3') : console.log('it is not a multiple of 3');

 //3 program to check if number is multiple of 3 or not
let  c=-51;
if(c>0){
    console.log('hey man..its a positive number')
}else{
    console.log('yup its a negative number')
}

//4 program to check if number is 3-digit number or not
let d=765
d>=100 && d<=999? console.log('hey man..its a 3-digit number') :console.log('hey man..its notr a 3-digit number');

//program to find the greatest number among two numbers
let e=5;
let f=6;
e>f?console.log(`${e} is the highest number`):console.log(`${f} is the highest number among two numbers`);
 
//program to print the greatest number among three numbers
let num1=8;
let num2=5;
let num3=7;
if(num1>num2 && num1>num3){
    console.log(`${num1} is the largest number`);
   
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is the largest number`);
}
else if (num3>num1 && num3>num2){
    console.log(`${num3} is the largest number`);
}
else{
    console.log('There is no largest number');
}

//program to print given three numbers in ascending/descending numbers
let arr=[21,26,52,-12]
arr.sort((a,b)=>a-b);
console.log(arr);
arr.sort((a,b)=>b-a)
console.log(arr)

//program to find the largest of three numbers
let largest=Math.max(num1,num2,num3);
console.log(largest);

//wap to find the largest of three numbers
let x=21
let y=22
let z=23
let largestt=Math.max(x,y,z);
console.log(largestt)

//JS Program check if a number is divisible by 7 or not using a ternary operator?
//condition ? if : else
//49
//49%7=0
let a1=49;
a1%7=='0'?console.log('it is divisible by 7'):console.log('it is not divisible by 7')

 //Write a program to check if a number is positive or not using a ternary operator?
 //num>=0==>positive else negetive
 let a2=-20;
 a2>=0?console.log('its +ve num'):console.log('its -ve num');

 











 