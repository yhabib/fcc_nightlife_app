let mongoose = require('mongoose'),
    schema = require('./schema'),
    Model = mongoose.model('Bar', schema, 'bars');


exports.getClubsByRegion = function (id, callback) {
    let query = {
        _id: id
    };
    Model.findOne(query, callback);
};

exports.saveLocal = function (id, region, callback) {
    let Bar = new Model({
        placeId: id,
        region: region,
        visitorsCount: 1
    });

    Poll.save(callback);
}

exports.removeLocal = function (id, callback) {
    let query = { placeId: id };

    Model.findOneAndRemove(query, callback);
}


exports.addVisitorToLocal = function (id, callback) {
    let query = { placeId: id },
        update = { $inc: { visitorsCount: 1 } },
        options = { new: false };

    Model.findOneAndUpdate(query, update, options, callback);
};

exports.removeVisitorFromLocal = function (id, callback) {
    let query = { placeId: id },
        update = { $dec: { visitorsCount: 1 } },
        options = { new: false };

    Model.findOneAndUpdate(query, update, options, callback);
};