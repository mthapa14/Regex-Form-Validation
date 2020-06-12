let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let emailsubject = document.getElementById('emailsubject');
let phone = document.getElementById('phone');
let answer = document.getElementById('answer');
let message = document.getElementById('message');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement; //selecting parentelement of inout
    formControl.className = 'form-control error'; //manipulating a class name
    const small = formControl.querySelector('small'); //selecting an element small
    small.innerText = message; //displaying message in small element
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid using regular expression
function checkEmail(input) {
    const reg3 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg3.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid! Must be like email@something.com');
    }
}

// function for checking correct first name input
function checkFirstName(input) {
    const regfname = /^[a-zA-z]{5,12}$/;
    if (regfname.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'First name is not valid! Must be 5 to 12 character long!');
    }
}

// function for checking correct last name input
function checkLastName(input) {
    const reglname = /^[a-zA-z]{5,12}$/;
    if (reglname.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Last name is not valid! Must be 5 to 12 character long!');
    }
}

// function for checking correct last name input
function checkEmailSubject(input) {
    const regsname = /^(.+)$/im;
    if (regsname.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Please Provide Email Subject!');
    }
}

// function for checking correct last name input
function checkPhone(input) {
    const regpname = /^\d{10}$/;
    if (regpname.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Phone is not valid! Must be 10 digits long!');
    }
}

/* // function for checking correct last name input
function checkMessage(textarea) {
    const regmname = /^[a-zA-Z]{10,100}$/;
    if (regmname.test(textarea.value.trim())) {
        showSuccess(textarea);
    } else {
        showError(textarea, 'Not sufficient message. Must be 10 to 100 character long');
    }
} */
function checkMessage(input)
{
        if(document.getElementById('message').value == '')
        {
        showError(input,"Please Provide Message!");      
        }
        else
        showSuccess(input);
}


//check required fields
//checkrequired function has inputArr as parameter
function checkRequired(inputArr) {
    //looping all the input array in foreach loop having function
    inputArr.forEach(function(input){
        //using if statement checking if there is no value in input field
        //call showError function. 
        if (input.value.trim()==='') {
            showError(input, `${getFieldName(input)} is required`)
        }
        //else call showSuccess function
         else {
            showSuccess(input);
        }
    }); 
}


/* //check input length
function checkLength(input, min, max) {
    if (input.value.length< min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }

        
}*/

//check question answer field
function checkAnswer(input) {
    if(input.value != 2){
        showError(input, 'Please try again!');
    } else{
        showSuccess(input);
    }
    
}

//get field name
//this function will get all the value of input user typed
//and convert first letter to uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
}
//event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //passing all input into checkRequired method in the form of array
        checkRequired([firstname, lastname, email, emailsubject, phone, answer]);
        /* checkLength(username, 3, 15);
        checkLength(password, 6, 25); */
        checkEmail(email);
        checkFirstName(firstname);
        checkLastName(lastname);
        checkEmailSubject(emailsubject);
        checkPhone(phone);
        checkAnswer(answer);
        checkMessage(message);
});