"use strict";

// // Zad1
// const sayHello = (name = 'World', hello = 'Hello') => console.log(`${hello} ${name}!`);
// sayHello();

// // Zad 2
// let multiply = (x, y = '1') => {return x * y};
// console.log(multiply(2, 5));
// console.log(multiply(6, 6));
// console.log(multiply(5));

// Zad 3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  var steps = 0;

  args.forEach(function (arg, index) {
    sum += arg;
    steps = index + 1;
  });

  return sum / steps;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// // Zad 4

// const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// let averages = (...args) => grades.forEach(arg => console.log(arg));


// let averages = (...args) => grades.forEach(arg => console.log((arg += 1)/arg));

// averages();

// Zad 5

// const names = [1, 4, 'Iwona', false, 'Nowak'];

// const [ , , third, ,fifth] = names;

// console.log(third, fifth);
