const mongoose = require('mongoose')

// defines the task model
const suitItemSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})

// define and export the task model for the database
module.exports = mongoose.model('SuitItem', suitItemSchema, 'cat-suits')