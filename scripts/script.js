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
let num1;
let num2;
let operaator;
let enableNumbers;
let enableOperators;
let enableEquals;
const numberTextContent = "0,1,2,3,4,5,6,7,8,9,.".split(",");
const operatorTextContent = "+,-,*,/".split(",");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

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

/**
 * Create click handlers for all of the buttons
 *
 *  -   initialize number count
 *  -   initialize operator boolean for [+, -, *, /]
 *  -   disable operator keys
 *  -   check if number is a string or an operator
 *  -   keep track of clicks while use
 *  -   while numbers are clicked concatenate string until an operator is clicked
 *  -   store string in n1
 *  -   increment number count
 *  -   only allow [+, -, *, /] to be clicked after first number (disable number keys and =)
 *  -   only allow numbers after first operator enable number keys and disable operators
 *  -   while numbers are clicked concatenate string until an operator is clicked
 *  -   store string in n2
 *  -   once one number is clicked enable the = opertor button
 *  -   once = is clicked call operate and update display with the answer
 * @param {*} str
 */
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) return;
    updateDisplay(event.target.textContent);
  });
});

function setButtonState(button, enable) {
  console.log("button", button);
  enable
    ? button.classList.remove("disabled")
    : button.classList.add("disabled");
}

/**
 *
 */
function initializeCalculator() {
  num1 = num2 = 0;
  enableOperators = enableEquals = false;
  enableNumbers = true;
  updateDisplay("0");
  buttons.forEach((button) => {
    let text = button.textContent;
    if (numberTextContent.includes(text)) {
      setButtonState(button, enableNumbers);
    } else if (operatorTextContent.includes(text)) {
      setButtonState(button, enableOperators);
    } else if (text === "=") {
      setButtonState(button, enableEquals);
    }
  });
}
function updateDisplay(str) {
  // initialize calculator
  display.value = str;
}

initializeCalculator();
