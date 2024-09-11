const inventory = [{name: soap, price: 1.99, quantity: 12, lowStockLevel: 5},
    {name: shampoo, price: 4.99, quantity: 8, lowStockLevel: 5},
    {name: detergent, price: 10.99, quantity: 10, lowStockLevel: 5},
    {name: conditioner, price: 4.49, quantity: 15, lowStockLevel: 5},
    {name: deodorant, price: 2.99, quantity: 3, lowStockLevel: 5}];

function displayProductDetails(x){
let inStockStatus = (x.quantity > x.lowStockLevel) ? "In Stock": "Low Stock"; //ternary operator to create stock status   
let productCheck = console.log(`The product is: ${x.name}, the price is $${x.price}, ${x.quantity} are available, status: ${inStockStatus}`);
return productCheck;
}

function updateStock(x, int){
let newquantity = (x.quantity-int);//update quantity and status 
let inStockStatus = (newquantity > x.lowStockLevel) ? "In Stock": "Low Stock";
let newStatus = console.log(`The new quantity is ${newquantity}, status: ${inStockStatus}`);   
return newStatus;
}
function checkLowStock(x){

}