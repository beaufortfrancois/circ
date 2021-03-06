// Generated by CoffeeScript 1.4.0
(function() {
  "use strict";
  var Runtime, exports, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  var exports = (_ref = window.mocks) != null ? _ref : window.mocks = {};

  Runtime = (function() {

    Runtime.useMock = function() {
      chrome.runtime = new Runtime;
      return spyOn(chrome.runtime, 'reload');
    };

    function Runtime() {
      this._addUpdateListener = __bind(this._addUpdateListener, this);
      this.onUpdateAvailable = {};
      this.onUpdateAvailable.addListener = this._addUpdateListener;
    }

    Runtime.prototype.reload = function() {};

    Runtime.prototype._addUpdateListener = function(callback) {
      return this.updateAvailable = callback;
    };

    return Runtime;

  })();

  exports.Runtime = Runtime;

}).call(this);
