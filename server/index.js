var express = require('express');
var app = express();
var database = require('../database/index.js');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/bestMemes', function(req, res) {
  database.selectAll((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})

app.post('/bestMemes', function(req, res) {
  let.name = req.body.name;
  let.url = req.body.url;
  if (!name) {
    res.sendStatus(400);
  } else {
    database.insertOne(name, url, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        req.status(200);
      }
    });
  }
});
app.listen(3000, function() {
  console.log('listening on port 3000!');
});