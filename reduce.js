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

// example
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desk) {
    if (desk.type === 'sitting') {
        ++prev.sitting; 
    }
    if (desk.type === 'standing') {
        ++prev.standing; 
    }
    return prev;
}, { sitting: 0, standing: 0 });

// example using find
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(prev, arrNum) {
        if(!prev.find(function(prevNum){
            return prevNum === arrNum;
        })){
            prev.push(arrNum);
        } return prev;
    }, []);
  
}

unique(numbers);

function makeAjaxRequest(url, method){
  if(!method){
    method = "GET";
  }

  // logic to make the request
  return method;
}

makeAjaxRequest('google.com')

// Default func arg version:
function makeAjaxRequestTwo(url, method = "GET"){
  return method;
}

makeAjaxRequestTwo('google.com', 'POST');
makeAjaxRequestTwo('google.com', null);