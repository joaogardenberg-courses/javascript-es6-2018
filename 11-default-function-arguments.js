/* ---------- Default Function Arguments: Lecture 33 ---------- */

function makeAjaxRequest(url, method = 'GET') {
  return method;
	// Logic to make the request
}

makeAjaxRequest('http://google.com');
makeAjaxRequest('http://google.com', 'POST');

'----------'

/* ---------- Default Function Arguments: Lecture 34 ---------- */

function User(id) {
	this.id = id;
}

function generateId() {
	return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;
  return user;
}

createAdminUser();

/* ---------- Default Function Arguments: Exercise 1 ---------- */

function sum(a = 0, b = 0) {
  return a + b;
}

/* ---------- Default Function Arguments: Exercise 2 ---------- */

function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}
