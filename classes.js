// es6 solution to prototypical inheritance: classes

// old way, basic object creation
function Car(options) {
  this.title = options.title;
}

// add a method onto prototype
Car.prototype.drive = function(){
  return 'vroom';
}

const Car = new Car({ title: 'Focus'});
car.drive(); // returns vroom