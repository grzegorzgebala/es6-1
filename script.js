// // Zad1
// const sayHello = (name = 'World', hello = 'Hello') => console.log(`${hello} ${name}!`);
// sayHello();

// // Zad 2
// let multiply = (x, y = '1') => {return x * y};
// console.log(multiply(2, 5));
// console.log(multiply(6, 6));
// console.log(multiply(5));

// Zad 3
let sum;
let average = (...args) => args.forEach(arg => { sum += arg, console.log(sum)});


average(1);
average(1, 3);
average(1, 3, 6, 6);

// Zad 4

// const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// let averages = (...args) => grades.forEach(arg => console.log(arg));

// averages();