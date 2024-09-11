
let arrayCreator = function(nameInput, priceInput, quantityInput, lowStockLevelInput){
    this.name = nameInput;
    this.price = priceInput;
    this.quantity = quantityInput;
    this.lowStockLevel = lowStockLevelInput;//we use an object constructor function because products are similiar
}
const soap = new arrayCreator("soap", 1.99, 12, 5);//new creates the object which THIS points at in () we specify arguments
const shampoo = new arrayCreator("shampoo", 4.99, 8, 5);
const detergent = new arrayCreator("detergent", 10.99, 10, 5);
const conditioner = new arrayCreator("conditioner", 4.49, 15, 5);
const deodorant = new arrayCreator("deodorant", 2.99, 3, 5);

function displayProductDetails(x){
inStockStatus = (x.quantity > x.lowStockLevel) ? "In Stock": "Low Stock"; //ternary operator to create stock status   
console.log(`The product is: ${x.name}, the price is $${x.price}, ${x.quantity} are available, status: ${inStockStatus}`);
}
