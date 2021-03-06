var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var elasticLoader = require('./utility/flashlightApp');
var index = require('./routes/index');
var images = require('./routes/images');
var tags = require('./routes/tags');
var admin = require("firebase-admin");
var searchQueue = require("./utility/flashlightSearchQueue");
var elasticsearch = require('elasticsearch');



var app = express();

// firebase-admin setup
//var serviceAccount = require("./service-account-key.json");

//admin.initializeApp({
  //  credential: admin.credential.cert(serviceAccount),
    //databaseURL: "https://architects-image-workbench.firebaseio.com/",
    //storageBucket: "gs://architects-image-workbench.appspot.com/"
//});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public'))
})

app.use('/', index);
app.use('/images', images);
app.use('/tags', tags);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
