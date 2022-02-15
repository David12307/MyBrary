const express = require('express');
const router = express.Router();
var books = require('./books.js');

router.get('/', (req, res) => {
    if (books.length === 0) {
        res.redirect('/addBook');
    } else {
        res.render('index', {books: books});
    }
});

router.post('/', (req, res) => {
    var book = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        cover: req.body.cover
    }
    
    for (i = 0; i < books.length; i++) {
        if (books[i].title == book.title) {
            console.log(books[i].title);
            books.splice(i, 1);
        }
    }

    console.log(books);
    res.redirect('/');
});

module.exports = router;