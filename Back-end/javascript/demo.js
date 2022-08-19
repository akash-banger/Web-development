// how javaScript works: 

//  1. The script gets loaded as a UTf-16 byte stream from either the network, cache, or a worker, and passed to a byte stream decoder.

// 2. The byte stream decoder decodes the bytes into tokens. The tokens are sent to the parser.

// 3. The parser generates nodes based on the tokens, and creates an Abstract Syntax Tree.

// 4. The interpreter walks through the AST and generates byte code.

// 5. The byte code and type feedback are sent to the optimizing compiler, which generates highly optimizied machine code.

// ways to add javaScript to webpages: 
// we always have to write script tag at the end of the html. bcz firstly the objects of html file should be loaded. 
// for the save we can use an EventListener called DOMContentloaded, than the script will always run after the loading of all the objects.

let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click', showMsg);
namasteBtn.addEventListener('click', inputMsg);

// function showMsg(){
//     alert("Namaste World!");       // alert will show a msg on the screen.
// } 

function inputMsg(){                                                                                                                                                         
    let name = prompt('Enter Name of Student');
    namasteBtn.textContent = 'Roll no. 1 ' + name;
}

// javaScript is a interpreted language.

// javaScript is  a dynamically typed language. you have to just use var for everything like int, char, string hehe.

// this content is covered in lecture 6,7 and 8 of javaScript.

var bool=true;
console.log(typeof bool);

var num = 5;
console.log(typeof num);

var string = "This is string.";
console.log(typeof string);

var nulll = null;
console.log(typeof nulll)

var undefinedd; 
console.log(typeof undefinedd)

var bignum = 232342231313212n;     // n must be written after your number to store the value in bigint datatype.
console.log(typeof bignum);


// keywords to store variable = let, const, var.


// Naming Conventions.

// Camelcase
let firstName = "Akash";
// PascalCase
let LastName = "Banger";
// SnakeCase
let middle_name = "is";


// const can be used to assign a particular value that can never be changed again.

const price = 99; 

// course Name (String)
var courseName = "web development";

// Payment Status (Boolean)
var isPaid = true;

//  Declaring a variale 
var modeOfPayment;

// Taking Input from User 
modeOfPayment = prompt("mode of payment ?")

// Output to User
alert(firstName + " sucessfully bought " + courseName + " using " + modeOfPayment);


// triple equal to (===) and double equal to (==) are two different different things 
// === see string and a number as different
// but == see string and a number as similar.


// DOM == document object model 

// all the elements in our html file like html tag, head tag, body tag etc. are called object.
// and full structure is called model.


// undefined and null are two different things.

// var Name; // undefined
// var name = null;  // null