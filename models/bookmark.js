var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// bookmark schema
var bookmarkSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

var Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;