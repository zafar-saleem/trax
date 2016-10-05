/*global require:false */
require(['app', 'sandbox/EventDispatcher', 'underscore', 'jquery'], function (App, EventDispatcher) {
    window.Vents = {
        Events: new EventDispatcher()
    };

    App.init();
});
