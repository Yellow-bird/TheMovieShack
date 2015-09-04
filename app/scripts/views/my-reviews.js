import data from 'scripts/controllers/data.js';

export function renderMyReviews() {
    'use strict';

    var $mainContent = $('#main-content'),
        aUserIsSignedIn = data.users.signedIn(),
        currentUsername;

    if (!aUserIsSignedIn) {
        $mainContent.html("You must be signed in.");
        return;
    }

    currentUsername = data.users.getCurrentUsername();

    data.reviews.getByAuthor(currentUsername)
        .then(function (dbReviews) {
            if (dbReviews.length === 0) {
                $mainContent.html("You don't have any reviews yet.");
                return;
            }

            $.ajax('templates/my-reviews-form.html', {
                success: function (template) {
                    template = $(template);
                    var reviewsTemplate = Handlebars.compile(template.html());
                    var partial = reviewsTemplate(dbReviews);
                    $mainContent.html(partial);
                }
            });
        });
}
