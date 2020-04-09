function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.getElementsByClassName('time')[0].innerHTML = hours + ':' + mins + ':' + secs; 
}

setInterval(printTime, 1000);

let number1;
let number2;

function insert(ev,num) {
    ev.preventDefault()
    document.getElementById('hashvark').innerHTML += num;
}

let verjnakan;

function clean(ev) {
    ev.preventDefault()
    document.getElementById('hashvark').innerHTML = '';
}

function equal(ev) {
    ev.preventDefault()
    verjnakan = document.getElementById('hashvark').innerHTML;
    let step = verjnakan + '=';
    if(verjnakan) {
        step += document.getElementById('hashvark').innerHTML = eval(verjnakan);
    }
    saveSteps(step);
}

function saveSteps(step) {
    document.getElementById('qayler').innerHTML += step + `</br>`;
}
