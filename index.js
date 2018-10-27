var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

// control variables
var port = process.env.PORT || 3000;
var currentDirectory = process.env.PORT ? process.cwd() : __dirname;

// host static files
app.use(express.static(path.join(currentDirectory, 'client')));
app.use('/socket.io', express.static(path.join(currentDirectory, 'node_modules', 'socket.io-client', 'dist')));

// Express configuration for post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Twilio facing API
app.post('/receive', (req, res) => {
    console.log('Received message', req.body.Body);
    
    // emit an event via socket io	
    io.emit('new-msg', req.body.Body);

    // send twilio a response
    res.send('success');
});

// Start HTTP server on port specified in control variables
http.listen(port, () => {
  console.log("App is running on port ", port);
});
