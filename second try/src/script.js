const buttons = document.querySelectorAll('button');
const screenBottom = document.querySelector('.screenBottom');
const screenTop = document.querySelector('.screenTop');
screen.readOnly = true;

let expression = '';
let expressionTwo = '';
const operators = ['+', '-', '*', '/'];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            clearScreen();
        } else if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'Del') {
            deleteLastCharacter();
        } else if (operators.includes(buttonText)) {
            handleOperator(buttonText);
        } else {
            appendCharacter(buttonText);
        }
    });
});

function clearScreen() {
    screenBottom.textContent = '';
    screenTop.textContent = '';
    expression = '';
    expressionTwo = '';
}

function calculateResult() {
    screenBottom.textContent = eval(expression);
    screenTop.textContent = '';
    expression = '';
    expressionTwo = '';
}

function deleteLastCharacter() {
    if (screenTop.textContent === '') {
        expression = expression.slice(0, -1);
        screenBottom.textContent = expression;
    } else {
        expression = expression.slice(0, -1);
        expressionTwo = expressionTwo.slice(0, -1);
        screenBottom.textContent = expressionTwo;
    }
}

function handleOperator(operator) {
    if (expression.includes(operator)) {
        screenTop.textContent = eval(expression);
        return;
    }
    expression = screenTop.textContent = screenBottom.textContent + operator;
    screenBottom.textContent = '';
}

function appendCharacter(char) {
    if (screenTop.textContent === '') {
        expressionTwo = '';
        expression += char;
        screenBottom.textContent = expression;
    } else {
        expression += char;
        expressionTwo += char;
        screenBottom.textContent = expressionTwo;
    }
}

