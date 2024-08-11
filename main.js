let number1="";
let number2 = "";
let operator = "";
const display = document.querySelector("#display");
const clear = document.querySelector("#clearBtn");
const allBtns = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equalBtn");

allBtns.forEach(element=>{
    element.addEventListener("click",buttons);
});

operatorBtn.forEach(element=>{
  element.addEventListener("click", buttons);// add new function to save second number when clicked
});

clear.addEventListener("click", clearDisplay);

equalButton.addEventListener("click",operate);

function buttons(input) {
  if(operator ===""){
    number1 = input.target.value;
    display.value += number1;
  }else{
    number2 = input.target.value;
  }
}

function clearDisplay(){
  display.value = "";
}
function add(number1, number2){
  return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1*number2;
}
function divide(number1, number2){
  return number1/number2;
}

function operate(operator, number1, number2){
    switch(operator){
      case "+":
        return add(number1, number2);
        break;
      case "-":
        return subtract(number1, number2);
        break;
      case "*":
        return multiply(number1, number2);
        break;
      case "/":
        return divide(number1, number2);
        break;
      default:
        break;
    }
  }
