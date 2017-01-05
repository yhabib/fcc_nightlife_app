const mongoose = require('mongoose'),
    config = require('config'),
    passport = require('passport'),
    Strategy = require('passport-facebook').Strategy;


/********************************************************************************
    -- Database --
********************************************************************************/
let options = { 
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
              }; 
              
mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost, options);
mongoose.connection
    .on('connected', console.log.bind(console, 'Success: Connected to DB'))
    .on('disconnected', console.log.bind(console, 'Success: Disconnected to DB'))
    .on('error', console.error.bind(console, 'Error:'));

// //don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }