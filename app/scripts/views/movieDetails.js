import data from 'scripts/controllers/data.js';
import {addReview} from 'scripts/controllers/add-review-event.js';
import {addRating} from 'scripts/controllers/rate-movie-event.js';

var movie;

export function renderMovieDetails(id){
    var $mainContent = $('#main-content');

    data.movies.getAllMoviesFromDataBase()
        .then(function (dbMovies) {
            $.ajax('templates/movie-details-form.html', {
                success: function (template) {
                    template = $(template);
                    var homeTemplate = Handlebars.compile(template.html());
                    movie = dbMovies.filter(function(dbMovie){
                        return dbMovie.id == id;
                    });
                    movie = movie[0];
                    var partial = homeTemplate(movie);
                    $mainContent.html(partial);

                    addRating(movie);

                    addReview(movie);
                }
            });
        });
}
