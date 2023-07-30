const amountOne = document.querySelector("#amountOne");
const amountTwo = document.querySelector("#amountTwo");

function addValues(a, b) {
  return a + b;
};

const result = addValues(amountOne, amountTwo);

document.getElementById("result").innerHTML = result

// console.log(result)