let mongoose = require('mongoose'),
    schema = require('./schema'),
    Model = mongoose.model('Bar', schema, 'bars');


exports.getClubsByLocation = function (region, callback) {
    let query = {
        region: region
    };
    Model.find(query, callback);
};

exports.saveLocal = function (id, region, callback) {
    let Bar = new Model({
        _id: id,
        region: region,
        visitorsCount: 1
    });

    Bar.save(callback);
}

exports.removeLocal = function (id, callback) {
    let query = { _id: id };

    Model.findOneAndRemove(query, callback);
}
 
exports.addVisitorToLocal = function (id, callback) {
    let query = { _id: id },
        update = { $inc: { visitorsCount: 1 } },
        options = { new: false };

    Model.findOneAndUpdate(query, update, options, callback);
};

exports.removeVisitorFromLocal = function (id, callback) {
    let query = { _id: id },
        update = { $inc: { visitorsCount: -1 } },
        options = { new: false };

    Model.findOneAndUpdate(query, update, options, callback);
};