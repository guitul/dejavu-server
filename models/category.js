var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// category schema
var categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'factory'
    },
}, {
    timestamps: true
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;