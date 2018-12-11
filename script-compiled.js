'use strict';

var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  var hello = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Hello';
  return console.log(hello + ' ' + name + '!');
};
sayHello();
