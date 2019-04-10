/* ---------- Enhanced Object Literals: Lecture 31 ---------- */

function createBookShop(inventory) {
	return {
  	inventory,
    inventoryValue() {
      return this.inventory.reduce((previous, book) => previous + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

/* ---------- Enhanced Object Literals: Lecture 32 ---------- */

function saveFile(url, data) {
	$.ajax({ url, data, method: 'POST' });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);

/* ---------- Enhanced Object Literals: Exercise 1 ---------- */

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

/* ---------- Enhanced Object Literals: Exercise 2 ---------- */

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

/* ---------- Enhanced Object Literals: Exercise 3 ---------- */

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;

  return {
    width,
    height
  };
}

/* ---------- Enhanced Object Literals: Exercise 4 ---------- */

const color = 'red';

const Car = {
  color,
  drive: () => 'Vroom!',
  getColor() {
    return this.color;
  }
};
