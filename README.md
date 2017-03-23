# TMDb Movie Search
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/SKempin/reactjs-tmdb-app/blob/master/LICENCE)

TMDb Movie Search is a responsive [ReactJS](http://facebook.github.io/react/index.html) app that utilises Twitter's [typeahead.js](https://twitter.github.io/typeahead.js/) and [Bloodhound](https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md) suggestion engine, loading data via [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).

![](https://github.com/SKempin/reactjs-tmdb-app/blob/master/docs/images/tmdb-demo.gif)

## Demo
[TMDb Movie Search - Live DEMO](https://skempin.github.io/reactjs-tmdb-app/)

## Tools
Key tools used in this ReactJS project are:

* [ReactJS](http://facebook.github.io/react/index.html)
* [Typeahead.js](https://twitter.github.io/typeahead.js/)
* [Bloodhound](https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md)
* [Bootstrap](http://getbootstrap.com/)
* [SASS](http://sass-lang.com/)
* [Browserify](http://browserify.org/)
* [Babel](https://babeljs.io/)
* [Gulp](http://gulpjs.com/)

## Installation
[node.js](http://nodejs.org/download/) is required to get ``npm``.

If you would like to download the code and try it for yourself:

1. Clone the repo: `git@github.com:SKempin/reactjs-tmdb-app.git`
2. `cd reactjs-tmdb-app`
2. Install packages: `npm install` and `bower install`
3. Build project and launch: `gulp watch`
4. Open your browser at: `http://localhost:9000`

## Browser Support
This project makes usage of the Fetch API, utilising a polyfill for older browsers.

- Chrome 42+
- Firefox 39+
- Safari 10+ (with polyfill)
- Internet Explorer 11+ (with polyfill)
- Edge 14+

## Author
[Stephen Kempin](http://www.stephenkempin.co.uk)

## License
[MIT](https://github.com/SKempin/reactjs-tmdb-app/blob/master/LICENCE)
