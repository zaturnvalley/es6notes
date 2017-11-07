// Find helper method

// for loop old example
var users = [
{ name: 'Jill'},
{ name: 'Alex'},
{ name: 'Bill'}
];

var user;

for (var i = 0; i < users.length; i++){
  if (users[i].name === 'Alex'){
    user = users[i];
    break; // exit if conditional met
  }
}

user;

// Find Helper Method Example

users.find(function(user){
 return user.name === 'Alex';
});

function Car(model){
  this.model = model;
}
var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car){
  return car.model === 'Focus';
});

var posts = [
{ id: 1, title: "New Post" },
{ id: 2, title: "Old Post" }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment){
  return posts.find(function(post){
    return post.id === comment.postId;
  });
}
postForComment(posts, comment);
}

// sample data
var ladders = [
  {id: 1, height: '20 feet' },
  {id: 2, height: '25 feet' }
];

// function that uses find blankly with criteria needed
function findWhere(array, criteria){
  return array.find(function(obj){
    return obj[Object.keys(criteria)] === criteria[Object.keys(criteria)];
  });
}

findWhere(ladders, { height: '20 feet' });