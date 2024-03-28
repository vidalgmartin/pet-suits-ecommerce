const mongoose = require('mongoose')

// defines the task model
const suitItemSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    itemId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    inCart: {
        type: Boolean,
        default: false,
        required: false
    },
    image: {
        type: String,
        required: true,
        default: 'default.jpg'
    },
    sizeSmall: {
        type: Boolean,
        default: false,
        required: false
    },
    sizeMedium: {
        type: Boolean,
        default: false,
        required: false
    },
    sizeLarge: {
        type: Boolean,
        default: false,
        required: false
    }
})

// define and export the task model for the database
module.exports = mongoose.model('SuitItem', suitItemSchema, 'cat-suits')