const calcArea = document.querySelector('#calc-area');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('#clear');
const plus = document.querySelector('#plus');
const allClear = document.querySelector('.clear-all');

let numberOne = 0;
let numberTwo = 0;
let operation = "";
let emptyArea = "F";

function addNumber (num) {
    calcArea.textContent += num;
}
function replaceNumber (num) {
    calcArea.textContent = num;
}
function clearAll () {
    numberOne = 0;
    numberTwo = 0;
    operation = "";
    emptyArea = "F";
    calcArea.textContent = "";
}

allClear.addEventListener('click', () => {
    clearAll();
})

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

clear.addEventListener('click', () => {
    calcArea.textContent = "";
});

plus.addEventListener('click', () => {
    if (numberOne == 0) {
        numberOne = Number(calcArea.textContent);
        operation = "plus";
        emptyArea = "T";
    }
    else {
        numberTwo = Number(calcArea.textContent);
        let sum = numberOne + numberTwo;
        numberOne = sum;
        numberTwo = 0;
        calcArea.textContent = sum;
        operation = "";
        emptyArea = "T";
        
    }
})


