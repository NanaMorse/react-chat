/**
 * Created by nana on 16/3/11.
 */

require('../css/main.css');

var React  = require('react');
var ReactDom = require('react-dom');
var Hello = require('./components/Hello');

var container = document.getElementById('container');



ReactDom.render(<Hello name='morse'/>, container);