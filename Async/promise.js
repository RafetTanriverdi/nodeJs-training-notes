const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 is resolved");
  reject('Promise 1 is rejected');
});

console.log(promise1);

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
