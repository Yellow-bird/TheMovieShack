import {submitMovieDetails} from '../controllers/add-movie-details-events.js';
import data from 'scripts/controllers/data.js';

export function renderAddMovie() {
    'use strict';
    var $mainContent = $('#main-content'),
        currentUserCanAddMovie = data.users.canCreateMovie(),
        $containerNoRights;

    if (!currentUserCanAddMovie) {
        $containerNoRights = $('<div>');
        $containerNoRights.text("You don't have rights to add movies.");
        $mainContent.html($containerNoRights);
        return;
    }

    $.ajax('templates/add-movie-form.html', {
        success: function (partialHtml) {
            $mainContent.html(partialHtml);
            submitMovieDetails();
        }
    });
}
