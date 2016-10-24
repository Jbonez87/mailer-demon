const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const authentication = require('./middleware/authentication');
const AuthRouter = require('../app/routes/AuthRouter');
const UserRouter = require('../app/routes/UserRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUnitialized: true,
}));

app.use(morgan('dev'));

// app.use('/app', authentication);
app.use('/app', AuthRouter);
app.use('/app/users', UserRouter);
app.use('/app/thankyou', authentication);

module.exports = app;
