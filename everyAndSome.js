var computers = [
{ name: 'Apple', ram: 24 },
{ name: 'Compaq', ram: 4 },
{ name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

// old example with for loop
for (var i = 0; i < computers.length; i++){
  var computer = computers[i];

  if(computer.ram < 16){
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

// every example
computers.every(function(computer){
  return computer.ram > 16;
});

// every looks at all values and seeks && to return 
// true if all are true, while some uses || to find 
// if any return true

// some example
computers.some(function(computer){
  return computer.ram > 16;
});

// array examples
var names = [
"Alex",
"Matt",
"Joe"
];

names.every(function(name){
  return name.length > 4;
});

names.some(function(name){
  return name.length > 4;
});

// web dev example

function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
}

var username = new Field("Awesome");
var password = new Field("hello_you");
var birthdate = new Field ("10/09/2017");

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field){
  return field.validate();
});

if (formIsValid){
  // Allow user to submit
  console.log("Allowed");
} else {
  // Show an error message
  console.log("Error");
}