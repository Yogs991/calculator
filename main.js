// const firstNumber
// const secondNumber
// const operator

const allBtns = document.querySelectorAll(".btn");
allBtns.forEach(element=>{
    element.addEventListener("click",buttons);
});

function buttons(e) {
  const value = e.target.value;
  document.getElementById("demo").innerHTML = value;  
}

function add(){

}

function subtract() {
    
}

function multiply() {
    
}

function divide(){

}

function operate(){

}