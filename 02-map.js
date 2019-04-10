/* ---------- map: Lecture 7 ---------- */

const numbers = [1, 2, 3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;

'----------'

const doubled = numbers.map(number => {
	return number * 2;
});

doubled;

'----------'

/* ---------- map: Lecture 8 ---------- */

const cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Camaro', price: 'expensive' }
];

const prices = cars.map(car => {
	return car.price;
});

prices;

'----------'

/* ---------- map: Exercise 1 ---------- */

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(image => image.height);

heights;

'----------'

/* ---------- map: Exercise 2 ---------- */

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(trip => trip.distance / trip.time);

speeds;

'----------'

/* ---------- map: Exercise 3 ---------- */

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

function pluck(array, property) {
  return array.map(pos => pos[property]);
}

var distances = pluck(trips, 'distance');

distances;
