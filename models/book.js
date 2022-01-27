const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;