var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var shapeRoute = require('./route/shapeRoutes');
var cors = require('cors');

var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());




/** ---------- ROUTES ---------- **/
app.use('/shapes', shapeRoute);

/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var databaseUri = 'mongodb://localhost:27017/wild-shapes';
mongoose.Promise = global.Promise;

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose failed to connect because error:', err);
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log(`api running on port: ${port}`);
})