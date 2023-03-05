// contaniner console del counter
let container = document.createElement("div");
container.setAttribute("id", "container");

//buttons container
let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");

//visualizzazione valore iniziale
let counter = document.createElement("h3");
counter.innerHTML = 0;
counter.setAttribute("id","output");



// buttons
let buttonMinus = document.createElement("button");
buttonMinus.innerText = "-";
let buttonReset = document.createElement("button");
buttonReset.innerText = "RESET";
let buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";


// buttons aggiunti al div
buttonContainer.appendChild(buttonMinus);
buttonContainer.appendChild(buttonReset);
buttonContainer.appendChild(buttonPlus);


//append container al body della pagina
document.body.appendChild(container);
//append buttonContainer e counter al container 
container.appendChild(buttonContainer);
container.appendChild(counter);

 
// funzioni cambio valore del counter
buttonMinus.addEventListener("click", subnum);
    function subnum(){
        counter.innerHTML= parseInt(counter.innerHTML) - 1;

}

buttonPlus.addEventListener("click", addnum);
    
        function addnum (){
            counter.innerHTML= parseInt(counter.innerHTML) + 1;       
        }


buttonReset.addEventListener("click", reset);
        function reset (){
            counter.innerHTML = 0;
        }
       
    
