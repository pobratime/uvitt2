const express = require('express');
const path = require('path');

const app = express();

// sta se desava

app.use(express.static(path.join(__dirname, 'public')));

app.use('/hello', function(req, res, next){
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(function(req, res, next){
  res.sendFile(path.join(__dirname, 'views', 'greska.html'));
});

module.exports = app;

