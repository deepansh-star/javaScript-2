const productDetails  = {
    name: "Asus TUF F15",
    price: 54599 ,
    color: "bLACK",
    hardDisk: "256 GB"
}

console.log("Below are the product details.");
for(let key of Object.keys (productDetails)) {
    console.log(`${key} : ${productDetails[key]}`);
}