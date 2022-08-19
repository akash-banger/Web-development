console.log("this is mod.js");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+= element;
    });
    return sum/arr.length;
}// not accessible by others to import 
// module.exports = average; // now accessible by index file

module.exports = {
    avg: average,
    name: "akash",
    repo: "GitHub"
};

// module.exports is an object 
// so 

module.exports.rollNO = 210010007; // will take a key rollNO and its value and we can use it in our index file 