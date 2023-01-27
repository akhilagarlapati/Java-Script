// function greeterhey(name){

//     function greet(greeting){
//         console.log(greeting +name)
//     }
//     greet('hey')
//     //greet('hello')
// }
// greeterhey('jonas')
// greeterhey('venu')

// //greeterhey('akhi')

// function add(a,b,c){
//     return a+b+c
// }
// //add(2,3,4)
// console.log(add(2,3,4))

let addTax=function(rate){
    return function(value){
        return value + value * rate
    }
}
let addVat=addTax(0.23)
console.log(addVat(100))
console.log(addVat(23))
