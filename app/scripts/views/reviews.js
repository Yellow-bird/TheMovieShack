import data from 'scripts/controllers/data.js';

export function renderReviews() {
    'use strict';

    var $mainContent = $('#main-content');

    data.reviews.getAllFromDatabase()
        .then(function (dbReviews) {
            console.log(dbReviews);
            $.ajax('templates/reviews-form.html', {
                success: function (template) {
                    template = $(template);
                    var reviewsTemplate = Handlebars.compile(template.html());
                    var partial = reviewsTemplate(dbReviews);
                    $mainContent.html(partial);
                }
            });
        });
}