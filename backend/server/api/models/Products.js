const validator = require("validator");
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    ProductName: {
        type: String,
        trim: String,
        required: [true, 'ProductName cannot be blank.'],
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [50, 'Must be less than 50 characters.']
    },
    ProductShotCode: {
        type: String,
        trim: String,
        required: [true, 'ProductShotCode cannot be blank.'],
        unique: [true, 'Duplicat value not allowed.'],
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [20, 'Must be less than 50 characters.']
    },
    Price: {
        type: Number,
        required: [true, 'Price cannot be blank.'],
    },
    Quantity: {
        type: Number,
        required: [true, 'Quantity cannot be blank.'],
    },
    Description: {
        type: String,
        trim: String,
        maxlength: [250, 'Must be less than 50 characters.']
    },
    ImageLink: String
    // createdAt: {type: Date, default: Date.now},
    // updatedAt: {type: Date, default: Date.now}

});

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;