/* ---------- Rest and Spread Operators: Lecture 35 ---------- */

function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7);

'----------'

/* ---------- Rest and Spread Operators: Lecture 36 ---------- */

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

['blue', 'purple', ...defaultColors, ...userFavoriteColors, ...fallColors];

'----------'

function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
  	return ['milk', ...items];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

/* ---------- Rest and Spread Operators: Lecture 37 ---------- */

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
  	return this.multiply(...rest);
  },
	multiply: (a, b) => a * b
};

MathLibrary.calculateProduct(2, 4);

/* ---------- Rest and Spread Operators: Exercise 1 ---------- */

function product(...numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
}

/* ---------- Rest and Spread Operators: Exercise 2 ---------- */

function join(array1, array2) {
  return [...array1, ...array2];
}

/* ---------- Rest and Spread Operators: Exercise 3 ---------- */

function unshift(array, ...rest) {
  return [...rest, ...array];
}
