// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}







// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:





function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    let spaces = ' '.repeat(nFloors - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    let floor = spaces + stars + spaces;
    tower.push(floor);
  }

  return tower;
}

 