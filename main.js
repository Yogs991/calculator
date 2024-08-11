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
  if(number2 === 0){
    return alert("undefined");
  }else{
    return number1/number2;
  }
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
        return "Invalid operator";
        break;
    }
}

let number1="";
let number2 = "";
let operator = "";
const display = document.querySelector("#display");
const clear = document.querySelector("#clearBtn");
const allBtns = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equalBtn");

allBtns.forEach((element)=>{
  element.addEventListener("click",(input)=>{
    if(operator ===""){
      number1 += input.target.value;
      display.value += input.target.value;
    }else{
      number2 += input.target.value;
      display.value += input.target.value;
    }
  });
});

operatorBtn.forEach((element)=>{
  element.addEventListener("click", (input)=>{
    operator = input.target.value;
    display.value += input.target.value;
  });
});

clear.addEventListener("click", ()=>{
  display.value = "";
  number1 = "";
  number2 = "";
  operator = "";
});

equalButton.addEventListener("click",equalPressed);

function equalPressed(){
    if(number1 !== "" && number2 !== "" && operator !==""){
      const result = operate(operator, parseInt(number1), parseInt(number2));
      display.value = result;
      number1 = "";
      number2 = "";
      operator = "";
    }
}


