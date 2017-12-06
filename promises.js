// promises

promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve();
  // }, 3000);

 var request = new XMLHttpRequest();
 // make request
 request.onload = () => {
  resolve();
 } 
});
// promise = new Promise((resolve, reject) => {
//   reject();
// });

promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('this too'))
  .catch(() => console.log('something went wrong'));

  // Ajax Request with Fetch

  url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then(response => response.json());