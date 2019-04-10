/* ---------- Fat Arrow Functions: Lecture 27 ---------- */

const add = function(a, b) {
	return a + b;
};

add(1, 1);

'----------'

const sub = (a, b) => {
	return a - b;
};

sub(8, 4);

'----------'

const mult = (a, b) => a * b;

mult(2, 4);

'----------'

/* ---------- Fat Arrow Functions: Lectures 29-30 ---------- */

const team = {
	members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
  	return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

team.teamSummary();

'----------'

const team2 = {
	members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
  	return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team2.teamSummary();

'----------'

/* ---------- Fat Arrow Functions: Exercise 1 ---------- */

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* ---------- Fat Arrow Functions: Exercise 2 ---------- */

const profile = {
    name: 'Alex',
    getName: function() {
      return this.name;
    }
};

profile.getName();
