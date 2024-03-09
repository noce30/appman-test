const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', 3002);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
