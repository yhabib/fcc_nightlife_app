let mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    placeId: {
        type: String,
        required: true
    },
    visitorsCount: {
        type: Number,
        required: true
    }
});