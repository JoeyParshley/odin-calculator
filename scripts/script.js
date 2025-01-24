/**
 * start by creating functions for the following items and testing them in your browser’s console:
 *  -   add
 *  -   subtract
 *  -   multiply
 *  -   divide
 */

/**
 * TODO:
 *  -   Add backspace support to undo last input
 *  -   allow userd to add a decimal to numbers
 *  -   format the floating numbers
 *  -   style like iPhone calculator
 *  -   handle divide by zero
 *  -   add spacing betwee numbers and operator in display
 *  -   add keyboard support
 */

/**
 * Create two number variables and an operator
 */
let num1;
let num2;
let equationString = "";
let operator;
let hasOperator;
let isNum = false;
let isOperator = false;
let isEquals = false;
const numArray = [...Array(10).keys()];
const operatorArray = ["+", "-", "*", "/"];
const numberTextContent = "1,2,3,4,5,6,7,8,9,.".split(",");
const operatorTextContent = "+,-,*,/".split(",");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const operatorBtns = document.querySelectorAll(".operator");
const numberBtns = document.querySelectorAll(".number");
const equalsBtn = document.querySelector(".equals");
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
      return add(a, b);
      break;

    case "-":
      return subtract(a, b);
      break;

    case "*":
      return multiply(a, b);
      break;

    case "/":
      return divide(a, b);
      break;

    default:
      break;
  }
}

function containsOperator(str, operators) {
  for (const operator of operators) {
    if (str.includes(operator)) {
      return true;
    }
  }
  return false;
}

/**
 * Create click handlers for all of the buttons
 *
 *  -   initialize number count
 *  -   initialize operator boolean for [+, -, *, /]
 *  -   disable operator keys unti number string is at least one digit from 1 - 9
 *  -   once enabled allow one operator to be entered then enable = button
 *  -   once = is clicked get result
 * @param {*} str
 */

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    if (target.id === "display" || target.classList.contains("disabled"))
      return;

    const buttonType = getButtonType(target.classList);

    switch (buttonType) {
      case "zero":
        // only allow zero if there is already a number
        equationString.length > 0
          ? (equationString += target.textContent)
          : (equationString = "");
        break;

      case "number":
        /**
         * refactor this to do the following:
         *
         *  -   if there is no operators, each click on a number key updates num1 to be equation string
         *  -   if there is an operator each click updates num2 splits equationString and assigns the second item to num2
         */
        // concatenate equationString
        equationString += target.textContent;
        // enable operator buttons
        enableOperatorButtons();
        // enable the equals button if there is an operator in the equation string.
        if (equationStringHasOneOperator(equationString)) enableEqualsButton();
        break;

      case "operator":
        /**
         * refactor to update operator when clicked if there is no operator yet.
         */
        // only allow one operator
        if (!equationStringHasOneOperator(equationString))
          equationString += target.textContent;
        break;

      case "equals":
        /**
         * refactor this to perform the operate on the num1, num2 and operator without splitting the string
         */
        // break up equation string into num1, operator and num2
        operator = getOperator(equationString);
        [num1, num2] = equationString.split(operator);
        // operate on num1, num2 and operator and replace value in equationString
        equationString = operate(operator, +num1, +num2);

        break;

      case "clear":
        initializeCalculator();
        equationString = "0";
        break;

      case "period":
        // if there is no equationString yet set equationString to '0.' and num1 to '0.'
        //
        break;

      default:
        break;
    }

    // update Display
    updateDisplay(equationString);
  });
});

function getButtonType(classList) {
  let type = "";

  if (classList.contains("equals")) {
    type = "equals";
  } else if (classList.contains("operator")) {
    type = "operator";
  } else if (classList.contains("clear")) {
    type = "clear";
  } else if (classList.contains("number")) {
    type = "number";
  } else if (classList.contains("period")) {
    type = "period";
  } else if (classList.contains("zero")) {
    type = "zero";
  }
  return type;
}

function getOperator(str) {
  if (str.includes("+")) {
    return "+";
  } else if (str.includes("-")) {
    return "-";
  } else if (str.includes("*")) {
    return "*";
  } else if (str.includes("/")) {
    return "/";
  }
}

function equationStringHasOneOperator(str) {
  return (
    str.includes("+") ||
    str.includes("-") ||
    str.includes("*") ||
    str.includes("/")
  );
}

function isNumeric(button) {
  return button.classList.contains("number");
}

function setButtonState(button, enable) {
  enable
    ? button.classList.remove("disabled")
    : button.classList.add("disabled");
}

/**
 *
 */
function initializeCalculator() {
  num1 = num2 = 0;
  disableOperatorButtons();
  disableEqualsButton();
  enableNumberButtons();
  updateDisplay("0");
  // set disabled state to operators
  buttons.forEach((button) => {
    let text = button.textContent;
    if (numberTextContent.includes(text)) {
      enableNumberButtons();
    } else if (operatorTextContent.includes(text)) {
      disableOperatorButtons();
    } else if (text === "=") {
      disableEqualsButton();
    }
  });
}

function disableNumberButtons() {
  for (const btn of numberBtns) {
    if (!btn.classList.contains("disabled")) btn.classList.add("disabled");
  }
}

function disableOperatorButtons() {
  for (const btn of operatorBtns) {
    if (!btn.classList.contains("disabled")) btn.classList.add("disabled");
  }
}

function disableEqualsButton() {
  if (!equalsBtn.classList.contains("disabled"))
    equalsBtn.classList.add("disabled");
}

function enableNumberButtons() {
  for (const btn of numberBtns) {
    if (btn.classList.contains("disabled")) btn.classList.remove("disabled");
  }
}

function enableOperatorButtons() {
  for (const btn of operatorBtns) {
    if (btn.classList.contains("disabled")) btn.classList.remove("disabled");
  }
}

function enableEqualsButton() {
  if (equalsBtn.classList.contains("disabled"))
    equalsBtn.classList.remove("disabled");
}

function updateDisplay(str) {
  if (str.length == 0) str = 0;
  display.value = str;
}

initializeCalculator();
