const display = document.querySelector('.display');
const regex = /[/]/g;

document.querySelectorAll('.digits button')
.forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
.forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    if (is_numeric(display.value.substr(display.value.length - 1))) {
        display.value += ev.target.innerText;
    } else {
       display.value = display.value.substr(0, display.value.length - 1) + ev.target.innerText
    }
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    const divisionOperation = display.value.search(regex)
    if (divisionOperation != null && divisionOperation != display.value.length -1 && display.value[divisionOperation + 1] == '0') {
        display.value = 'Division by zero'
    } else {
        display.value = eval(display.value);
    }
}

document.querySelector('.reset').addEventListener('click', reset);
function reset() {
    display.value = " ";
}

document.querySelector('.point').addEventListener('click', point);
function point() {
    display.value = display.value + ".";
}

function is_numeric(str){
    return /^\d+$/.test(str);
}







