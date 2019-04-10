/* ---------- Destructuring: Lecture 38 ---------- */

const expense = {
	type:  'Business',
  amount: '$45 USD'
};

const { type, amount } = expense;

type;
amount;

'----------'

/* ---------- Destructuring: Lecture 39 ---------- */

const savedFile = {
	extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({ name, extension, size }, { color }) {
	return `The file ${name}.${extension} is of size ${size} and has the ${color} color`;
}

fileSummary(savedFile, { color: 'red' });

'----------'

/* ---------- Destructuring: Lecture 40 ---------- */

const companies = [
	'Google',
  'Facebook',
  'Uber',
  '...'
];

const [ name, name2, ...rest ] = companies;
const { length } = companies;

name;
name2;
rest;
length;

'----------'

/* ---------- Destructuring: Lecture 41 ---------- */

const companies2 = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

const [ { location } ] = companies2;

location;

'----------'

const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ firstLocation, ...rest2 ] } = Google;

firstLocation;
rest2;

'----------'

/* ---------- Destructuring: Lecture 42 ---------- */

function signup(username, password, email, dateOfBirth, city) {
	// Create new user
}

signup('myname', 'mypassword', 'myemail@example.com', '12/04/1993', 'Rio de Janeiro');

function signup2({ password, dateOfBirth, city, email, username }) {
	// Create new user
}

const user = {
	username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '12/04/1993',
  city: 'Rio de Janeiro'
}

signup2(user);

/* ---------- Destructuring: Lecture 43 ---------- */

const points = [
	[4, 5],
  [10, 1],
  [0, 40]
];

points.map(([ x, y ]) => {
  return { x, y };
});

'----------'

/* ---------- Destructuring: Exercise 1 ---------- */

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

/* ---------- Destructuring: Exercise 2 ---------- */

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
    return { subject, time, teacher };
});

classesAsObject;

'----------'

/* ---------- Destructuring: Exercise 3 ---------- */

const numbers = [1, 2, 3];

const double = ([ number, ...rest ]) => {
  return !number ? [] : [number * 2, ...double(rest)];
}

double(numbers);
