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