const calcArea = document.querySelector('#calc-area');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('#clear');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const allClear = document.querySelector('.clear-all');
const equals = document.querySelector('.equals');
const mult = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

let numberOne = "";
let numberTwo = "";
let operation = "";
let emptyArea = "F";

function addNumber (num) {
    calcArea.textContent += num;
}
function replaceNumber (num) {
    calcArea.textContent = num;
}
function clearAll () {
    numberOne = "";
    numberTwo = "";
    operation = "";
    emptyArea = "F";
    calcArea.textContent = "";
}
function performOperation (operator) {
    if (operator == "plus") {
        let solution = numberOne + numberTwo;
        calcArea.textContent = solution;
        numberOne = "";
        numberTwo = "";
    }
    else if (operator == "minus") {
        let solution = numberOne - numberTwo;
        calcArea.textContent = solution;
        numberOne = "";
        numberTwo = "";
    }
    else if (operator == "multiply") {
        let solution = numberOne * numberTwo;
        calcArea.textContent = solution;
        numberOne = "";
        numberTwo = "";
    }
    else if (operator == "divide") {
        let solution = numberOne / numberTwo;
        calcArea.textContent = solution;
        numberOne = "";
        numberTwo = "";
    }
}


allClear.addEventListener('click', () => {
    clearAll();
})


clear.addEventListener('click', () => {
    calcArea.textContent = "";
});

buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        if (emptyArea == "F") {
            addNumber(buttons.getAttribute('id'));
        }
        else {
            replaceNumber(buttons.getAttribute('id'));
            emptyArea = "F";
        }
    })
})

plus.addEventListener('click', () => {
    if (numberOne == "") {
        numberOne = Number(calcArea.textContent);
        operation = "plus";
        emptyArea = "T";
    }
    else {
        numberTwo = Number(calcArea.textContent);
        performOperation(operation);
        operation = "plus"
        emptyArea = "T";
        numberOne = Number(calcArea.textContent);
    }
})

minus.addEventListener('click', () => {
    if (numberOne == "") {
        numberOne = Number(calcArea.textContent);
        operation = "minus";
        emptyArea = "T";
    }
    else {
        numberTwo = Number(calcArea.textContent);
        performOperation(operation);
        operation = "minus"
        emptyArea = "T";
        numberOne = Number(calcArea.textContent);
    }
})
mult.addEventListener('click', () => {
    if (numberOne == "") {
        numberOne = Number(calcArea.textContent);
        operation = "multiply";
        emptyArea = "T";
    }
    else {
        numberTwo = Number(calcArea.textContent);
        performOperation(operation);
        operation = "multiply"
        emptyArea = "T";
        numberOne = Number(calcArea.textContent);
    }
})
divide.addEventListener('click', () => {
    if (numberOne == "") {
        numberOne = Number(calcArea.textContent);
        operation = "divide";
        emptyArea = "T";
    }
    else {
        numberTwo = Number(calcArea.textContent);
        performOperation(operation);
        operation = "divide"
        emptyArea = "T";
        numberOne = Number(calcArea.textContent);
    }
})
equals.addEventListener('click', () => {
    numberTwo = Number(calcArea.textContent);
    performOperation(operation);
    operation = "";
})
