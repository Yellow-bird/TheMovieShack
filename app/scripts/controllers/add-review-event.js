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


        // testing
        //console.log(newReview);

        // check if there is a user signed in - done
        // create a new Review obj - done
        // wrap it in try catch - done
            // if no error - attach it to current movie in db; attach it to current user reviews
            // else - display somewhere the error (could be in #review-content)
    });
}
