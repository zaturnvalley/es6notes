// old example

// function getMessage(){
//   const year = new Date().getFullYear();

//   return "The year is " + year;
// }
// getMessage();

// template string example

function getMessage(){
  const year = new Date().getFullYear();

  return `The year is ${year + 2}`;
  // return `The year is ${new Date().getFullYear()}`;
}
getMessage();

// PHP
// $data = {"device_id":"'.$device_id.'"'"}"'};

// JS Refactor using Template strings
const device_id = 5;
const data = `{"device_id": "${device_id}", "}"`;

const year = 2016;
const yearMessage = ` The year is ${year}`;
const yearMessageTwo = year;

// example
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

// another example
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}