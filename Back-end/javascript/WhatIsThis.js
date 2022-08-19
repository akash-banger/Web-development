// let counter = {
//     count: 0,
//     increment: function(){
//         counter.count++;
//     } 
// }
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.count);

// so its working 

// lets make a factory function now and make some number of objects 

// function createCounter(){
//     return{
//         count: 0,
//         increment: function(){
//             counter.count++;
//         } 
//     }
// }

// let counter = createCounter();
// let counter1 = createCounter();
// let counter2 = createCounter();

// // counter.increment();
// // counter.increment();
// // counter.increment();
// // counter.increment();

// // console.log(counter.count);   // so its working for counter as the counter.count++ is having same name as our object name 
// // ok lets try with counter1 

// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// console.log(counter1.count);  // wht....????
// console.log(counter.count);    // wht...........????????


// so we have to use this keyword 

// function createCounter(){
//     return{
//         count: 0,
//         increment: function(){
//             this.count++;
//         } 
//     }
// }

// let counter1 = createCounter()

// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// console.log(counter1.count);


// what if we use a global function to count and use this keyword in that shit 


// var count = 0;
// function incrementCounter(){
//     this.count++;
//     console.log(this); // here this refers to the window means global shit
// }
// incrementCounter()
// incrementCounter()
// incrementCounter()
// incrementCounter()
// incrementCounter()

function car(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + 'started');
        console.log(this);
    }
}

let Swift = new car('Swift');
Swift.start();


function carr(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + 'started');
        console.log(this);
    }
    return this;
}

let Maruti = carr('Maruti');
Swift.start();

// see the output of console.log(this) in both the cases
