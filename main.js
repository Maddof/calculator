// Needed javascript selectors to get interactivity working

let buttons = document.querySelector(".buttons");
let display = document.querySelector(".screen");
let equalBtn = document.querySelector(".btn.equal");
let clearBtn = document.querySelector(".btn.clear");
let deleteBtn = document.querySelector(".btn.delete");
let decimalBtn = document.querySelector(".btn.decimal");

function add(a, b) {
  result = display.textContent = a + b;
}

function subtract(a, b) {
  result = display.textContent = a - b;
}

function multiply(a, b) {
  result = display.textContent = a * b;
}

function division(a, b) {
  result = display.textContent = a / b;
}

// Define the variables in global scope that gets changed
// in helper functions so we can use elsewhere
let num1;
let num2;
let operator;
let called = false;
let result;
let hasDecimal;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "÷":
      if (num2 == 0) {
        display.textContent = "NOOOOO!";
        break;
      } else {
        division(num1, num2);
        break;
      }
    case "*":
      multiply(num1, num2);
      break;
  }
}

buttons.addEventListener("click", (e) => {
  // If the button clicked on has the classes of btn & number
  // we call appendNumber with its current content
  if (e.target.className === "btn number") {
    appendNumber(e.target.textContent);
  }
  if (e.target.className === "btn add") {
    operatorClicked(e.target.textContent);
  }
  if (e.target.className === "btn subtract") {
    operatorClicked(e.target.textContent);
  }
  if (e.target.className === "btn division") {
    operatorClicked(e.target.textContent);
  }
  if (e.target.className === "btn multiply") {
    operatorClicked(e.target.value);
  }
});

equalBtn.addEventListener("click", (e) => {
  if (e.target.className === "btn equal" && result === undefined) {
    operate(num1, num2, operator);
  } else if (e.target.className === "btn equal" && result !== undefined) {
    operate(result, num2, operator);
  }
});

// EventListeners for various helper functions

clearBtn.addEventListener("click", clearCalc);

deleteBtn.addEventListener("click", deleteNumber);

decimalBtn.addEventListener("click", addDecimal);

function appendNumber(number) {
  if (
    display.textContent === "0" ||
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "*" ||
    display.textContent === "÷"
  ) {
    resetDisplay();
  }
  if (!called) {
    num1 = parseFloat((display.textContent += number));
  }
  if (called) {
    num2 = parseFloat((display.textContent += number));
  }
}

//Helper functions

function resetDisplay() {
  display.textContent = "";
}

function clearCalc() {
  num1 = "";
  num2 = "";
  operator = "";
  called = false;
  result = undefined;
  display.textContent = "0";
}

function deleteNumber() {
  if (num1 === num2 && result == undefined) {
    display.textContent = display.textContent.slice(0, -1);
    num2 = parseFloat(display.textContent);
  } else if (num1 == display.textContent) {
    display.textContent = display.textContent.slice(0, -1);
    num1 = parseFloat(display.textContent);
  } else if (num2 == display.textContent) {
    display.textContent = display.textContent.slice(0, -1);
    num2 = parseFloat(display.textContent);
  }
}

function addDecimal() {
  const decimalTest = display.textContent.includes(".");
  if (!called && !decimalTest) {
    num1 = parseFloat((display.textContent += "."));
  }
  if (called && !decimalTest) {
    num2 = parseFloat((display.textContent += "."));
  }
}

// Handle the input numbers by setting called to true after clicking
// the operator of choice.
// This way we can distinguish between first and second operand.

function operatorClicked(chosenOperator) {
  display.textContent = chosenOperator;
  switch (chosenOperator) {
    case "+":
      operator = "+";
      called = true;
      break;
    case "-":
      operator = "-";
      called = true;
      break;
    case "÷":
      operator = "÷";
      called = true;
      break;
    case "*":
      operator = "*";
      called = true;
      break;
  }
}
