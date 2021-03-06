import backendServices from 'scripts/backend-services.js';
import {renderHome} from 'scripts/views/home.js';
import {renderReviews} from 'scripts/views/reviews.js';
import {renderMyReviews} from 'scripts/views/my-reviews.js';
import {renderAbout} from 'scripts/views/about.js';
import {renderSignForm} from 'scripts/sign-in-up.js';
import {renderAddMovie} from 'scripts/views/addMovie.js';
import {renderMovieDetails} from 'scripts/views/movieDetails.js';
import {createMovie} from 'scripts/models/movie.js';
import data from 'scripts/controllers/data.js';
//import $ from 'jquery';

var app = Sammy('#main-content', function () {
    this.get('#/home', renderHome);
    this.get('#/signinup', renderSignForm);
    this.get('#/signout', function (context) {
        data.users.signOut()
            .then(function () {
                $('#nav-item-sign-out').hide();
                $('#nav-item-sign-in-up').show();
                context.redirect('#/home');
            });
    });
    this.get('#/myreviews', renderMyReviews);
    this.get('#/reviews', renderReviews);
    this.get('#/about', renderAbout);
    this.get('#/addamovie', renderAddMovie);
    this.get('#/details/:id', function () {
        renderMovieDetails(this.params.id);
    });

});

$(document).ready(function () {
    var userIsSignedIn;

    backendServices.start();

    userIsSignedIn = data.users.signedIn();
    if (userIsSignedIn) {
        $('#nav-item-sign-in-up').hide();
        $('#nav-item-sign-out').show();
    } else {
        $('#nav-item-sign-out').hide();
        $('#nav-item-sign-in-up').show();
    }

    app.run('#/home');
}());