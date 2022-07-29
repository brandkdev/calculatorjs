// A program for an HTML operated calculator!

let displayValue = 0;

const numBtn = document.querySelectorAll('.digits');
const disp = document.getElementById('output');
const clrBtn = document.getElementById('clr');
const dltBtn = document.getElementById('dlt');
const eqBtn = document.getElementById('equals');
const opBtn = document.querySelectorAll('.opBtn');


clrBtn.addEventListener('click', () => {
    disp.textContent = "0";
    displayValue = 0;
});

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if(displayValue == 0) {
            displayValue = '';
        };
        displayValue += button.id;
        disp.textContent = displayValue;
    });
});

eqBtn.addEventListener('click', evalEqString)

function evalEqString() {
    let operator;
    if(displayValue.includes('+')) {
        operator = '+';
    } else if(displayValue.includes('-')) {
        operator = '-';
    } else if(displayValue.includes('x')) {
        operator = 'x';
    } else if(displayValue.includes('÷')) {
        operator = '÷';
    } else {
        displayValue = '0';
    }
    let eval = displayValue.split(/[+|\-|x|÷]+/);
    let firstVal = eval[0];
    let secondVal = eval[1];
    displayValue = operate(firstVal, operator, secondVal);
    disp.textContent = displayValue;
}

opBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if(displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('x' || displayValue.includes('÷'))) {
            evalEqString();
            displayValue += button.id;
            disp.textContent = displayValue;
        } else {
            displayValue += button.id;
            disp.textContent = displayValue;
        }
    });
});

dltBtn.addEventListener('click', () => {
    if((displayValue == 0) || (displayValue.length == 1)) {
        displayValue = '0';
        disp.textContent = displayValue;
    } else {
        displayValue = `${displayValue}`.slice(0, -1);
        disp.textContent = displayValue;
    }
});

function operate(a, operator, b) { //chooses the correct function to call when user presses "="
    if(operator === '+') {
        return add(a, b);
    } else if(operator === '-') {
        return subtract(a, b);
    } else if(operator === 'x') {
        return multiply(a, b);
    } else if(operator === '÷') {
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