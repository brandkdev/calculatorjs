// A program for an HTML operated calculator!

let displayValue = 0;

const numBtn = document.querySelectorAll('button');
const disp = document.getElementById('output');



numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        disp.textContent = button.id;
    });
}); 


function operate(a, operator, b) { //chooses the correct function to call when user presses "="
    if(operator === '+') {
        return add(a, b);
    } else if(operator === '-') {
        return subtract(a, b);
    } else if(operator === 'x') {
        return multiply(a, b);
    } else if(operator === '&#xF7;') {
        return divide(a, b);
    } else {
        console.log('Please enter a valid expression');
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}