// generator: a function that can be 
// entered and exited several times 

function* shopping() {
  // #3 stuff on sidewalk

  // #4 walking down the sidewalk

  // #5 go into store with cash
  const stuffFromStore = yield 'cash';

  // #8 yield is entered again, but yield groceries

  // walking into laundry place
  const cleanClothes = yield 'laundry';

  // #9 walking back home, final value is groceries
  return [stuffFromStore, cleanClothes];
}

// #1, doesn't invoke
const gen = shopping();

// #2 invokes, enter generator
gen.next(); //returns {"done": false} , //leaving our house

// #6 walk into store, purchase items
gen.next('groceries'); 

// #10 returns {"value":["groceries","clean clothes"],"done": true} , 

// for of example of generator

function* colors(){
  yield 'red';
  yield 'blue';
  yield 'green';   
}

const gen = colors();
gen.next(); //returns {"value":"red","done":false}
gen.next(); //returns {"value":"blue","done":false}
gen.next(); //returns {"value":"green","done":false}
gen.next(); //returns {"done":true}

// this does the same thing as above, but shorter
// and pushing into array
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

// another example
const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Alex',
  manager: 'Steve',
  engineer: 'Dave'
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)){
  names.push(name);
}
