const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
require('dotenv').config()
//connecting to the DB
require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/users/login', require('./routes/api/users'))

//Catch All to serve the production app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(PORT, function() {
    console.log(`Express app running on port ${PORT}`)
  });