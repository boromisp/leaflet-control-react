# leaflet-control-react

Leaflet Control that renders a react component onto the map.

## Usage

The control is provided as a [UMD](https://github.com/umdjs/umd) module.

The essence of it is 10 simple lines of code, you should just copy, paste and customize it. Or you could grab it from npm:
```
npm i leaflet-control-react
```

Basic usage:

```js
var label = 'Hello Leaflet!';

function getElement () {
  return React.DOM.div({ className: 'leaflet-control-with-react' }, label);
}

var reactControl = L.control.react({
  position: 'bottomleft',
  getElement: getElement
}).addTo(map);

/* Change some props, and re-render: */
label = 'Hello React!';
reactControl.render();
```

The `getElement` function gets the leaflet `map` as its argument.

The react components are rendered into a `div` with `leaflet-control-react`, and the default `leaflet-control` classes.

## Options

`getElement` - A function with a single `L.Map` argument. The return value is rendered as:
```
ReactDOM.render(this.options.getElement(this._map), this._container);
```
when the control is added to the map, and anytime the `.render()` function is called.

`position` - Inherited from `L.Control`

## Methods

`render()` - Re-renders the react component. Could be called to change top-level props for example.

## Events

You should be able to use the [react event system](https://facebook.github.io/react/docs/events.html), since it's just a thin wrapper around your react component.

## License

ISC
