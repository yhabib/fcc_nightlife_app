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

const config = require('./config');




/********************************************************************************
    -- APP --
********************************************************************************/

const app = express()
    // Use application-level middleware for common functionality, including logging, parsing, and session handling.
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    // Routes
    .get('/', (req, res) => res.json("Works"));






module.exports = app;