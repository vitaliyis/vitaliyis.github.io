let btnsNumber = document.querySelector('.btns-number');
let buttons = btnsNumber.querySelectorAll('.btn');
let btnHangup = document.querySelector('.btn-hangup');
let btnCall = document.querySelector('.btn-call');
let waitTitle = document.querySelector('.wait');
let remoteVideo = document.querySelector('#remoteVideo');
let range = document.querySelector('#formControlRange');

range.addEventListener('change', e => handleRangeUpdate(e));
range.addEventListener('mousemove', e => handleRangeUpdate(e));
range.addEventListener('touchmove', e => handleRangeUpdate(e));

function handleRangeUpdate (e) {
    remoteVideo['volume'] = e.target.value;
}

buttons.forEach(btn =>  btn.setAttribute('disabled', true) );
btnHangup.setAttribute('disabled', true);
btnCall.setAttribute('disabled', true);
range.setAttribute('disabled', true);
range.innerText = 'volume'

btnHangup.addEventListener('click', () => {
    buttons.forEach(btn =>  btn.setAttribute('disabled', true) );
    btnHangup.setAttribute('disabled', true);
    range.setAttribute('disabled', true);
    btnCall.removeAttribute('disabled');
});
