import user from 'scripts/models/user.js';
import data from 'scripts/controllers/data.js';

export function submitSignIn() {
    'use strict';
    var $btnSubmit = $('#btn-sign-in');

    $btnSubmit.on('click', function () {
       var $usernameValue = $('#registered-username-input').val(),
           $passwordValue = $('#registered-password-input').val();

        Parse.User.logIn($usernameValue, $passwordValue, {
            success: function(data) {
                console.log('Logged in');
            },
            error: function(user, error) {
                console.log('Login failed');
            }
        });
    });
}

export function submitSignUp() {
    'use strict';
    var $btnSubmit = $('#btn-sign-up');

    $btnSubmit.on('click', function () {
        var $usernameValue = $('#new-username-input').val(),
            $passwordValue = $('#new-password-input').val(),
            $mailValue = $('#new-mail-input').val(),
            newUser,
            exMessage,
            failingProperty,
            displayMessage;

        // checks if client-side user validation passes
        try {
            newUser = Object.create(user).init($usernameValue, $passwordValue, $mailValue);
        }
        catch(ex) {
            exMessage = ex.message;
            failingProperty = exMessage.substring(0, exMessage.indexOf('!'));
            displayMessage = exMessage.substring(failingProperty.length + 1);
            $('#new-' + failingProperty + '-input').val(displayMessage);
            return;
        }

        console.log('after ex');

        // pass user to the database
        data.users.signUp(newUser)
            .then(function (value) {
                console.log('success--- ' + value);
            }, function (reason) {
                console.log('err--- ' + reason);
            });


            //user = new Parse.User();

        /*user.set("username", $usernameValue);
        user.set("password", $passwordValue);
        user.set("email", $mailValue);

        user.signUp(null, {
            success: function(user) {
                console.log(user.getUsername() + ' registered!');
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                console.log("Error: " + error.code + " " + error.message);
            }
        });*/
    });
}
