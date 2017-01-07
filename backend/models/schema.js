let mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    visitorsCount: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    }
});