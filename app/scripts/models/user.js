var user = (function () {
    'use strict';
    const USERNAME_MIN_LENGTH = 5,
        USERNAME_MAX_LENGTH = 15,
        SUPER_USERS = ['vyara_hristova@yahoo.de', 'domat777@gmail.com', 'denny.dimitrova@abv.bg'];

    var user = {
        init: function(username, password, email) {
            var that = this,
                isSuperUser = false;
            that.username = username;
            that.password = password;
            that.email = email;
            isSuperUser = checkIfSuperUser(email);
            that._superUser = isSuperUser;
            return that;
        }
    };

    Object.defineProperty(user, 'username', {
        get: function() {
            return this._username;
        },
        set: function(value) {
            var isValid = checkIfValidUsername(value);

            if (!isValid) {
                throw new Error('Expected username to contain Latin letters and/or digits (5-15 characters).');
            }

            this._username = value;
        }
    });

    Object.defineProperty(user, 'password', {
        get: function() {
            return this._password;
        },
        set: function(value) {
            // TODO add validation

            this._password = value;
        }
    });

    Object.defineProperty(user, 'email', {
        get: function() {
            return this._email;
        },
        set: function(value) {
            // TODO add validation

            this._email = value;
        }
    });

    return user;

    // private functions
    function checkIfValidUsername(username) {
        var usernameLen = username.length,
            aCharCode = 97,
            zCharCode = 122,
            zeroCharCode = 48,
            nineCharCode = 57,
            usernameLowercase,
            currentCharCode,
            isLetter,
            isDigit,
            i;

        if (usernameLen < USERNAME_MIN_LENGTH || usernameLen > USERNAME_MAX_LENGTH) {
            return false;
        }

        usernameLowercase = username.toLowerCase();

        for (i = 0; i < usernameLen; i += 1) {
            currentCharCode = usernameLowercase.charCodeAt(i);
            isLetter = currentCharCode >= aCharCode && currentCharCode <= zCharCode;
            isDigit = currentCharCode >= zeroCharCode && currentCharCode <= nineCharCode;

            if ((isLetter === false) && (isDigit === false)) {
                return false;
            }
        }

        return true;
    }

    function checkIfSuperUser(mail) {
        var isSuperUser;

        isSuperUser = SUPER_USERS.some(function (item) {
            return item === mail;
        });

        return isSuperUser;
    }
}());

export default user;