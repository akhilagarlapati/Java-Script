function addition(a,b){
    return(a+b)
}
let addOperation=console.log(addition(2,2))

//inner function
function outer(){

    console.log("outer function")
    function inner(){
        console.log('inner function')
    }
   return inner 
}
let x = outer();
x();
 
//function example

function fruitProcessor(apples,oranges){
    let juice=`juice with ${apples} apples and ${oranges} oranges`
    return juice;
}
const fruitJuice=fruitProcessor(10,11) 
console.log(fruitJuice);


