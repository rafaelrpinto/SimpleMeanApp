var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var unirest = require('unirest');

// Route files
var series = require('./routes/seriesController');

//Express setup
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Route definitions
app.use('/series', series);

//DB config
mongoose.connect('mongodb://localhost:27017/tv-tracker'); // connect to our database


module.exports = app;