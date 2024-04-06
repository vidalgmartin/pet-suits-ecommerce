const mongoose = require('mongoose')

// defines the task model
const cartItemSchema = new  mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: false,
    },
    itemId: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false,
        default: 1
    },
    price: {
        type: Number,
        required: false
    },
    size: {
        type: String,
        default: '',
        required: false
    },
    mainImage: {
        type: String,
        required: false,
        default: ''
    }
})

// define and export the task model for the database
module.exports = mongoose.model('CartItem', cartItemSchema, 'cart-items')