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
        type: string,
        required: true
    },
    partID: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Parts", PartsSchema);