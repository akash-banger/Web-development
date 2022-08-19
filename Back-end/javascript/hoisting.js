sayHello();
console.log(i);
function sayHello(){
    console.log("Hello");
}
var i = 8;


// when we run a javascript program, then the first thing which happens is memory allocation and then 
// the thread of execution occurs 

// so during memory alocation
// for the funtion its code will be stored in memory block
// and for the varible it will be alotted a memory block with undefined value; 


// and when again the thread of execution occurs from line one the value of i is undefined at the time of console log so it will print undefined

// when we use let instead of var 
// then i will not be accessible at the secong line 
// bcz it will be in temponal deadzone 


// const cannot be remained undefined 

let foo 
var bar 
const baz;