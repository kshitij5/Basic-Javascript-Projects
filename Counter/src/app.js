// set initial valu of count
let count = 0;

// we will select values and al buttons using queryselector
const counter = document.querySelector('#counter');
// value is id here
const btns = document.querySelectorAll(".btn");
// btn is class here

btns.forEach(function(btn) {
    btn.addEventListener("click", onClick);
});

function onClick(e) {
    const style = e.currentTarget.classList;

    if(style.contains('decrease')) {
        count--;
    }else if(style.contains('increase')) {
        count++;
    }else if(style.contains('reset')) {
        count = 0;
    }

    if(count>0) counter.style.color = "cyan";
    else if(count<0) counter.style.color = "red";
    else counter.style.color = "black";
    counter.textContent = count;
}