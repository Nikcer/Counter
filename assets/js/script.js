// definizione degli elementi del DOM
const container = document.createElement("div");
container.setAttribute("id", "container");

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");

const counter = document.createElement("h3");
counter.innerHTML = 0;
counter.setAttribute("id", "output");

const minusButton = document.createElement("button");
minusButton.innerText = "-";
const resetButton = document.createElement("button");
resetButton.innerText = "RESET";
const plusButton = document.createElement("button");
plusButton.innerText = "+";

// aggiunta degli elementi al DOM
buttonContainer.appendChild(minusButton);
buttonContainer.appendChild(resetButton);
buttonContainer.appendChild(plusButton);

container.appendChild(buttonContainer);
container.appendChild(counter);
document.body.appendChild(container);

// definizione delle funzioni
function subNum() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function addNum() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function reset() {
  counter.innerHTML = 0;
}

// eventi dei bottoni
minusButton.addEventListener("click", subNum);
plusButton.addEventListener("click", addNum);
resetButton.addEventListener("click", reset);
