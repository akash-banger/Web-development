const array = [1,2,3,4,5,6,7,8,9];
console.log(array);

// other way of making an array

const num = new Array(1,2,3,4,5,6,7,8,9)

//push(inserts new element at the last)
num.push(10);

// unshift(inserts new element at the starting)
num.unshift(0);

// pop(removes the last element of the array and returns it)
num.pop();

console.log(num)
// shift (removes the element from start and returns it)
num.shift();

// indexof (returns first occurence of your element)
console.log(num.indexOf(7,0));

// similarly lastIndexOf will start finding from last

// includes (some element if included or not)[only work for primitive datatypes]
console.log(num.includes(5,0));

// lets have another array of objects.
let channels = [
    {
        name: 'Akash Banger',
        subs: 5000
    },
    {
        name: 'techy world',
        subs: 4000
    },
    {
        name: 'badhiya bnaye ho',
        subs: 600
    }
]
// includes will not work here so we will use find

// find 
console.log(channels.find(function(check){
    return check.subs<5000 
}));

// arrow function

console.log(channels.find((element)=>{
    return element.name ==='Akash Banger'
}))

// joining two arrays 

let names1 = ['chin chuki'];
let names2 = ['mura'];
let names3 = names1.concat('naka',names2);

// concat method
console.log(names1.concat('naka',names2));

// slice method
console.log(names3.slice(1,3));

// using spead operator 
let names4 = [...names1,'naka',...names2,...names3];
console.log(names4);

// for-each 
names4.forEach(function(name,index){
    console.log(index,name);
})

// Join 
let student = ['S','h','i','v','a']
console.log(student.join(''))
student = student.join('')

// split 
console.log(student.split(''))

let cities = [
    {name: 'mumbai', population: 374982},
    {name: 'phagwara', population: 3743212},
    {name: 'jalandhar', population: 21982},
    {name: 'mehli', population: 834982},
    {name: 'ludhiana', population: 14982},
    {name: 'hoshiarpur', population: 99982}
];

// filter 
console.log(cities.filter(city => city.population>22000))

let numbers = [1,2,3,4,5];

// map 
console.log(numbers.map(num => num*2)) 

