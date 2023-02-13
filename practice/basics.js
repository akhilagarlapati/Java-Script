// let newDate=new Date(2023,2,11,9,8,2,34)
// let dat= newDate.getDate();
// console.log(dat)

// let yr = newDate.getFullYear();
// console.log(yr)

// let month=newDate.getMonth();
// console.log(month)

// newDate.setDate(29)
// console.log(newDate)

/*1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/
let today= new Date()
let dayList=['sunday','monday','tuesday','wednesday','thursday','friday','satuarday']
let day=today.getDay()
let time=today.getTime()
console.log(`Today is: ${dayList[day]}. current time is:${time}`)

/*4. Write a JavaScript program to find the area of a triangle where
 lengths of the three of its sides are 5, 6, 7. formula(√[s(s – a)(s – b)(s – c)])*/

 let sides=[5,6,7]
 function calcAverage(){
     let s=0   
 for(i=0;i<sides.length;i++){
      s=s+sides[i];
 }
 let A=s/2
 return Math.sqrt(A*((A-sides[0])*(A-sides[1])*(A-sides[2])))
}
console.log(calcAverage(sides))
//let area=Math.sqrt(A*((A-sides[0])*(A-sides[1])*(A-sides[2])))
//console.log(area)

/*5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
removing one letter from the end of the string and attaching it to the front. */


 

