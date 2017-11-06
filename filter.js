// Filter Helper

var products = [
{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
{ name: 'banana', type: 'fruit', quantity: 4, price: 11 },
{ name: 'orange', type: 'fruit',  quantity: 5, price: 2 },
{ name: 'celery', type: 'vegetable', quantity: 2, price: 13 },
{ name: 'carrot', type: 'vegetable', quantity: 10, price: 5 },
];

// For Loop Old way
var filteredProducts = [];
for (var i = 0; i < products.length; i++){
  if (products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// Filter Helper way:
products.filter(function(product){
  return product.type === 'fruit';
});

// ^^ Produces boolean, filters if truthy, don't need conditional 
// if statement because it'd be redundant

// Example: If type is veg, quant is greater than 0, 
// price is less than 10
products.filter(function(product){
  return product.type === 'vegetable' 
  && product.quantity > 0 
  && product.price > 4;
});