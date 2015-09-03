import data from 'scripts/controllers/data.js';

export function addReview(currentMovie) {
    'use strict';
    var btnAddReview = $('#btn-review');

    btnAddReview.on('click', function () {
       var reviewContent = $('#review-content').val(),
           aUserIsSignedIn = data.users.signedIn();

        if (!aUserIsSignedIn) {
            alert('You must be signed in to add a review.');
            return;
        }



        // check if there is a user signed in - done
        // create a new Review obj
        // wrap it in try catch
            // if no error - attach it to current movie in db; attach it to current user reviews
            // else - display somewhere the error (could be in #review-content)
    });
}
