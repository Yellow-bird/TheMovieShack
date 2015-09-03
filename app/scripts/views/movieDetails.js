import data from 'scripts/controllers/data.js';
export function renderMovieDetails(id){
    var $mainContent = $('#main-content');

    data.movies.getAllMoviesFromDataBase()
        .then(function (dbMovies) {
            $.ajax('templates/movie-details-form.html', {
                success: function (template) {
                    template = $(template);
                    var homeTemplate = Handlebars.compile(template.html());
                    var movie = dbMovies.filter(function(dbMovie){
                        return dbMovie.id == id;
                    });
                    var partial = homeTemplate(movie[0]);
                    $mainContent.html(partial);
                }
            })
        })
}
