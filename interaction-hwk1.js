const amountOne = document.getElementById("amountOne");
const amountTwo = document.getElementById("amountTwo");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

function addValues(a, b) {
  return parseInt(a.value) + parseInt(b.value);
}

submit.addEventListener("click", function () {
  result.innerText = addValues(amountOne, amountTwo);
});