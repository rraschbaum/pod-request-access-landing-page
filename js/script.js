const emailRegex = '/\S+@\S+\.\S+/';
const email = document.getElementById('email');
const button = document.getElementById('submit-btn');
const errorElement = document.getElementById('error');

button.addEventListener('click', () => {
    const emailValue = email.value;
    console.log(emailValue);
    if(!emailValue){
        errorElement.innerText = 'Oops! Please add your email';
    }

    else if(!emailValue.includes(emailRegex)) {
        errorElement.innerText = 'Oops! Please check your email';
    }
});