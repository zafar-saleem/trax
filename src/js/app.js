/*global define:false */
define(['models/MovieModel', 'views/MovieView', 'controllers/MoviesController', 'views/MoviePanel'], function (MovieModel, MovieView, MoviesController, MoviePanel) {

    'use strict';

    var App = (function() {

        var init = function() {
            var model = new MovieModel();
            var view;

            model.get().done(function (data) {
                view = new MovieView(data, {
                    '$videosContainer': $('.m-movie')
                });

                view.getFirstVideo('1');
                var panel = new MoviePanel(data);
                panel.getDescription('1');
            });

        };

        return {
            init: init
        };

    }());

    return App;
});
