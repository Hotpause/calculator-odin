const mainContainer = document.querySelector('.main-container');
const calculator = document.querySelector('.calculator');
let disp = document.querySelector(".display");
const btns = document.querySelector('.buttons');
const nums = document.querySelector(".nums");
const oprtr = document.querySelector('.operators');
const numberButtons = document.querySelectorAll('.number'); // Change selector to target number buttons
const operatorButtons = document.querySelectorAll('.operator'); // Select operator buttons
const specialButtons = document.querySelectorAll('.special'); // Select special buttons (CE and AC)
const equalButton = document.querySelector('.equal'); // Select equal button

let display_value = "";

// Event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        numberHandler(number);
    });
});



operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.textContent;
        operatorHandler(operator);
    })
})


specialButtons.forEach(button => {
    button.addEventListener('click',()=>{
        const action = button.textContent;
        if (action ==='CE'){
            clearEntry();

        }
        else if(action ==='AC'){
            allClear();
        }

    });
});



// Event listener for equal button
equalButton.addEventListener('click', calculate);

// Function to handle number input
function numberHandler(number) {
    display_value += number;

    // Check if display_value contains two numbers and an operator
    if (display_value.split(' ').length === 3) {
        calculate(); // Calculate if the expression is complete
    }

    disp.textContent = display_value;
}

// Function to handle operator input
function operatorHandler(operator) {
    display_value += " " + operator + " ";
    disp.textContent = display_value;
}

// Function to clear the last entry
function clearEntry() {
    display_value = display_value.slice(0, -1);
    disp.textContent = display_value;
}

// Function to clear the display
function allClear() {
    display_value = "";
    disp.textContent = '0';
}
 
// Function to calculate the result
function calculate() {
    const expression = display_value.split(' ');
    const num1 = parseFloat(expression[0]);
    const operator = expression[1];
    const num2 = parseFloat(expression[2]);

    if (!isNaN(num1) && !isNaN(num2) && operator) {
        const result = operate(operator, num1, num2);
        disp.textContent = result;
        display_value = result.toString();
    }
}

function add(a,b){
    let c = a+b;
    return c;
}

function subtract(a,b){
    let c = a-b;
    return c;
}

function multiply(a,b){
    let c = a*b;
    return c;
}

function divide(a,b){
    let c = a/b;
    return c;
}


function operate(operator,num1,num2){

    let result;
    switch(operator){

        case '+':
            result = add(num1,num2);
            break;

        case '-':
            result = subtract(num1,num2);
            break;
        
        case '/':
            result = divide(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        default:
            result = 'Wrong operator'
            
    }

    return result;

}

let operator = '+';
let num1 = 2;
let num2 = 3;


let result = operate(operator,num1,num2);
console.log('result:', result);

