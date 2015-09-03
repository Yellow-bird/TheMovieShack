var data = (function () {
    'use strict';

    function userSignUp(newUser) {
        var promise = new Promise(function (resolve, reject) {
            var user = new Parse.User();
            user.setUsername(newUser.username);
            user.setPassword(newUser.password);
            user.setEmail(newUser.email);
            user.set('isSuperUser', newUser._superUser);

            user.signUp(null, {
                success: function (user) {
                    resolve(user);
                },
                error: function (user, error) {
                    reject(error.message);
                }
            })
        });

        return promise;
    }

    function userSignIn(username, password) {
        var promise = new Promise(function (resolve, reject) {
            Parse.User.logIn(username, password, {
                success: function (user) {
                    resolve(user);
                },
                error: function (user, error) {
                    reject(error.message);
                }
            });
        });

        return promise;
    }

    function userIsSignedIn() {
        var currentUser = Parse.User.current();

        if (currentUser === null) {
            return false;
        }

        return true;
    }

    function userCanCreateMovie() {
        var currentUser = Parse.User.current(),
            isSuper;

        if (currentUser === null) {
            return false;
        }

        isSuper = currentUser.get('isSuperUser');

        if (!isSuper) {
            return false;
        }

        return true;
    }

    function userSignOut() {
        var promise = new Promise(function (resolve, reject) {
            Parse.User.logOut();
            resolve('signedOut');
        });

        return promise;
    }

    function addMovieToDataBase(movie) {
        var promise = new Promise(function (resolve, reject) {
            var Movie = Parse.Object.extend('Movie');

            var newMovie = new Movie();
            newMovie.set('title', movie.title);
            newMovie.set('year', movie.year);
            newMovie.set('genre', movie.genre);

            newMovie.save();

        });

        return promise;
    }

    function getAllMovieDetailsFromDataBase(dbMovies) {
        var promise = new Promise(function (resolve, reject) {
            var Movie = Parse.Object.extend('Movie');
            var query = new Parse.Query(Movie);
            query.find()
                .then(function (movies) {
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
                    resolve(dbMovies);
                });
        });

        return promise;
    }

    return {
        users: {
            signUp: userSignUp,
            signIn: userSignIn,
            signedIn: userIsSignedIn,
            canCreateMovie: userCanCreateMovie,
            signOut: userSignOut
        },
        movies: {
            addToDataBase: addMovieToDataBase,
            getAllMoviesFromDataBase: getAllMovieDetailsFromDataBase

        }
    }
}());

export default data;