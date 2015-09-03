import data from 'scripts/controllers/data.js';
import review from 'scripts/models/review.js';

export function addReview(currentMovie) {
    'use strict';
    var btnAddReview = $('#btn-review');

    btnAddReview.on('click', function () {
       var reviewContent = $('#review-content').val(),
           aUserIsSignedIn = data.users.signedIn(),
           authorName,
           newReview,
           exMessage;

        if (!aUserIsSignedIn) {
            alert('You must be signed in to add a review.');
            return;
        }

        authorName = data.users.getCurrentUsername();

        try {
            newReview = Object.create(review).init(reviewContent, currentMovie.originalId, currentMovie.title, authorName);
        }
        catch(ex) {
            exMessage = ex.message;
            alert(exMessage);
            return;
        }

        data.reviews.addToDataBase(newReview)
            .then(function (value) {
                alert('Review added successfully.');
                navigateToHome();
            }, function (reason) {
                alert('Review was not added. Please, excuse us!');
                navigateToHome();
            });
    });
}

function navigateToHome() {
    var currentLocation = window.location.href,
        nextLocation = currentLocation.substring(0, currentLocation.indexOf('#')) + '#/home';

    window.location.href = nextLocation;

    $('#nav-item-sign-in-up').hide();
    $('#nav-item-sign-out').show();
}