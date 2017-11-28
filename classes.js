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

// new obj inherits from Car

function Toyota(options){
  Car.call(this,options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
  return 'beep';
}
const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
toyota;
toyota.drive();
toyota.honk();

// ES6 refactored version
// Using classes

class Dog {
  constructor({ name }){
    this.name = name;
  }

  bark(){
    return 'ruff!';
  }
}
 
// inherits from Dog
class CockerSpaniel extends Dog{
  constructor(options) {
    super(options);     // calls Car.contructor
    this.color = options.color;
  }

  beg(){
    return 'woof!';
  }
}
const dog = new Dog({ name: 'Buddy' });
dog.bark();

const cockerspaniel = new CockerSpaniel({ color: 'black', name: 'Marley'});
cockerspaniel.beg();

// usecase with ReactJS

// old way:
React.createClass({
  doSomething(){

  },
  doSomethingElse(){

  }
});

// modern syntax example
class MyComponent extends Component {
  doSomething(){

  }

  doSomethingElse(){

  }
}