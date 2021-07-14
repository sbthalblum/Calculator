const calcArea = document.querySelector('#calc-area');
const buttons = document.querySelectorAll('.button');

function addNumber (num) {
    calcArea.innerHTML += num;
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        addNumber(buttons.getAttribute('id'));
    })
})

function getNumber (id) {

}
function plus () {

}

