var data = (function () {
    'use strict';

    function userSignUp(newUser) {
        var promise = new Promise(function (resolve, reject) {
            var user = new Parse.User();
            user.setUsername(newUser.username);
            user.setPassword(newUser.password);
            user.setEmail(newUser.email);
            user.set('isSuperUser', newUser._superUser);

            user.signUp(null, {
                success: function (user) {
                    resolve(user);
                },
                error: function (user, error) {
                    reject(error.message);
                }
            })
        });

        return promise;
    }

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

    function userSignIn(username, password) {
        var promise = new Promise(function (resolve, reject) {
            Parse.User.logIn(username, password, {
               success: function (user) {
                   resolve(user);
               },
                error: function (user, error) {
                    reject(error.message);
                }
            });
        });

        return promise;
    }

    /*Parse.User.logIn($usernameValue, $passwordValue, {
        success: function(data) {
            console.log('Logged in');
        },
        error: function(user, error) {
            console.log('Login failed');
        }
    });*/

    function userIsSignedIn() {
        var currentUser = Parse.User.current();

        if (currentUser === null) {
            return false;
        }

        return true;
    }

    return {
        users: {
            signUp: userSignUp,
            signIn: userSignIn,
            signedIn: userIsSignedIn
        },
        movies: {

        }
    }
}());

export default data;