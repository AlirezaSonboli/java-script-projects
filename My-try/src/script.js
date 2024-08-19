let buttons = document.querySelectorAll('button');
let screenBottom = document.querySelector('.screenBottom');
let screenTop = document.querySelector('.screenTop');
screen.readOnly = true
let expression = '';
let expressionTwo = '';
let substrings = ['+', '-', '*',];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
         if (button.textContent === 'AC') {
            screenBottom.textContent = ''
            screenTop.textContent = ''
            expression = ''
            expressionTwo = ''
        }
        else if (button.textContent === '=') {
            screenBottom.textContent = eval(expression);
            screenTop.textContent = ''
            expression = ''
            expressionTwo = ''

        }
         else if ( screenTop.textContent === '' && button.textContent === 'Del') {
            expression =  expression.slice(0, -1)
            screenBottom.textContent = expression
         } else if (button.textContent === 'Del') {
            expression =  expression.slice(0, -1)
            expressionTwo =  expressionTwo.slice(0, -1)
            screenBottom.textContent = expressionTwo
         }
         else if ((button.textContent === '+' || button.textContent === '-' || button.textContent === '*') && substrings.some(substring => expression.includes(substring))) {
            console.log(expression);
            screenTop.textContent = eval(expression);
            return
        }
        else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*') {
            expression = screenTop.textContent = screenBottom.textContent + button.textContent;
            console.log(expression);
            screenBottom.textContent = '';
        }

        else if ((button.textContent === '÷') && expression.includes('/')) {
            return;
        }

        else if (button.textContent === '÷' ) {
            expression += '/';
            screenTop.textContent = screenBottom.textContent + button.textContent ,
            screenBottom.textContent=''
        }
        else if (screenTop.textContent === '') {

            expressionTwo = ''
            expression += button.textContent;
            screenBottom.textContent = expression;
        }
        else{
            console.log(expression)
            expression += button.textContent;
            expressionTwo += button.textContent;
            screenBottom.textContent = expressionTwo

        }
    });
});
