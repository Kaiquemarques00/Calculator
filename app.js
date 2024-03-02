const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.getElementById('display');
const teclaOn = document.getElementById('ton');
const teclaLimpar = document.getElementById('tlimpar');

let sinal = false;
let decimal = false;

teclasNum.map((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false;
        
        if(evt.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true;
                if(display.innerHTML == "0") {
                    display.innerHTML = "0,";
                } else {
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            if(display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML;
        }
    })
});

teclasOp.map((el) => {
    el.addEventListener('click', (evt) => {
        if(!sinal) {
            sinal = true;
            if(display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "*") {
                display.innerHTML += "*";
            } else {
                display.innerHTML += evt.target.innerHTML;
            } 
        }
    });
});

teclaLimpar.addEventListener('click', (evt) => {
    sinal = false;
    decimal = false;
    display.innerHTML = "0"
});

teclaRes.addEventListener('click', (evt) => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);
    display.innerHTML = res;
});