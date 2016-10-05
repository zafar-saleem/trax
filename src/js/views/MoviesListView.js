/*global define:false */
define(['text!../../templates/MoviesList.html'], function (MoviesListTemplate) {

    'use strict';

    var MoviesListView = function (model, elements) {
        this._model = model;
        this.$list = $('.m-movies-list');

        $('body').on('click', '.link-list', this.events);
    };

    MoviesListView.prototype = (function () {

        var render = function () {
            var self = this;
            var view = _.template(MoviesListTemplate);

            //this._model.done(function (videos) {
                self.$list.html(view({ movies: this._model }));
            //}).fail(function (err) {
                //self.$list.html('<h3>Movies list cannot be rendered dur error</h3>');
            //});
        },

        events = function (e) {
            window.Vents.Events.dispatchEvent('closepanel');
            window.Vents.Events.dispatchEvent('MovieClicked', e.target.id);
            window.Vents.Events.dispatchEvent('DescEvent', e.target.id); 

            e.preventDefault();
        },

        destroy = function () {
            window.Vents.Events.removeEvent('MovieClicked');
        };

        return {
            render: render,
            events: events
        };
    })();

    return MoviesListView;
});
