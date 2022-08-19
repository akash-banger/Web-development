// classes are like special functions.

// class Product{        // pascal case
//     constructor(itemName, price, discount, productCode){
//         this.itemName = itemName,
//         this.price = price,
//         this.discount = discount,
//         this.productCode = productCode;
//     }
//     get getDiscoutValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
// }   

// let pencil = new Product('pencil', 60, 20, 'f59');

// console.log(pencil.getDiscoutValue);
// pencil.setDiscountValue = 7;
// console.log(pencil.getDiscoutValue);


class Product{
    constructor(itemName){
        this.itemName = itemName;
    }
    getitemName(){
        return this.itemName + " is a product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);   // super function calls the constructor of its parent function
    }
    getitemName(){
        return this.itemName + " is a furniture";
    }
}

let pencil = new Product('pencil');
let chair = new Furniture('chair');

console.log(pencil.getitemName());
console.log(chair.getitemName());




