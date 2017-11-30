// generator: a function that can be 
// entered and exited several times 

function* shopping() {
  // #3 stuff on sidewalk

  // #4 walking down the sidewalk

  // #5 go into store with cash
  const stuffFromStore = yield 'cash';

  // #7 yield is entered again, but yield groceries

  // #8 walking back home, final value is groceries
  return stuffFromStore;
}

// #1, doesn't invoke
const gen = shopping();

// #2 invokes, enter generator
gen.next(); //returns {"done": false} , //leaving our house

// #6 walk into store, purchase items
gen.next('groceries'); //returns {"done": true} , // leaving the store with groceries