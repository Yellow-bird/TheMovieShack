import {createMovie} from 'scripts/models/movie.js';
import data from 'scripts/controllers/data.js';

export function submitMovieDetails() {
    var $submitButton = $('#submit-movie-details-btn');
    $submitButton.on('click', function () {
        var movieTitle = $('#inputTitle').val();
        var movieYear = $('#select').val();
        var movieGenre = $('#inputGenre').val();
        var movieDirector = $('#inputDirector').val();
        var movieSummary = $('#inputSummary').val();
        var movieWriters = $('#inputWriter').val();
        var movieCast = $('#inputCast').val();
        var movie = createMovie(movieTitle, movieYear, movieGenre, movieDirector, movieSummary, movieWriters, movieCast);

        data.movies.addToDataBase(movie).
            then(function (value) {
                var currentLocation = window.location.href,
                    nextLocation = currentLocation + 'TheMovieShack/app/index.html#/home';
                window.location.href = nextLocation;
            });
    })

}

