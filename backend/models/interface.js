let mongoose = require('mongoose'),
    schema = require('./schema'),
    Model = mongoose.model('Bar', schema, 'bars');


exports.getPollById = function(id, callback) {   
    let query = {
        _id: id
    };
    Model.findOne(query, callback);
};
