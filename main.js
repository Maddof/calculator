let buttons = document.querySelector(".buttons");
let display = document.querySelector(".screen");
let equal = document.querySelector(".btn.equal");

function add(a, b) {
  //return a + b;
  display.textContent = a + b;
}

function subtract(a, b) {
  display.textContent = a - b;
}

function multiply(a, b) {
  display.textContent = a * b;
}

function division(a, b) {
  display.textContent = a / b;
}

let num1;
let num2;
let operator;
let called = false;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log("Logged num1 from operate function: " + num1);
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "÷":
      division(num1, num2);
      break;
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
    console.log(e.target.value);
  }
  if (e.target.className === "btn equal") {
    operate(num1, num2, operator);
  }
});

//Helper functions

function appendNumber(number) {
  if (display.textContent === "0") {
    resetDisplay();
  }
  if (called && num2 === undefined) {
    resetDisplay();
  }
  if (!called) {
    num1 = parseFloat((display.textContent += number));
    console.log("Num1 is :" + num1);
  }
  if (called) {
    num2 = parseFloat((display.textContent += number));
    console.log("num2 is: " + num2);
  }
}

function resetDisplay() {
  display.textContent = "";
}

function operatorClicked(chosenOperator) {
  resetDisplay();
  display.textContent = chosenOperator;
  switch (chosenOperator) {
    case "+":
      operator = "+";
      console.log(chosenOperator);
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
