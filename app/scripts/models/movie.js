export function createMovie(title, year, genre, director, summary) {
    var movie = (function () {
        var movie = Object.create({});

        Object.defineProperty(movie, 'init', {
            value: function (title, year, genre) {
                this.title = title;
                this.year = year;
                this.genre = genre;
                this.director = director;
                this.summary = summary;
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

        return movie;
    }());


    return Object.create(movie).init(title, year, genre, director, summary);
}

//var movie = createMovie('Terminator', 1986, 'Sci fi');
//console.log(movie.title);
//console.log(movie.genre);


