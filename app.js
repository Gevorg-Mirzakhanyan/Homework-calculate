const firstNumber = parseInt(10 * Math.random());
const secondNumber = parseInt(10 * Math.random());
const total = firstNumber + secondNumber;

const box_1 = document.getElementById("box_1");
  box_1.innerHTML = firstNumber;
const box_2 = document.getElementById("box_2");
  box_2.innerHTML = secondNumber;

const button = document.getElementById("btn");
button.addEventListener("click", function() {
    let result = document.getElementById("result").value;
    (result = Number(result)) === total ?  alert("Correct") : alert(("Sorry. Incorrect. The correct answer was " + total + "."))
})