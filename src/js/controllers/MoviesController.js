/*global define:false */
define(function () {

    'use strict';

    var MoviesController = function (model, view) {
        this._model = model;
        this._view = view;
    };

    MoviesController.prototype = (function () {

        var getVideos = function () {
            this._model.get();
        };

        return {
            getVideos: getVideos
        };

    })();

    return MoviesController;
});
