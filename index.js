let contactElement = document.querySelector('.contact-option');
let emailRadio = document.querySelector('#email');
let phoneRadio = document.querySelector('#phone');

let emailSpanElement = document.querySelector('#email1');
let emailDivElement = document.querySelector('#email2');

let phoneSpanElement = document.querySelector('#phone1');
let phoneDivElement = document.querySelector('#phone2');

emailRadio.addEventListener('click', () => {

    inputToggle.setAttribute('placeholder', 'Email');
    
    emailSpanElement.classList.add('activated');
    emailDivElement.classList.add('activated');
    
    phoneSpanElement.classList.remove('activated');
    phoneDivElement.classList.remove('activated');

})

phoneRadio.addEventListener('click', function() {

    inputToggle.setAttribute('placeholder', 'Phone');

    phoneSpanElement.classList.add('activated');
    phoneDivElement.classList.add('activated');

    emailSpanElement.classList.remove('activated');
    emailDivElement.classList.remove('activated');

})

let inputToggle = document.querySelector('#input-toggle');
console.log(placeholder);
console.log(inputToggle.setAttribute('placeholder', placeholder))