import {submitMovieDetails} from '../controllers/add-movie-details-events.js';

export function renderAddMovie() {
    'use strict';
    var $mainContent = $('#main-content');

    $.ajax('templates/add-movie-form.html', {
        success: function (partialHtml) {
            $mainContent.html(partialHtml);
            submitMovieDetails();
        }
    });
}
