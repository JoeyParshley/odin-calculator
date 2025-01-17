# Odin Project Calculator Project

## Description

PRoject to put together Javascript, HTML and CSS

## Assignment

1. Create Calculator that will containe function for all basic math operators.

- add
- subtract
- multiply
- divide

2. Calculator operation will consist of a number, an operator and another number. i.e `3 + 5`. Create these three variables, one for each part of the operation.

3. Create a new function `operate` that takes and operator and two numbers and then calls one of the above functions on the numbers.

4. Create a basic HTML calculator with buttons for each digit and operator (including `=`).

- Do not worry about functionality yet
- there should be a display for the calculator. Fill it in with Dummy data for now.
- add a `clear` button.

5. Create functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable.

6. Make the Calculator work. Need to store the first and second numbers input by the user and then `operate()` on them when the user presses the `=` button, according to the operator that was selected between the numbers.

- once operate is called update the display with the result of the operation.
- this is hardest part, need to figure out how to store all the values and call the operate function with them.

7. Gotchas: whatch out for and fix these bugs.

- _Your calculator should not evaluate more that a single pair of numbers at a time._ Example you enter (`12`), followed by the operator button (`+`), a second number button (`7`), and a second operator (`-`). Your calculator should then do the following: first, evaluate the inital pair of nubmers (`12 + 7`), then display the result of the that calculation (`19`). Finally use that result (`19`) as the first number in a new calculation, along with the next operator (`-`).
- Round answers with long decimals so they do not overflow the display.
- Pressing `=` before entering all of the numbers or an operator could cause a problem!
- Display a snarky message if the user tries to divide by 0 ... and dont let it crash your calculator.
- Make sure your calculator only runs an operation when supplied with two numbers and an operator by the user. For example you enter a number (`2`), followed by an operatror button (`+`). You press the operator button (`+`) a second consecutive time. Your calculator should not evaluate this as (`2 + 2`) and should not display (`4`). If consecutive operator buttons are pressed, you calculator should not run any evaluations, it should only take the last operator ented to be used for the next operation.
  \*\* Extra Credit
- Users can get floating point numbers if they do the math required to get one, but they cannot type them in yet. Add a `.` button and let users to input decimals. Make sure you do not let them type more than 1 though. Disable the `.` button if theres already a decimal separator in the display.
- Add a "backspace" button, so the user can undo their last input if the click the wrong number.
- Add keyboard support.
