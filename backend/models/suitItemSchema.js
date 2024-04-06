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
    quantityInCart: {
        type: Number,
        required: false,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    mainImage: {
        type: String,
        required: true,
        default: 'default.jpg'
    },
    otherImages: {
        type: [String],
        required: true,
        default: 'default.jpg'
    },
    size: {
        type: String,
        default: '',
        required: false
    }
})

// define and export the task model for the database
module.exports = mongoose.model('SuitItem', suitItemSchema, 'cat-suits')