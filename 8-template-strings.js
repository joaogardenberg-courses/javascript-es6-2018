/* ---------- Template Strings: Lecture 25 ---------- */

function getMessage() {
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}

getMessage();

'----------'

/* ---------- Template Strings: Lecture 26 ---------- */

const device_id = 4;
const guid = 20;
const username = 'hello';

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}"}`;

data;

'----------'

/* ---------- Template Strings: Exercise 1 ---------- */

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

doubleMessage(2018);

'----------'

/* ---------- Template Strings: Exercise 2 ---------- */

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

fullName('João', 'Gardenberg');
