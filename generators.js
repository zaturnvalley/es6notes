// generator: a function that can be 
// entered and exited several times 

function* numbers() {
  yield;
}

const gen = numbers();
gen.next(); //returns {"done": false}
gen.next(); //returns {"done": true}