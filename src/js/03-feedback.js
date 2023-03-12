import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');


form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onSubmitForm);



fillInputs();


function onInputChange() {
    const emailValue = input.value;
    const textareaValue = textarea.value;
    localStorage.setItem("feedback-form-state", JSON.stringify({ email : emailValue, message : textareaValue}) );

};

function onSubmitForm(event) {
    event.preventDefault();
    console.log(localStorage.getItem("feedback-form-state"));
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};

function fillInputs() {
     const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
    

    if (savedMessage) {
        input.value = savedMessage.email;
        textarea.value = savedMessage.message;
    }

};