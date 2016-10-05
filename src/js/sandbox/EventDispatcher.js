/*global define:false */
define(function () {

    'use strict';

    var EventDispatcher = function () {
        this._listeners = {};
    };

    EventDispatcher.prototype = (function () {

        var listenEvent = function (eventName, callback) {
            if (!eventName) return;
            if (!callback && typeof callback !== 'function') return;

            this._listeners[eventName] = callback;
        },

        dispatchEvent = function (eventName, data) {
            if (!eventName) return;
            for (var key in this._listeners) {
                if (this._listeners.hasOwnProperty(eventName) && key === eventName) {
                    this._listeners[eventName](data);
                }
            }
        };

        return {
            listenEvent: listenEvent,
            dispatchEvent: dispatchEvent
        };
    })();

    return EventDispatcher;
});
