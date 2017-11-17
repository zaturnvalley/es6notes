// Old example
const add = function(a,b){
  return a + b;
}
add(1,2);

// Arrow Function Example
const mult = (a, b) => {
  return a + b;
}

// Refactored even more
const div = (a, b) => a + b; // implicit return

// Advanced use of fat arrow functions
// if single param, can remove ()
const double = num => 2 * num;

// another example
const numbers = [1,2,3];
// refactored map method w arrow func.
numbers.map(num => 2 * num);

// object example
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    // fat arrow functions use lexical 'this'
    // if fat arrow isn't used, then need to either
    // bind method with this or set self var to this 
    // within function
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
team.teamSummary();

// fib example
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// ex

const profile = {
    name: 'Alex',
    getName: function(){
      return this.name;
    } 
};

profile.getName()