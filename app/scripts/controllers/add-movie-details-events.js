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
        var movie = createMovie(movieTitle, movieYear, movieGenre, movieDirector, movieSummary);

        data.movies.addToDataBase(movie);
    })

}

