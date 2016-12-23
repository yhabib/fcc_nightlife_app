const mongoose = require('mongoose'),
    url = `mongodb://${process.env.MONGO_USER_PSW}@ds055555.mlab.com:55555/fcc_nightlife_app`,
    passport = require('passport'),
    Strategy = require('passport-facebook').Strategy;


/********************************************************************************
    -- Database --
********************************************************************************/
mongoose.Promise = global.Promise;
mongoose.connect(url, (err, db) => {
    if (err) throw err;
    else console.log('Success: Connected to DB');
});