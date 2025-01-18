/**
 * start by creating functions for the following items and testing them in your browser’s console:
 *  -   add
 *  -   subtract
 *  -   multiply
 *  -   divide
 */

/**
 * Create two number variables and an operator
 */
const num1 = 0;
const num2 = 0;
const operaator = "";

/**
 * add
 *
 * @param {*} a     number
 * @param {*} b     number
 * @returns         number - sum of two numbers
 */
function add(a, b) {
  return a + b;
}

/**
 * subtract
 *
 * @param {*} a     number
 * @param {*} b     number
 * @returns         number - difference of two numbers
 */
function subtract(a, b) {
  return a - b;
}

/**
 * multiply
 *
 * @param {*} a     number
 * @param {*} b     number
 * @returns         number - product of two numbers
 */
function multiply(a, b) {
  return a * b;
}

/**
 * divide
 *
 * @param {*} a     number
 * @param {*} b     number
 * @returns         number - quotient of two numbers
 */
function divide(a, b) {
  return a / b;
}

/**
 * operate
 *              - based on operator, chooses the operation to perform on the two given numbers.
 *
 * @param {*} operator string +, -, *, /
 * @param {*} a         number
 * @param {*} b         number
 */
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      add(a, b);
      break;

    case "-":
      subtract(a, b);
      break;

    case "*":
      multiply(a, b);
      break;

    case "/":
      divide(a, b);
      break;

    default:
      break;
  }
}
