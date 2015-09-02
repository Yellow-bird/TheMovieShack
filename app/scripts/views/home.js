export function renderHome() {
    var Movie = Parse.Object.extend('Movie');
    var query = new Parse.Query(Movie);
    var $mainContent = $('#main-content');
    query.find()
        .then(function (movies) {
            var dbMovies = [];
            var id = 0;
            movies.forEach(function (movie) {
                var newMovie = {
                    id: ++id,
                    title: movie.get('title'),
                    year: movie.get('year'),
                    genre: movie.get('genre')
                };
                dbMovies.push(newMovie);
            });
            return dbMovies;
        }).then(function (dbMovies) {
            $.ajax('templates/movie-table-main-menu.html', {
                success: function (template) {
                    template = $(template);
                    var homeTemplate = Handlebars.compile(template.html());
                    var partial = homeTemplate(dbMovies);
                    $mainContent.html(partial);
                }
            })
        }
    );

}
