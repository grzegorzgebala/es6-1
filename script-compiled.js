'use strict';

// // Zad1
// const sayHello = (name = 'World', hello = 'Hello') => console.log(`${hello} ${name}!`);
// sayHello();

// // Zad 2
// let multiply = (x, y = '1') => {return x * y};
// console.log(multiply(2, 5));
// console.log(multiply(6, 6));
// console.log(multiply(5));

// Zad 3
// let sum = 0, steps = 0, res = 0;
// const average = (...args) => args.forEach(arg => {
// 	sum += arg;
// 	steps++;
// 	res = sum/steps;
// 	return res;
// })(console.log(res));


// average(1);
// average(1, 3);
// average(1, 3, 6, 6);

// // Zad 4

// const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// let averages = (...args) => grades.forEach(arg => console.log(arg));


// let averages = (...args) => grades.forEach(arg => console.log((arg += 1)/arg));

// averages();

// Zad 5

var names = [1, 4, 'Iwona', false, 'Nowak'];

var third = names[2],
    fifth = names[4];


console.log(third, fifth);
