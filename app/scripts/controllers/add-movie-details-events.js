import {createMovie} from 'scripts/models/movie.js';
export function submitMovieDetails() {
    var $submitButton = $('#submit-movie-details-btn');
    $submitButton.on('click', function () {
        var movieTitle = $('#inputTitle').val();
        var movieYear = $('#select').val();
        var movieGenre = $('#inputGenre').val();
        var movie = createMovie(movieTitle, movieYear, movieGenre);
        var Movie = Parse.Object.extend('Movie');

        //can be later moved to a save function
        var newMovie = new Movie();

        newMovie.set('title', movie.title);
        newMovie.set('year', movie.year);
        newMovie.set('genre', movie.genre);


        newMovie.save().then(function() {
            alert("yay! it worked");
        });

        //console.log(movie.title);
        //console.log(movie.year);
        //console.log(movie.genre);
    })

}

