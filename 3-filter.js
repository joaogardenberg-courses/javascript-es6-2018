/* ---------- filter: Lecture 10 ---------- */

var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' }
];

var filteredProducts = [];

for (let i = 0; i < products.length; i++) {
	if (products[i].type === 'fruit') {
  	filteredProducts.push(products[i]);
  }
}

filteredProducts;

'----------'

var filtered = products.filter(product => {
  return product.type === 'vegetable';
});

filtered;

'----------'

/* ---------- filter: Lecture 11 ---------- */

var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// Type is 'vegetable', quantity is greater than 0, price is less than 10

var filtered = products.filter(product => {
	return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

filtered;

'----------'

/* ---------- filter: Lecture 12 ---------- */

var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
	return comments.filter(comment => {
  	return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

'----------'

/* ---------- filter: Exercise 1 ---------- */

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(number => number > 50);

filteredNumbers;

'----------'

/* ---------- filter: Exercise 2 ---------- */

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(user => user.admin);

filteredUsers;

'----------'

/* ---------- filter: Exercise 3 ---------- */
var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter(pos => {
  	return !iteratorFunction(pos);
  });
}

var lessThanFifteen = reject(numbers, number => {
	return number > 15;
});

lessThanFifteen;
