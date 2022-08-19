let animal = {   // curly brackets are called object literal.
    name: "cow",
    legs: 4,
    hands: "4, confused..?"
};
console.log(animal);
console.log(animal.name); // dot notation
console.log(animal["name"]); // bracket notation

let legsProp = "legs";
console.log(animal[legsProp]); // noice notation

// functions

function firstFunction(name){
    console.log("hello",name);
}
firstFunction("akash"); // badhiya bnaye ho.
firstFunction("rahul");


