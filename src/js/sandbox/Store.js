/*global define:false */
define(function () {
    
    'use strict';

    var Store = function () {
        this._data = {};
    };

    Store.prototype = (function () {

        var set = function (url, data) {
            if (!url) return;

            if (!this._data.url && !this._data.hasOwnProperty(url)) {
                this._data[url] = data;
            }
        },

        get = function (url) {
            return this._data[url];
        },

        isExist = function (url) {
            return this._data.hasOwnProperty(url) && this._data[url] !== null;
        };

        return {
            get: get,
            set: set,
            isExist: isExist
        };

    })();

    return Store;
});
