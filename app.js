var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var APIRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', APIRouter);

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connection established')
});

module.exports = {app, db};
