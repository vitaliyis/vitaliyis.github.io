let btnsNumber = document.querySelector('.btns-number');
let buttons = btnsNumber.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', () => {
    console.log(btn.innerText);
}) );
