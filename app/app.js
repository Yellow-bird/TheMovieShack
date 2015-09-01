import {initializeParse} from 'scripts/parse-initializer.js';
import {renderHome} from 'scripts/home.js';
import {renderAbout} from 'scripts/about.js';
import {renderSignForm} from 'scripts/sign-in-up.js';
//import $ from 'jquery';


var app = Sammy('#main-content', function () {
    this.get('#/home', renderHome);
    this.get('#/signinup', renderSignForm);
    this.get('#/about', renderAbout);
});

$(document).ready(function() {
    initializeParse();

    // since there is no sign out for the moment...
    localStorage.clear();

    app.run('#/home');
}());
