// Xndir 1 - Operator
let a = +prompt('number No1');
let c = prompt('operators (+ - * /)');
let b = +prompt('number No2');

function calc(a, b, operator, gumarum, hanum, bazmapatkum, bajanum) {
    switch(operator) {
        case "+":
            return gumarum(a, b);
        case "-":
            return hanum(a, b);
        case "*":
            return bazmapatkum(a, b);
        case "/":
            return bajanum(a, b);
    }
}

alert((calc(a, b, c, sum, sub, multi, division)));

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}