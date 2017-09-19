var express = require('express');
var app = express();
var messages = [];



app.post('/receive', (req, res) => {
  var msg = req.body.Body;
  messages.append(msg);
  res.send('success');
});

app.get('/fetchmsg', (req, res) => {
  var msg = messages.splice(0,1);
  res.send({
    'message': msg
  })
})

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
