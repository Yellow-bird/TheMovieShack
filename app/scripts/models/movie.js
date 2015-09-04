export function createMovie(title, year, genre, director, summary, writers, cast) {
    var movie = (function () {
        var movie = Object.create({});

        Object.defineProperty(movie, 'init', {
            value: function (title, year, genre) {
                this.title = title;
                this.year = year;
                this.genre = genre;
                this.director = director;
                this.summary = summary;
                this.writers = writers;
                this.cast = cast;
                return this;
            }
        });

        Object.defineProperty(movie, 'title', {
            get: function () {
                return this._title;
            },

            set: function (value) {
                //some validation if needed

                this._title = value;
            }
        });
        Object.defineProperty(movie, 'year', {
            get: function () {
                return this._year;
            },

            set: function (value) {
                //some validation if needed

                this._year = value;
            }
        });

        Object.defineProperty(movie, 'genre', {
            get: function () {
                return this._genre;
            },

            set: function (value) {
                //some validation if needed

                this._genre = value;
            }
        });

        Object.defineProperty(movie, 'director', {
            get: function () {
                return this._director;
            },

            set: function (value) {
                //some validation if needed

                this._director = value;
            }
        });

        Object.defineProperty(movie, 'summary', {
            get: function () {
                return this._summary;
            },

            set: function (value) {
                //some validation if needed

                this._summary = value;
            }
        });

        Object.defineProperty(movie, 'writers', {
            get: function () {
                return this._writers;
            },

            set: function (value) {
                //some validation if needed

                this._writers = value;
            }
        });
        Object.defineProperty(movie, 'cast', {
            get: function () {
                return this._cast;
            },

            set: function (value) {
                //some validation if needed

                this._cast = value;
            }
        });

        return movie;
    }());


    return Object.create(movie).init(title, year, genre, director, summary, writers, cast);
}

//var movie = createMovie('Terminator', 1986, 'Sci fi');
//console.log(movie.title);
//console.log(movie.genre);


