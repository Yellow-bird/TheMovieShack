import {createMovie} from 'scripts/models/movie.js';
import data from 'scripts/controllers/data.js';
export function submitMovieDetails() {
    var $submitButton = $('#submit-movie-details-btn');
    $submitButton.on('click', function () {
        var movieTitle = $('#inputTitle').val();
        var movieYear = $('#select').val();
        var movieGenre = $('#inputGenre').val();
        var movie = createMovie(movieTitle, movieYear, movieGenre);

        data.movies.addToDataBase(movie);

        //var Movie = Parse.Object.extend('Movie');
        //
        ////can be later moved to a save function
        //var newMovie = new Movie();
        //newMovie.set('title', movie.title);
        //newMovie.set('year', movie.year);
        //newMovie.set('genre', movie.genre);
        //
        //
        //newMovie.save()
    })

}

