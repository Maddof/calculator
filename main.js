let buttons = document.querySelector(".buttons");
let display = document.querySelector(".screen");
let equalBtn = document.querySelector(".btn.equal");
let clearBtn = document.querySelector(".btn.clear");
let deleteBtn = document.querySelector(".btn.delete");

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

let num1;
let num2;
let operator;
let called = false;
let result;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "÷":
      if (num2 == 0 || num2 == NaN || num2 == "") {
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

// let numberButton = document.querySelectorAll(".number");
// console.log(numberButton);

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

clearBtn.addEventListener("click", clearCalc);

deleteBtn.addEventListener("click", deleteNumber);

//Helper functions

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
    console.log("Num1 is: " + num1);
  }
  if (called) {
    num2 = parseFloat((display.textContent += number));
    console.log("Num2 is: " + num2);
  }
}

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
  if (num1 === num2) {
    console.log("deleted second number");
    display.textContent = display.textContent.slice(0, -1);
    num2 = parseFloat(display.textContent);
  } else if (num1 == display.textContent) {
    console.log("deleted first number");
    display.textContent = display.textContent.slice(0, -1);
    num1 = parseFloat(display.textContent);
  } else if (num2 == display.textContent) {
    console.log("deleted second number");
    display.textContent = display.textContent.slice(0, -1);
    num2 = parseFloat(display.textContent);
  }
}

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
