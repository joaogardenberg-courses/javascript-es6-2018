/* ---------- const/let: Lecture 23 ---------- */

//var name = 'Jane';
//var title = 'Software Engineer';
//var hourlyWage = 40;

// ES6:
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// Some time later...
title = 'Senior Software Engineer';
hourlyWage = 45;

'---------'

/* ---------- const/let: Exercise 1 ---------- */

const name2 = 'Johnny';
let age = 25;
const dateOfBirth = '12/04/1993';

/* ---------- const/let: Exercise 2 ---------- */

const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];

let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
