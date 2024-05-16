"use strict";
// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.
//  make two variables containing number values.
let num1 = 40;
let num2 = 30;
// • make a variable to hold an operator (-).
let operator = "-";
// • Create a function that takes two numbers and an operator as parameters,
function calculate(num1, num2, operator) {
    if (operator === "-") {
        return (num1 - num2);
    }
    else if (operator === "+") {
        return (num1 + num2);
    }
    else {
        return (`invalid`);
    }
}
;
let result = calculate(num1, num2, operator);
console.log(result);
let update = calculate(num1, num2, "+");
console.log(update);
