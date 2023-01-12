
//inner function
function outer(){

    console.log("outer function")
    function inner(){
        console.log('inner function')
    }
   return inner 

}
let innerRef = outer();
innerRef();

//outer() //y cant we access inner function without the outer function
