let firstNumber="";
let secondNumber = "";
let operator = "";
const display = document.querySelector("#display");
const clear = document.querySelector("#clearBtn");
const allBtns = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".mathBtn");

allBtns.forEach(element=>{
    element.addEventListener("click",buttons);
});

operatorBtn.forEach(element=>{
  element.addEventListener("click", operate);
});

clear.addEventListener("click", clearDisplay);

function buttons(input) {
  if(operator ===""){
    firstNumber = input.target.value;
    display.value += firstNumber;
  }else{
    secondNumber = input.target.value;
  }
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
  operator = input.target.value;
  if(operator !== "="){
    display.value += operator;
  }else{
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
      default:
        break;
    }
  }
}