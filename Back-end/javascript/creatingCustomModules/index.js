console.log("this is index.js");

const mod = require("./mod");  // importing module
console.log(mod);       // printing module // here the function will not be accessible we have to export it form mod file
console.log(mod.avg([1,2,3,4,5]));

console.log(mod.rollNO); // rollNO will be printed

// so we can write modules like this and we can further use it in future.

