let email = {},
    password = {},
    signInButton;

    const isValidEmailAddress = function(emailAddress) {
        // Basis manier om e-mailadres te checken.
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    };
    const isEmpty = function(fieldValue) {
        return !fieldValue || !fieldValue.length;
     };

    const getDOMElements = function(){
        email.field = document.querySelector(".js-email-field");
        email.errorMessage = document.querySelector(".js-email-error-message");
        email.input = document.querySelector(".js-email-input");
        
        signInButton = document.querySelector(".c-button-js-sign-in-button");
    }

    const addErrors = function(formfield){
        formfield.classlist.add('has-error');
    }
    const removeErrors = function(formfield){
        formfield.classlist.remove('has-error');
    }

    const enableListener = function(){
        email.input.addEventListener('blur', function(){
            if(isEmpty(email.input.value)){
                addErrors(email.field);
            }else{
                removeErrors(email.input.field);
            }
        });

        signInButton.addEventListener('click', function(){

        });
    }


    document.addEventListener('DOMContentLoaded', function () {
        //aaa
        getDOMElements();
        enableListener();
    });