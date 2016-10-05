/*global define:false */
define(function (require) {
    
    'use strict';

    var Store = require('sandbox/Store');

    var MoviesProxy = function (url) {
        this._url = url || '../../movies.json';
        this._store = new Store();

        window.Vents.Events.listenEvent('setCache', this.setCache.bind(this));
    };

    MoviesProxy.prototype = (function () {

        var getMovies = function () {
            var self = this,
                deferred =  $.Deferred();

            if (!this._store.isExist(this._url)) {
                return $.ajax({
                    url: this._url,
                    method: 'GET',
                    dataType: 'json'
                });
            }

            deferred.resolve(this._store.get(self._url));
            
            return deferred.promise();
        },

        setCache = function (data) {
            this._store.set(this._url, data);
        };

        return {
            getMovies: getMovies,
            setCache: setCache
        };
    })();

    return MoviesProxy;
});
