// ES 5 nacin importovanja
// const calculator = require('./calculator.js');
// const helpersGuid = require('./helpers.js');
// const { v4: uuidv4 } = require('uuid');

// ES 6 nacin importovanja
import { sum, subtract, divide, multiply, power } from './calculator.js';
import helpersGuid from './helpers.js';
import { v4 as uuidv4 } from 'uuid';

// const sumTwoNumbers = calculator.sum(1, 2);
const sumTwoNumbers = sum(1, 2);
console.log('Sum of two numbers is: ', sumTwoNumbers);

// const subtractTwoNumbers = calculator.subtract(4, 3);
const subtractTwoNumbers = subtract(4, 3);
console.log('Result of subtraction is: ', subtractTwoNumbers);

// const multiplyTwoNumbers = calculator.multiply(5, 6);
const multiplyTwoNumbers = multiply(5, 6);
console.log('Result of multiplication is: ', multiplyTwoNumbers);

// const divideTwoNumbers = calculator.divide(10, 2);
const divideTwoNumbers = divide(10, 2);
console.log('Result of division: ', divideTwoNumbers);

// const resultMathPow = calculator.power(5, 3);
const resultMathPow = power(5, 3);
console.log('5 to the power of 3 is: ', resultMathPow);

console.log('------------------------------------');
console.log('Random guid: ', helpersGuid());
console.log('Random guid from uuid library: ', uuidv4());
