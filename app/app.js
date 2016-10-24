const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const authentication = require('./middleware/authentication');
const AuthRouter = require('../app/routes/AuthRouter');

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

app.use('/api', authentication);
app.use('/api', AuthRouter);

module.exports = app;
