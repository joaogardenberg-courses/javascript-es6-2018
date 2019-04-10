/* ---------- reduce: Lecture 20 ---------- */

var numbers = [10, 20, 30];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

'----------'

numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

'----------'

/* ---------- reduce: Lecture 21 ---------- */

var primaryColors = [{
    color: 'red'
  },
  {
    color: 'yellow'
  },
  {
    color: 'blue'
  }
];

primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

'----------'

/* ---------- reduce: Lecture 22 ---------- */

function balancedParams(string) {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParams('()(())');

'----------'

/* ---------- reduce: Exercise 1 ---------- */

var trips = [{
  distance: 34
}, {
  distance: 12
}, {
  distance: 1
}];

var totalDistance = trips.reduce((previous, trip) => {
  return previous + trip.distance;
}, 0);

totalDistance;

'----------'

/* ---------- reduce: Exercise 2 ---------- */

var desks = [{
    type: 'sitting'
  },
  {
    type: 'standing'
  },
  {
    type: 'sitting'
  },
  {
    type: 'sitting'
  },
  {
    type: 'standing'
  }
];

var deskTypes = desks.reduce((previous, desk) => {
  previous[desk.type]++;
  return previous;
}, {
  sitting: 0,
  standing: 0
});

deskTypes;

'----------'

/* ---------- reduce: Exercise 3 ---------- */

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((previous, pos) => {
    if (!previous.includes(pos)) {
      previous.push(pos);
    }

    return previous;
  }, []);
}

var uniqueNumbers = unique(numbers);

uniqueNumbers;