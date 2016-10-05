/*global define:false */
define(['views/MoviesListView', 'text!../../templates/MovieView.html'], function (MoviesListView, MovieTemplate) {

    var MovieView = function (model, elements) {
        this._model = model;
        this.$elements = elements;
        this.isCache = true;

        $('body').on('click', '.link-more', this.events);

        window.Vents.Events.listenEvent('MovieClicked', this.getFirstVideo.bind(this));
    };

    MovieView.prototype = (function () {
        var tmpl = _.template(MovieTemplate);

        var render = function (video) {
            var list = new MoviesListView(this._model);

            this.$elements.$videosContainer.html('');
            this.$elements.$videosContainer.html(tmpl({ data: video }));

            list.render();

            //$('.video-source').attr('src', '');
        },

        getFirstVideo = function (id) {
            var self = this;
            
                if (self.isCache) {
                    window.Vents.Events.dispatchEvent('setCache', this._model);
                    self.isCache = false;
                }

                this._model.filter(function (video) {
                    if (video.id === id) {
                        self.render(video);
                    } 
                });
        },

        events = function (e) {
            window.Vents.Events.dispatchEvent('more', e.target.id);
            e.preventDefault();
        },
        
        destroy = function () {
            window.Vents.Events.removeEvent('MovieClicked');
        };

        return {
            render: render,
            getFirstVideo: getFirstVideo,
            events: events,
            destroy: destroy
        };
    })();

    return MovieView;
});
