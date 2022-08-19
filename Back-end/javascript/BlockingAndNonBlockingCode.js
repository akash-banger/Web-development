// synchronous or Blocking => line by line execution
// Asynchronous or Non-Blocking => line by line executio not guaranteed => callbacks will fire


const fs = require("fs");
// let text = fs.readFileSync("/Text-Files/text.txt","utf-8");
// console.log(text);
// console.log("this is a message");



let text = fs.readFile("../../Text-Files/text.txt","utf-8",(a,b)=>{
    console.log(a,b);
})
console.log("this is a message");

// here a is the error(if any) and b is our data
// and this arrow function is our callback function;

// here fs.readfile is an Asynchronous function so it will do its work and at last it will call the call back function to give data and error 
// but for fs.readFileSync, it is an synchronous function so it will execute line by line and give the data and will give error if there is any at some particular point


