import data from 'scripts/controllers/data.js';

export function addRating(movie) {
    var $rateButton = $('#rate-btn');
    $rateButton.on('click', function () {
        var currentRating = $('#rating-select').val();

        data.movies.setRating(movie, currentRating);

    });
}