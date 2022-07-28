// A program for an HTML operated calculator!

let displayValue = 0;

const numBtn = document.querySelectorAll('.digits');
const disp = document.getElementById('output');
const clrBtn = document.getElementById('clr');
const dltBtn = document.getElementById('dlt');
const eqBtn = document.getElementById('equals');


clrBtn.addEventListener('click', () => {
    disp.textContent = "0";
    displayValue = 0;
});

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if(displayValue === 0) {
            displayValue = '';
        };
        displayValue += button.id;
        disp.textContent = displayValue;
    });
});

eqBtn.addEventListener('click', () => {
    console.log(displayValue);
    let operator;
    if(displayValue.includes('+')) {
        operator = '+';
    } else if(displayValue.includes('-')) {
        operator = '-';
    } else if(displayValue.includes('x')) {
        operator = 'x';
    } else if(displayValue.includes('&#xF7;')) {
        operator = '&#xF7;';
    } else {
        alert('please enter a valid operator');
    }
    let eval = displayValue.split(/[\W|x]+/);
    let firstVal = eval[0];
    let secondVal = eval[1];
    displayValue = operate(firstVal, operator, secondVal);
    disp.textContent = displayValue;
    console.log(eval);
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
    aInt = parseInt(a);
    bInt = parseInt(b);
    return aInt + bInt;
}

function subtract(a, b) {
    aInt = parseInt(a);
    bInt = parseInt(b);
    return aInt - bInt;
}

function multiply(a, b) {
    aInt = parseInt(a);
    bInt = parseInt(b);
    return aInt * bInt;
}

function divide(a, b) {
    aInt = parseInt(a);
    bInt = parseInt(b);
    return aInt / bInt;
}