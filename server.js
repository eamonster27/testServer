const express    = require('express'),
      http       = require('http');

const app = express();

app.use(express.static('public'));

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  }
  else {
    next(err);
  }
});

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, function (err) {
  console.log('Listening on http://localhost:' + port);
});

app.use(require('./routes/user'));
