// ES5 Version (lots of duplicate code)
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6 Version

// two variables
const { type, amount } = expense; // {} not an object
// const { amount } = expense; // but rather a reference
type; 
amount;

// example

var savedFile = {
  extension: 'jpeg',
  name: 'repost',
  size: 14040
};

function fileSummary(file){
  return `The file ${file.name}.${file.extension} 
  is of the size ${file.size}`;
}

fileSummary(savedFile);

// Destructured version
function fileSummaryTwo({ name, extension, size }, { color }){
  return `${color} - The file ${name}.${extension} 
  is of the size ${size}`;
}
fileSummary(savedFile, { color: 'red' });

// Destructuring Arrays

const companies = [
  'Google',
  'Facebook',
  'Uber'  
];

const [ name, name2, name3 ] = companies;
const [ name4, ...rest] = companies;
name2;
rest;

// Destructuring Arrays and Objects
const corp = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park'},
  { name: 'Uber', location: 'San Francisco'}
];

//es5 version
var location = corp[0].location;

//es6 destructured version

const [{location}] = corp; 
location; // returns mountain view
// this goes from the outside in, first elem in array then
// object

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

// using destructuring to get first elem
const { locations: [ location ] } = Google;

// use case

function signup({ username, password, email, dateOfBirth, city }){
  // create new user
}

// other code
// other code

const user = {
  username: 'myname',
  password: 'pass',
  email: 'test@test.com',
  dateOfBirth: '1/4/1970',
  city: 'Portland'
};
signup('myname', 'pass', 'email@email.com','2/2/1980', 'Seattle');


