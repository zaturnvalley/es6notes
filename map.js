// Map Helper

var numbers = [1,2,3];

var doubleNumbers = [];

// With a classic for loop
for (var i = 0; i < numbers.length; i++){
  doubleNumbers.push(numbers[i] * 2);
}
doubledNumbers;

// With a Map helper
var doubled = numbers.map(function(number){
  return number * 2;
});

doubled;

// Example of plucking
var cars = [
{ model: 'Camaro', price: 'decent'},
{ model: 'Acura', price: 'mid-range'}
];

var prices = cars.map(function(car){
  return car.price;
});
prices;

// Example
function pluck(array, property){
  return array.map((obj) => {
    return obj[property];
  });
}

