require('dotenv').config();

/********************************************************************************
    -- PACKAGES --
********************************************************************************/
const express = require('express'),
    // pug = require('pug'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');



/********************************************************************************
    -- INIT -- Database and authentication
********************************************************************************/

const config = require('./config'),
      api = require('./routes/routes');




/********************************************************************************
    -- APP --
********************************************************************************/

const app = express()
    // Use application-level middleware for common functionality, including logging, parsing, and session handling.
    .use(morgan('dev'))
    .use(express.static('frontend'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    // Routes
    .use('/api', api);

const port = process.env.PORT;
app.listen(port, console.log.bind(console, `Listening on port ${port}`))

module.exports = app;