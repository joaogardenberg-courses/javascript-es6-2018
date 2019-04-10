/* ---------- Promise: Lecture 63 ---------- */

promise1 = new Promise((resolve, reject) => {
  resolve();
  // reject();
});

/* ---------- Promise: Lecture 64 ---------- */

promise1
  .then(() => console.log('Finally finished!'))
  .then(() => console.log('I was also ran!'))
  .catch(() => console.log('Uh oh!'));

/* ---------- Promise: Lecture 65 ---------- */

promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 3000);
});

promise2
  .then(() => console.log('Finally finished!'));

promise3 = new Promise((resolve, reject) => {
  var request = new XHTMLRequest();
  // Make request
  request.onload = () => resolve();
});

promise3
  .then(() => console.log('Finally finished!'));

/* ---------- Promise: Lecture 66 ---------- */

url = "https://jsonplaceholder.typicode.com/posts/"

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

/* ---------- Promise: Lecture 67 ---------- */

url = "https://jsonplaceholder.typicode123.com/posts123456/"

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD:', error));
