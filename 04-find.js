/* ---------- find: Lecture 13 ---------- */

var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

for (let i = 0; i < users.length; i++) {
	if (users[i].name === 'Alex') {
  	user = users[i];
    break;
  }
}

user;

'----------'

users.find(user => user.name === 'Alex');

'----------'

/* ---------- find: Lecture 14 ---------- */

function Car(model) {
	this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(car => {
  return car.model === 'Focus';
});

'----------'

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
	return posts.find(post => {
  	return post.id === comment.postId;
  });
}

postForComment(posts, comment);

'----------'

/* ---------- find: Exercise 1 ---------- */

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin);

admin;

'----------'

/* ---------- find: Exercise 2 ---------- */

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(acc => acc.balance === 12);

account;

'----------'

/* ---------- find: Exercise 3 ---------- */

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
  { id: 4, height: 25 }
];

function findWhere(array, criteria) {
  let keys = Object.keys(criteria);

  return array.find(pos => {
    var arrayOfBools = keys.reduce((arr, param) => {
      arr.push(criteria[param] === pos[param]);
      return arr;
    }, []);

    // arrayOfBools now has an array of booleans, each
    // of them respective to the criteria parameters.
    // I.E: [true, false, true, ...], or [true true true, ...]

    // Now we have to ask if every index of the array has 'true'
    // in it, meaning that it passed all tests, then return it
    // to the find helper.

    return arrayOfBools.every(r => r === true);
  });
}

findWhere(ladders, { height: 25 });
