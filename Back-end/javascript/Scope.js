// the scope is by default global 
var name = 'akash';
function nice(){
    var name1 = name;
    console.log(name1);
    var name = 'aksh';
    console.log(name);
}
console.log(name)
nice();

// these are some shits 

// block scope (will be useful only for let and const not for var)

// var x = 'nothing';

// here due to var the x goes to window object and now it will remain there till the end of the world 
// and if you change x now again thn it will be changed no scope things

// {
//     var x = 'something';
//     console.log(x);
// }

// console.log(x); // some shity thing happened
// // lets do same thing using let 

let x = 'nothing';

{
    let x = 'something';
    console.log(x);
}
console.log(x);