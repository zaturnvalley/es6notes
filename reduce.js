// old for loop example
var numbers = [ 10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

// reduce example

numbers.reduce(function(sum, number){
  return sum + number;
}, 0);