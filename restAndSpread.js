// reduce helper

function addNumbers(numbers){
  return numbers.reduce((sum, number)=>{
    return sum + number;
  }, 0);
}

addNumbers([1,2,3,4,5]);

// with rest operator
function addNumbersTwo(...numbers){
  return numbers.reduce((sum, number)=>{
    return sum + number;
  }, 0);
}

addNumbersTwo(1,2,3,4,5);

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'blue'];
const fallColors = ['fire red', 'fall orange'];
//defaultColors.concat(userFavoriteColors);

// refactored with the spread operator
[ 'white', ...fallColors, ... defaultColors, ...userFavoriteColors];

// example of both
function validateShoppingList(...items){
  if(items.indexOf('milk') < 0){
    return ['milk', ...items];
  }
  return items;
}
validateShoppingList('oranges', 'bread');

// how to change obj method?
const MathLibrary = {
  calculateProduct(...rest){
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  }, 
  multiply(a,b){
    return a * b;
  }
};