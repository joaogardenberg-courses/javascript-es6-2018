/* ---------- Generators: Lecture 49 ---------- */

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

const numbers = [1, 2, 3, 4];
let total = 0;

for (let number of numbers) {
	total += number;
}

console.log(total);

'----------'

/* ---------- Generators: Lecture 50 ---------- */

function *func() {
	yield;
}

const gen = func();
gen.next();
gen.next();

'----------'

/* ---------- Generators: Lectures 51-52 ---------- */

function *shopping() {
  // 2
	const stuffFromStore = yield 'cash'; // 3
  // 6
  const cleanClothes = yield 'laundry'; // 7
  // 10
  return [stuffFromStore, cleanClothes]; // 11
}

const gen1 = shopping(); // 0
gen1.next(); // 1
// 4
gen1.next('groceries'); // 5
// 8
gen1.next('clean clothes'); // 9
// 12

'----------'

/* ---------- Generators: Lecture 53 ---------- */

function *colors2() {
	yield 'red';
	yield 'blue';
	yield 'green';
}

const gen2 = colors2();
gen2.next();
gen2.next();
gen2.next();
gen2.next();

'----------'

const myColors = [];

for (let color of colors2()) {
	myColors.push(color);
}

myColors;
