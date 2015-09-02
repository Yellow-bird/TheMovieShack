var data = (function () {
    'use strict';

    function userSignUp(newUser) {

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
            signedIn: userIsSignedIn
        },
        movies: {

        }
    }
}());

export default data;