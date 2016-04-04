(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['leaflet', 'react-dom'], factory);
  } else if (typeof module !== 'undefined') {
    // Node/CommonJS
    module.exports = factory(require('leaflet'), require('react-dom'));
  } else {
    // Browser globals
    if (typeof window.L === 'undefined')
      throw 'Leaflet must be loaded first';
    if (typeof window.ReactDOM === 'undefined')
      throw 'ReactDOM must be loaded first';
    factory(window.L, window.ReactDOM);
  }
})(function(L, ReactDOM) {
  'use strict';
  
  L.Control.React = L.Control.extend({
    render: function () {
      ReactDOM.render(this.options.getElement(this._map), this._container);
    },
    onAdd: function () {
      this._container = L.DomUtil.create('div', 'leaflet-control-react');
      this.render();
      return this._container;
    },
    onRemove: function () {
      ReactDOM.unmountComponentAtNode(this._container);
    }
  });

  L.control.react = function(options) {
    return new L.Control.React(options);
  };
  
  return L.Control.React;
});
