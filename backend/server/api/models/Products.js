const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ProductName: {
        type: String,
        trim: String,
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [50, 'Must be less than 50 characters.']
    },
    Price: {
        type: Number,
    },
    Description: {
        type: String,
        trim: String,
        maxlength: [250, 'Must be less than 50 characters.']
    },
    ImageLink: {
        type: String
    }
});

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;