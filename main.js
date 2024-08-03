const firstNumber=0;
const secondNumber = 0;
const operator = "";

const display = document.querySelector("#display");
const clear = document.querySelector("#clearBtn");
const allBtns = document.querySelectorAll(".numberBtn");

allBtns.forEach(element=>{
    element.addEventListener("click",buttons);
});

clear.addEventListener("click", clearDisplay);

function buttons(input) {
  const value = input.target.value;
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function add(){
  return firstNumber + secondNumber;
}

function subtract() {
    return firstNumber - secondNumber;
}

function multiply() {
    return firstNumber*secondNumber;
}

function divide(){
  return firstNumber/secondNumber;
}

function operate(){

}