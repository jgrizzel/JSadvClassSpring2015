// regular expressions for validation
var regexName = /^[A-Za-z0-9 ]{3,30}$/;
var regxPhone = /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var regexEmail = /^[a-zA-Z0-9$]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{3}$/;

// gets the button so i can use it with the onclick function
var saveData = document.querySelector('#saveData');
//onclick function to run the function checkForm
saveData.addEventListener('click', checkForm);
// get the button clear data to use with a function
var clearData = document.querySelector('#clearData');
// deletes data in local storage
clearData.addEventListener('click', deleteData);

//function that takes out html tags in the description
function strip_HTML(str) {
    var findHtml = /<(.|\n)*?>/gi;
    return str.replace(findHtml, "");
}
// function that removes the data data from local storage
function deleteData() {
    localStorage.removeItem("final");
}
//not used but i think this would be used in the displaying what is in the local storage
//in the table.
function showData()
{
    var jsonValue = localStorage.getItem('json');
}
// array for local storage
    var arr2 = [];

function checkForm(e) {
    e.preventDefault();

    //creates variables and gathers the input from the page
    var fullname = document.querySelector('input[name="name"]');
    var email = document.querySelector('input[name="email"]');
    var phone = document.querySelector('input[name="phone"]');
    var description = document.getElementById('description');
// creates variables that can be used for error checking
    var fullname_err = document.querySelector('#fullname_err');
    var email_err = document.querySelector('#email_err');
    var phone_err = document.querySelector('#phone_err');
    var description_err = document.querySelector('#description_err');

//variable isValid to be used in error checking
    var isValid = true;
    

//regex testing for the fullname value inputed by user.
    if (!regexName.test(fullname.value)) {
        fullname_err.innerHTML = "Enter you name.";
        isValid = false;
    } else {

        fullname_err.innerHTML = "";

    }
//regex testing for email inputed by user.
    if (!regexEmail.test(email.value)) {
        email_err.innerHTML = "Enter a valid email.";
        isValid = false;
    } else {
        email_err.innerHTML = "";


    }
// regex tesating for phone inputed by user
    if (!regxPhone.test(phone.value)) {
        phone_err.innerHTML = "Enter a valid phone number.";
        isValid = false;
    } else {
        phone_err.innerHTML = "";

    }
//regex testing for description being filled in
    if (description.value === '') {
        description_err.innerHTML = "Description must be entered";
    } else {
        // gets rid of any HTML tags that may be in the description
        description.value = strip_HTML(description.value);
        description_err.innerHTML = "";

    }
// if validations are passed is valid will be equal to true and the following will happen
    if (isValid === true) {
        // adds values to json data object
        var testData = {
            "name": fullname.value,
            "email": email.value,
            "phone": phone.value,
            "description": description.value
        };
// adds the json data object to the array
        arr2.push(testData);
// stores the jason object to the local storage
        localStorage.removeItem('final');
        localStorage.setItem('final', JSON.stringify(arr2));

// clear all the fields to allow the user to enter the next data set
        fullname.value = "";
        email.value = "";
        phone.value = "";
        description.value = "";
    }


}
