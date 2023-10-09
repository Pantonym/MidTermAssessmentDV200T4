const mongoose = require('mongoose')

const InvoiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cart: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("orders", InvoiceSchema)