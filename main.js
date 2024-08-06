const firstNumber="";
const secondNumber = "";
const firstOperator = null;
const secondOperator = null;

const display = document.querySelector("#display");
const clear = document.querySelector("#clearBtn");
const allBtns = document.querySelectorAll(".numberBtn");
const operator = document.querySelectorAll(".mathBtn");

allBtns.forEach(element=>{
    element.addEventListener("click",buttons);
});

operator.forEach(element=>{
  element.addEventListener("click", buttons);
});

clear.addEventListener("click", clearDisplay);

function buttons(input) {
  const value = input.target.value;
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber*secondNumber;
}

function divide(firstNumber, secondNumber){
  return firstNumber/secondNumber;
}

function operate(operator, firstNumber, secondNumber){
  switch(operator){
    case "+":
      return add(firstNumber, secondNumber);
      break;
    case "-":
      return subtract(firstNumber, secondNumber);
      break;
    case "*":
      return multiply(firstNumber, secondNumber);
      break;
    case "/":
      return divide(firstNumber, secondNumber);
      break;
  }
}