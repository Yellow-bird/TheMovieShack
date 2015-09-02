import {createMovie} from 'scripts/models/movie.js';

export function submitMovieDetails() {
    var $submitButton = $('#submit-movie-details-btn');
    $submitButton.on('click', function () {
        var movieTitle = $('#inputTitle').val();
        var movieYear = $('#select').val();
        var movieGenre = $('#inputGenre').val();
        var movie = createMovie(movieTitle, movieYear, movieGenre);
        console.log(movie.title);
        console.log(movie.year);
        console.log(movie.genre);
    })

}

