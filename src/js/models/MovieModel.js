/*global define:false */
define(function (require) {

    'use strict';
    
    var MoviesProxy = require('../sandbox/MoviesProxy');

    var MovieModel = function () {
        this._videosList = null;
        this._movieProxy = new MoviesProxy();
    };

    MovieModel.prototype = (function () {
        var get = function () {
            return this._movieProxy.getMovies();
        };

        return {
            get: get
        };
    })();

    return MovieModel;
});
