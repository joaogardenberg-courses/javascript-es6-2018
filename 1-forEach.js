/* ---------- forEach: Lecture 4 ---------- */

const colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

colors.forEach(color => {
	console.log(color);
});

/* ---------- forEach: Lecture 5 ---------- */

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(number => {
	sum += number;
});

// Print the sum variable
sum;

/* ---------- forEach: Exercise 1 ---------- */

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(post => {
        savePost(post);
    });
}

/* ---------- forEach: Exercise 2 ---------- */

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(image => {
    areas.push(image.width * image.height);
});
