var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var gender = document.getElementById('gender');
var age = document.getElementById('age');
var email = document.getElementById('email');
var websiteAddress = document.getElementById('websiteAddress');
var comment = document.getElementById('comment');
var submitButton = document.getElementById('submit');
var buttonCloseContact = document.getElementById('btn-close-contact');

buttonCloseContact.addEventListener('click', function() {
    closeContact();
});

var text = 'input not valid';

function isFirstNameValid() {
    if (firstName.value == '') {
        document.getElementById('firstNameSpan').innerHTML = text;
        return false;
    }
    
    if (firstName.value.length > 25) {
        document.getElementById('firstNameSpan').innerHTML = 'Input needs to be under 25 characters';
        return false;
    }
    return true;   
}

function isLastNameValid() {
    if (lastName.value == '') {
        document.getElementById('lastNameSpan').innerHTML = text;
        return false;
    }
    if (lastName.value.length > 25) {
        document.getElementById('lastNameSpan').innerHTML = 'Input needs to be under 25 characters';
        return false;
    }
    return true;
}

function isGenderValid() {
    var genderValue = gender.options[gender.selectedIndex].value;
    if (genderValue == '') {
        document.getElementById('genderSpan').innerHTML = text;
        return false;
    }
    return true;
}

function isAgeValid() {
    if (age.value == '') {
        document.getElementById('ageSpan').innerHTML = text;
        return false;
    }
    if (age.value < 18 || age.value > 100) {
        document.getElementById('ageSpan').innerHTML = 'age should be between 18-100';
        return false;
    }
    return true;
}

function isEmailValid() {
    if (email.value == '') {
        document.getElementById('emailSpan').innerHTML = text;
        return false;
    }
    if (email.value.length > 50){
        document.getElementById('emailSpan').innerHTML = 'Input needs to be under 50 characters';
        return false;
    }
    return true;       
}

function isWebsiteAdressValid() {
    if (websiteAddress.value == '') {
        document.getElementById('websiteAddressSpan').innerHTML = text;
        return false;
    }
    if (websiteAddress.value.length > 50) {
        document.getElementById('websiteAddressSpan').innerHTML = 'Input needs to be under 50 characters';
        return false;
    }
    return true;
}

function isCommentValid() {
    if (comment.value == '') {
        document.getElementById('commentSpan').innerHTML = text;
        return false;
    }
    if (comment.value.length > 255) {
        document.getElementById('firstNameSpan').innerHTML = 'Input needs to be under 255 characters';
        return false;
    }
    return true;
}

function isFormValid() {
    
    return isFirstNameValid() &&
        isLastNameValid() &&
        isGenderValid() &&
        isAgeValid() &&
        isEmailValid()&&
        isWebsiteAdressValid() &&
        isCommentValid(); 
}

function closeContact() {
    const element = document.getElementById('contactConfirmation');

    element.style.display = 'none';
}

$("#contactForm").submit(function (e) {
    var genderText = gender.options[gender.selectedIndex].text;

    e.preventDefault();
    if (!isFormValid()) {
        return;
    }

    document.getElementById('nameDisplay').innerHTML = `Name: ${firstName.value} ${lastName.value}`;
    document.getElementById('genderDisplay').innerHTML = `Gender: ${genderText}`;
    document.getElementById('ageDisplay').innerHTML = `Age: ${age.value}`;
    document.getElementById('emailDisplay').innerHTML = `Email: ${email.value}`;
    document.getElementById('websiteAddressDisplay').innerHTML = `Website Address: ${websiteAddress.value}`;
    document.getElementById('commentDisplay').innerHTML = `Comment: ${comment.value}`;

    document.getElementById('contactConfirmation').style.display = 'block';
});

