// Notes on ES6

// forEach Helpers

var colors = ["red", "green", "blue"];

// Classic ES5 for loop:
for (var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

//  ^^ we want to move away from this ES5 way of looping and instead use ES6 Helpers
// For loops are prone to typos, more logic = more chances for errors

// Example
colors.forEach(function(color){ //this is the iterator function passed into forEach
  console.log(color);
});

// Create an array of numbers
var numbers = [1,2,g3,4,5];

// Create a variable to hold the sum
var sum = 0; 

function adder(number){
  sum += number;
}
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
sum;

// example
var emails = ["Microsoft", "Cortana", "Welcome"];

function deleteEmail(email){
  email.remove();
}
emails.forEach(deleteEmail);
