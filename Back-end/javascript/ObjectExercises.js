function create(itemName, price, discount, itemCode){
    return{
        itemName: itemName,
        price: price,
        discount: discount,
        itemCode: itemCode
    };
}
// const product = create('nice',555,"20%",234234);
// console.log(product);

function Product(itemName, price, discount, itemCode){
    this.itemName = itemName,
    this.price = price,
    this.discount = discount,
    this.itemCode = itemCode;
}

const product = new Product('nice',555,"20%",234234);
console.log(product);
