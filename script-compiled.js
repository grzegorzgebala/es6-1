'use strict';

// Zad1
var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  var hello = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Hello';
  return console.log(hello + ' ' + name + '!');
};
sayHello();

// Zad 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  return x * y;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// Zad 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.forEach(function (arg) {
    return console.log((arg += 1) / arg);
  });
};

average(1);
average(1, 3);
average(1, 3, 6, 6);

// Zad 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var averages = function averages() {
  return grades.forEach(function (arg) {
    return console.log((arg += 1) / arg);
  });
};

averages();
