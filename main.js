const add = (a, b) => {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

let num1;
let operator;
let num2;

const operate = function (num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(subtract(num1, num2));
      break;
    case "÷":
      console.log(division(num1, num2));
      break;
    case "x":
      console.log(multiply(num1, num2));
      break;
  }
};

operate(1, 5, "÷");

// let numberButton = document.querySelectorAll(".number");
// console.log(numberButton);
let buttons = document.querySelector(".buttons");
let display = document.querySelector(".screen");

buttons.addEventListener("click", (e) => {
  // If the button clicked on has the classes of btn & number
  // we call appendNumber with its current content
  if (e.target.className === "btn number") {
    appendNumber(e.target.textContent);
  }
});

//Helper functions

function appendNumber(number) {
  if (display.textContent === "0") {
    resetDisplay();
  }
  display.textContent += number;
}

function resetDisplay() {
  display.textContent = "";
}
