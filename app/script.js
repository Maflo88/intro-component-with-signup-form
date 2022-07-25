const btnForm = document.querySelector('.form__btn');
const inputName = document.querySelectorAll('input[type="text"]');
const inputEmail = document.querySelector('#form__email');
const inputPassword = document.querySelector('#form__password');
const errorMsg = document.querySelector('.error__message');
let errorFName = document.querySelector('#error__fname');
let errorLName = document.querySelector('#error__lname');
let errorEmail = document.querySelector('#error__email');
let errorPassword = document.querySelector('#error__password');


function showError(input, error, msg){
        input.classList.add('error', 'icon');
        error.classList.remove('hidden');
        error.textContent = msg;
        /*input.addEventListener('focus', () =>{
            input.classList.remove('error', 'icon');
            error.classList.add('hidden');
        });*/
    };
    
function showSuccess(input, error){
        input.classList.remove('error', 'icon');
        error.classList.add('hidden');
    };

function validate(){

        let result = true;

        let valueFName = inputName[0].value.trim();
        if(valueFName == null || valueFName.length == 0){
            showError(inputName[0], errorFName, "First name cannot be empty"); 
            result = false;  
        } else {
            showSuccess(inputName[0], errorFName);
        };

       let valueLName = inputName[1].value.trim();
       if(valueLName == null || valueLName.length == 0){
            showError(inputName[1], errorLName, "Last name cannot be empty");
            result = false;     
        } else {
            showSuccess(inputName[1], errorLName);
        };

        let valueEmail = inputEmail.value.trim();
        if(!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valueEmail))){
            showError(inputEmail, errorEmail, "Looks like this is not an email");
            result = false;            
        } else {
            showSuccess(inputEmail, errorEmail);
        };

        let valuePassword = inputPassword.value.trim();
        if(valuePassword == null || valuePassword.length == 0){
            showError(inputPassword, errorPassword, "Password cannot be empty");
            result = false;            
        } else {
            showSuccess(inputPassword, errorPassword);
        };

        return result;
    };

    btnForm.addEventListener('click', e => {
        e.preventDefault();
        validate();
    });