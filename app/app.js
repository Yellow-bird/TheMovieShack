import {initializeParse} from 'scripts/parse-initializer.js';
import {renderHome} from 'scripts/views/home.js';
import {renderAbout} from 'scripts/views/about.js';
import {renderSignForm} from 'scripts/sign-in-up.js';
import {renderAddMovie} from 'scripts/views/addMovie.js';
import {renderMovieDetails} from 'scripts/views/movieDetails.js';
import {createMovie} from 'scripts/models/movie.js';
//import $ from 'jquery';

var app = Sammy('#main-content', function () {
    this.get('#/home', renderHome);
    this.get('#/signinup', renderSignForm);
    this.get('#/about', renderAbout);
    this.get('#/addamovie', renderAddMovie);
    this.get('#/moviedetailsaliensample', renderMovieDetails);
});

$(document).ready(function() {
    initializeParse();

    // since there is no sign out for the moment...
    localStorage.clear();

    app.run('#/home');
}());


