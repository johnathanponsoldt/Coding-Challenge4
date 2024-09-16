// Task 1: Create an Inventory Array of Product Objects

const inventory = [

        { name: 'Football', price: 35, quantity: 10, lowStockLevel: 3 },
    
        { name: 'SoccerBall', price: 50, quantity: 5, lowStockLevel: 2 },
    
        { name: 'Basketball', price: 40, quantity: 7, lowStockLevel: 1 },
    
        { name: 'Baseball', price: 5, quantity: 15, lowStockLevel: 5 },
    
        { name: 'Volleyball', price: 30, quantity: 3, lowStockLevel: 1 }
    
];

// Task 2: Create a Function to Display Product Details

function displayProductDetails(product) {
    const stockStatus = product.quantity > product.lowStockLevel ? "In Stock" : "Low Stock";
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold) {
    product.quantity -= unitsSold;
    if (product.quantity < 0) product.quantity = 0;

    if (product.quantity === 0) {
        console.log(`${product.name} is out of stock.`);
   } else if (product.quantity <= product.lowStockLevel) {
    console.log(`${product.name} is now low in stock. Only ${product.quantity} left.`);
 } else {
    console.log(`${product.name} ${product.quantity}`);
 }
}
