const inventory = [{name: "soap", price: 1.99, quantity: 12, lowStockLevel: 5},
    {name: "shampoo", price: 4.99, quantity: 8, lowStockLevel: 5},
    {name: "detergent", price: 10.99, quantity: 4, lowStockLevel: 5},//defining our products
    {name: "conditioner", price: 4.49, quantity: 15, lowStockLevel: 5},
    {name: "deodorant", price: 2.99, quantity: 3, lowStockLevel: 5}];

function displayProductDetails(x){
let inStockStatus = (x.quantity > x.lowStockLevel) ? "In Stock": "Low Stock"; //ternary operator to create stock status   
let productCheck = console.log(`The product is: ${x.name}, the price is $${x.price}, ${x.quantity} are available, status: ${inStockStatus}`);
return productCheck;
}
displayProductDetails(inventory[1]);
function updateStock(x, unitsSold){
x.quantity = (x.quantity-unitsSold);//update quantity and status 
let inStockStatus = (x.quantity > x.lowStockLevel) ? "In Stock": "Low Stock";
let newStatus = console.log(`The new quantity is ${x.quantity}, status: ${inStockStatus}`);   
return newStatus;
}

let txt="Low stock products are: ";
function checkLowStock(x){
if (x.quantity <= x.lowStockLevel) {
txt += x.name + " "
}
return txt;
}
inventory.forEach(element => {checkLowStock(element)});//for each iterates function over all elements
console.log(txt);


function calculateInventoryValue(x){
let num=0;
for (i=0; i<x.length;i++){
let totalValue = (x[i].price*x[i].quantity);//loops over the length of inventory
num+=totalValue;//accumulate total value
}
let total = console.log(`The total inventory value is $${num}`);
return total;
}
calculateInventoryValue(inventory);

function processSale(x,y){
let pName = inventory.find(item=>item.name===x.name);
if (!pName){
    return console.log("The product is not in the inventory");
}
else{
    return updateStock(x,y);
}
}
processSale(inventory[1],0);