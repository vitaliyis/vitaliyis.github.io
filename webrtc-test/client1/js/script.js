let btnsNumber = document.querySelector('.btns-number');
let buttons = btnsNumber.querySelectorAll('.btn');
let btnHangup = document.querySelector('.btn-hangup');
let btnCall = document.querySelector('.btn-call');
let waitTitle = document.querySelector('.wait');

buttons.forEach(btn =>  btn.setAttribute('disabled', true) );
btnHangup.setAttribute('disabled', true);
btnCall.setAttribute('disabled', true);

buttons.forEach(btn =>  btn.addEventListener('click', () => {
    console.log(btn.innerText);
}) );

btnCall.addEventListener('click', () => {
    // buttons.forEach(btn =>  btn.removeAttribute('disabled') );
    // btnHangup.removeAttribute('disabled');
    // btnCall.setAttribute('disabled', true);
});

btnHangup.addEventListener('click', () => {
    buttons.forEach(btn =>  btn.setAttribute('disabled', true) );
    btnHangup.setAttribute('disabled', true);
    btnCall.removeAttribute('disabled');
});
