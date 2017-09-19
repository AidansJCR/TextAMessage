var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var messages = [];

var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/receive', (req, res) => {
  var msg = req.body.Body;
  messages.push(msg);
  console.log(msg);
  console.log(req.body);
  res.send('success');
});

app.get('/fetchmsg', (req, res) => {
  console.log(messages);
  var msg = messages[0];
  messages.splice(0,1);
  res.send({
    'message': msg
  })
})

app.listen(port, () => {
  console.log("App is running on port 3000");
});
