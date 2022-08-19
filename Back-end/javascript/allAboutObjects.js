// spoiler alert: everthing in javascript is an object.

// let lectures = 10;
// let section = 3;
// let title = 'javascript';   // long method

// const course = {
//     lectures: 10,
//     section: 3,
//     title: 'javascript',
//     notes: { // nested object
//         introduction: "welcome to JS course"
//     },
//     enroll(){ // function
//         console.log('you are sucessfully enrolled');
//     }
// };

// course.enroll()
// console.log(course);

// course.price = 999;


//short method

// factory function

function createCourse(lectures, section, title,){ // camel case for naming
    return {
        lectures: lectures,
        section: section,
        title: title,
        notes:{
            intoduction: "welcome to the "+title+" course"
        },
        enroll(){
            console.log('you are sucessfully enrolled');
        }
    };
}

// constructor function

function Course(title){    // pascal case
    this.title = title,  // this points to the object Course.
    this.enroll = function(){
        console.log('course bought');
    }
    // return this;  // you can use like this also instead of using keyword new.
}

// const course = new Course('javascript');
// console.log(course);

// delete course.title; // deleting a property from the object.
// console.log(course);

// course.checkEnrollment = function(){ // making function
//     console.log('few users are enrolled');
// }



// all the primitive datatypes in js are also an object.. imutable object to be precise
// everything in js is an object

// const course = new Course('js');
// console.log(course.constructor); // constructor of object course.
// console.log(Course.constructor); // construector of Course.


const Course_1 = new Function('title',
    `this.title = title,
    this.enroll = function(){
    console.log('course bought');
}
`)

const course_2 = new Course_1('javascript');
console.log(course_2.title);
course_2.enroll();

/// difference between the primitive datatype and reference datatype.

let number = 10;
let number_1 = number; // pass by value
number = 15;

console.log(number);
console.log(number_1);

// reference datatype
let obj = {number: 10};
let obj2 = obj;   // pass by reference

obj.number = 15; // change of obj will lead to the change in the obj2 also
console.log(obj);
console.log(obj2);


// cloning an Object so it will not pass by reference and if you change the content of object1 it will not effect the content of object2.

const course_3 = {
    title: 'javascript',
    enroll(){
        console.log('you have been sucessfully enrolled');
    }
};

const course_4 = { ...course_3};

// another way of cloning

const course_5 = Object.assign({},course_3);

for(let key in course_5){
    console.log(key, course_5[key]);
}

// same cheez different method 

for(let key of Object.keys(course_5)){
    console.log(key, course_5[key]);
}

// object.keys(course_5) will give you an array of all the keys of the course_5;

//cloning using for loop
const course_6 = {};
for(let key of Object.keys(course_5)){
    course_6[key] = course_5[key];
}

console.log(course_6);
