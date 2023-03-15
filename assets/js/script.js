//funzione per la creazione di elementi
function createElement (tagName, className, id, text ) {
    let element = document.createElement(tagName);
    element.className = className;
    element.id = id;
    
    element.innerHTML = text;
    return element;
}

//creazione elementi
const container = createElement('div', 'container', 'container', '');
document.body.appendChild(container);

const buttonContainer = createElement('div', '', 'buttonContainer', '');
container.appendChild(buttonContainer);

const counter = createElement('h3', '', 'output', '0');
container.appendChild(counter);

const buttonMinus = createElement('button',  'button', '', '-');
buttonContainer.appendChild(buttonMinus);

const buttonReset = createElement('button',  'button', '', 'reset');
buttonContainer.appendChild(buttonReset);

const buttonPlus = createElement('button',  'button', '', '+');
buttonContainer.appendChild(buttonPlus);





// funzione cambio valore del counter
let counterVal = 0;


container.addEventListener ('click', function(e) {
    
        if (e.target.innerHTML === '-' && counterVal != 0) {
            counterVal--;
            counter.innerHTML = counterVal;
        } else if (e.target.innerHTML === '+') {
            counterVal++;
        }
        else  {
            counterVal = 0;
            
        }



            counter.innerHTML = counterVal;
        
    
});
