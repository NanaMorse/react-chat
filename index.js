/**
 * Created by nana on 16/3/11.
 */

'use strict';
var express = require('express');
var app = express();

let PORT = 3000;

app.use(express.static('public'));

app.listen(PORT);
console.log('Server has started on port 3000!');