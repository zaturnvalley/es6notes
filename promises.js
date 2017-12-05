// promises

promise = new Promise((resolve, reject) => {
  resolve();
});
// promise = new Promise((resolve, reject) => {
//   reject();
// });

promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('this too'))
  .catch(() => console.log('something went wrong'));