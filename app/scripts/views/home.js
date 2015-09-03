import data from 'scripts/controllers/data.js';
export function renderHome() {
    var $mainContent = $('#main-content');

    data.movies.getAllMoviesFromDataBase()
        .then(function (dbMovies) {
            $.ajax('templates/movie-table-main-menu.html', {
                success: function (template) {
                    template = $(template);
                    var homeTemplate = Handlebars.compile(template.html());
                    var partial = homeTemplate(dbMovies);
                    $mainContent.html(partial);
                }
            })
        })
}
