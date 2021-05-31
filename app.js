var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mysql = require("mysql");
const DB = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '1132836340',
    database: 'first_project',


};
const DBConnection = mysql.createConnection({
    host: DB.host,
    user: DB.user,
    port: DB.port,
    password: DB.password,
    database: DB.database,
    multipleStatements: true
});
DBConnection.connect();
module.exports.DBConnection = DBConnection;

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var messageRouter = require('./routes/message');
var adminRouter = require('./routes/admin')
var admin_imgRouter = require('./routes/admin_img');
var admin_messageRouter = require('./routes/admin_message');
var admin_publishRouter = require('./routes/admin_publish');
var admin_userRouter = require('./routes/admin_user');
var sendRouter = require('./routes/send');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register', registerRouter);
app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', messageRouter);
app.use('/', adminRouter);
app.use('/', admin_imgRouter);
app.use('/', admin_messageRouter);
app.use('/', admin_publishRouter);
app.use('/', admin_userRouter);
app.use('/', sendRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;