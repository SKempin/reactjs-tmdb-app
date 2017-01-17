import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-main';
import 'whatwg-fetch';
require('es6-promise').polyfill();

window.React = React;

ReactDOM.render( < App / > , document.getElementById('app'));
