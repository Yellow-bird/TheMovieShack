export function addReview(currentMovie) {
    'use strict';
    var btnAddReview = $('#btn-review');

    btnAddReview.on('click', function () {
       var reviewContent = $('#review-content').val();

        // check if there is a user signed in
        // create a new Review obj
        // wrap it in try catch
            // if no error - attach it to current movie in db; attach it to current user reviews
            // else - display somewhere the error (could be in #review-content)
    });
}
