/**
 * Created by nana on 16/3/11.
 */

'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let PORT = 3000;

app.use(express.static('public'));


io.on('connection', function(socket){
  socket.on('sendMsg', function(from, msg){
    socket.broadcast.emit('receiveMsg', from ,msg, 'hasReceive');
  });
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});