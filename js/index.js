const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
.forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
.forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.value = eval(display.value);
}

document.querySelector('.reset').addEventListener('click', reset);
function reset() {
    display.value = " ";
}

document.querySelector('.point').addEventListener('click', point);
function point() {
    display.value = display.value + ".";
}









