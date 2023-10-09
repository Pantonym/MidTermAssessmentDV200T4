// https://mongoosejs.com/docs/schematypes.html
const mongoose = require('mongoose');

const PartsSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    chasis: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    partID: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Parts", PartsSchema);