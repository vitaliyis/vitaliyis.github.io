let btnsNumber = document.querySelector('.btns-number');
let buttons = btnsNumber.querySelectorAll('.btn');
let screenPhone = document.querySelector('.screen-phone');
let clearNumber = document.querySelector('.clear-number');
let clearAll = document.querySelector('.clear-all');

clearNumber.setAttribute('disabled', true);
clearAll.setAttribute('disabled', true);

buttons.forEach(btn => btn.addEventListener('click', () => {
    // console.log(btn.innerText);

    if (!btn.classList.contains('clear-number') & !btn.classList.contains('clear-all')) {
        screenPhone.value = screenPhone.value + btn.innerText;
        clearNumber.removeAttribute('disabled');
        clearAll.removeAttribute('disabled');
    }

    // if (screenPhone.value === '') {
    //     clearNumber.setAttribute('disabled', true);
    // } else {
    //     clearNumber.removeAttribute('disabled');
    // }
    // console.log(screenPhone.value.length)
}) );

clearNumber.addEventListener('click', () => {
    let length = screenPhone.value.length;
    screenPhone.value = screenPhone.value.slice(0, length-1);
    if (screenPhone.value === '') {
        clearNumber.setAttribute('disabled', true);
        clearAll.setAttribute('disabled', true);
    }
});

clearAll.addEventListener('click', () => {
    screenPhone.value = '';
    clearNumber.setAttribute('disabled', true);
    clearAll.setAttribute('disabled', true);
});
