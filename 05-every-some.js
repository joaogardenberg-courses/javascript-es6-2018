/* ---------- every/some: Lectures 16-17 ---------- */

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
	var computer = computers[i];

  if (computer.ram < 16) {
  	allComputersCanRunProgram = false;
  } else {
  	onlySomeComputersCanRunProgram = true;
  }
}

'----------'

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

'----------'

computers.every(computer => computer.ram >= 16);
computers.some(computer => computer.ram >= 16);

'----------'

/* ---------- every/some: Lecture 18 ---------- */

var names = [
	'Alexandria',
  'Matthew',
  'Joe'
];

names.every(name => name.length > 4);
names.some(name => name.length > 4);

'----------'

/* ---------- every/some: Lecture 19 ---------- */

function Field(value) {
	this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');

var fields = [username, password, birthdate];

var formIsValid = fields.every(field => field.validate());

if (formIsValid) {
	'Valid'
} else {
	'Invalid'
}

'----------'

/* ---------- every/some: Exercise 1 ---------- */

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => user.hasSubmitted);

hasSubmitted;

'----------'

/* ---------- every/some: Exercise 2 ---------- */

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => request.status === 'pending');

inProgress;
