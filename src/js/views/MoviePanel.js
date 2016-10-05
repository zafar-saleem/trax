/*global define:false */
define(['text!../../templates/Panel.html'], function (PanelTemplate) {

    'use strict';

    var MoviePanel = function (model) {
        this._model = model;
        this.$panel = $('.m-panel');
        this.isPanelClose = true;
        this.$overlay = $('.m-overlay');

        window.Vents.Events.listenEvent('DescEvent', this.getDescription.bind(this));
        window.Vents.Events.listenEvent('more', this.showPanel.bind(this));

        $('body').on('click', '.close-panel', this.closePanel.bind(this));
        $('body').on('click', '.m-overlay', this.closePanel.bind(this));
    };

    MoviePanel.prototype = (function () {
        var tmpl = _.template(PanelTemplate);
 
        var render = function (videoData) {
           this.$panel.html(tmpl({ data: videoData }));
        },

        getDescription = function (id) {
            var self = this;

            this._model.filter(function (video) {
                if (video.id === id) {
                    self.render({
                        title: video.title,
                        desc: video.description,
                        release: video.meta.releaseYear,
                        meta: video.meta,
                        image: video.images.placeholder
                    });
                }
            });
        },

        showPanel = function () {
            this.isPanelClose = false;

            this.$overlay.addClass('is-shown');
            this.$overlay.removeClass('is-hidden');

            $(this.$panel).animate({
                right: 0 + 'px'
            }, 100);
        },

        closePanel = function (e) {
            var self = this;

            this.$overlay.removeClass('is-shown');
            this.$overlay.addClass('is-hidden');

                this.$panel.animate({
                    right: -385 + 'px'
                }, 30, function () {
                    self.isPanelClose = false;
                });
        };

        return {
            render: render,
            getDescription: getDescription,
            showPanel: showPanel,
            closePanel: closePanel
        };

    })();

    return MoviePanel;
});
