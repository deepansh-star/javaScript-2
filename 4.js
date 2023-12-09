const products = [
    {name : "Laptop", price : 70000 }, 
    {name : "Mobile", price : 13000 },
    {name : "Bike", price : 150000 },
    {name : "Laptop Bag", price : 1300 },
] ;

let maxproduct = {name: "", price: 0} ;
let minproduct = {name: "", price: Number.MAX_VALUE } ;

for (let product of products) {
    if (product.price > maxproduct.price) {
        maxproduct = product ;
    }
    if (product.price < minproduct.price) {
        minproduct = product ;
    }
}

console.log(
    `The product with maximum ammount is ${maxproduct.name} which is priced at Rs. ${maxproduct.price}`
  );
  console.log(
    `The product with minimum ammount is ${minproduct.name} which is priced at Rs. ${minproduct.price}`
  );




