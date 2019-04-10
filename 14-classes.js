/* ---------- Classes: Lecture 44 ---------- */

function CarFunc(options) {
	this.title = options.title;
}

CarFunc.prototype.drive = function() {
	return 'vroom';
}

const carFromFunc = new CarFunc({ title: 'Focus' });

carFromFunc;
carFromFunc.drive();

'----------'

/* ---------- Classes: Lecture 45 ---------- */

function ToyotaFunc(options) {
  CarFunc.call(this, options);
	this.color = options.color;
}

ToyotaFunc.prototype = Object.create(CarFunc.prototype);
ToyotaFunc.prototype.constructor = ToyotaFunc;

ToyotaFunc.prototype.honk = function() {
	return 'beep';
}

const toyotaFromFunc = new ToyotaFunc({ title: 'Daily Driver', color: 'red' });

toyotaFromFunc;
toyotaFromFunc.drive();
toyotaFromFunc.honk();

'----------'

/* ---------- Classes: Lecture 46 ---------- */

class Car {
  constructor({ title }) {
  	this.title = title;
  }

	drive() {
  	return 'vroom';
  }
}

const car = new Car({ title: 'Focus' });

car;
car.drive();

'----------'

/* ---------- Classes: Lecture 47 ---------- */

class Toyota extends Car {
	constructor(options) {
  	super(options);
    this.color = options.color;
  }

  honk() {
  	return 'beep';
  }
}

const toyota = new Toyota({ title: 'Toyota', color: 'red' });

toyota;
toyota.drive();
toyota.honk();

/* ---------- Classes: Exercise 1 ---------- */

class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}

/* ---------- Classes: Exercise 2 ---------- */

class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}

class Snake extends Monster {
  bite(snake) {
    snake.health -= 10;
  }
}
