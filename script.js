let num1 = 0.0, num2 = 0.0, operator = '', currentNum = '';

// Basic operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Operation handler
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// Update display
function updateDisplay() {
    const display = document.querySelector('#screen');
    display.textContent = currentNum;
}

// Clear calculator
function clear() {
    num1 = 0.0;
    num2 = 0.0;
    operator = '';
    currentNum = '';
    updateDisplay();
}

// Select screen and buttons
const screen = document.querySelector('#screen');
const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operation');
const clearButton = document.querySelector('#AC');
const decimalButton = document.querySelector('#decimal');

// Number button event listener
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNum += button.textContent;
        updateDisplay();
    });
});

// Operator button event listener
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            if (operator && num1 !== '' && currentNum !== '') {
                num2 = parseFloat(currentNum);
                currentNum = operate(operator, parseFloat(num1), num2).toString();
                num1 = currentNum;
                num2 = '';
                operator = '';
            }
        } else {
            if (currentNum !== '') {
                if (operator) {
                    num2 = parseFloat(currentNum);
                    num1 = operate(operator, parseFloat(num1), num2).toString();
                    currentNum = '';
                } else {
                    num1 = parseFloat(currentNum);
                    currentNum = '';
                }
                operator = value;
            }
        }
        updateDisplay();
    });
});

// Clear button event listener
clearButton.addEventListener('click', clear);

// Decimal button event listener
decimalButton.addEventListener('click', () => {
    if (!currentNum.includes('.')) {
        currentNum += '.';
        updateDisplay();
    }
});

// Initial display update
updateDisplay();
