var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

// var messages = [];

// control variables
var port = process.env.PORT || 3000;
var currentDirectory = process.env.PORT ? process.cwd() : __dirname;

// host static files
app.use(express.static(path.join(currentDirectory, 'client')));
app.use('/socket.io', express.static(path.join(currentDirectory, 'node_modules', 'socket.io-client', 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/receive', (req, res) => {
    console.log('Received message', req.body.Body);
    io.emit('new-msg', req.body.Body);
    // var msg = req.body.Body;
    // messages.push(msg);
    // console.log(msg);
    // console.log(req.body);
    res.send('success');
});

// // The below route emulates the above POST route but with a GET request, for easier local testing
// app.get('/testMsg', (req, res) => {
//     console.log('Fake received message:', '"' + req.query.msg + '"');
//     io.emit('new-msg', req.query.msg);
//     res.send('success');
// });

// app.get('/fetchmsg', (req, res) => {
//   console.log(messages);
//   var msg = messages[0];
//   messages.splice(0,1);
//   res.send({
//     'message': msg
//   })
// })

http.listen(port, () => {
  console.log("App is running on port ", port);
});
