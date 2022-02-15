const express = require('express');
const router = express.Router();
const books = require('./books.js');

router.get('/:title', (req, res) => {
    if (books.length === 0) {
        res.redirect('/');
    } else {
        for(i = 0; i < books.length; i++) {
            if (books[i].title == req.params.title) {
                res.render('editBook', {book: books[i]});
            }
        }
    }
});

router.post('/:title', (req, res) => {
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        cover: req.body.cover
    };

    for (i = 0; i < books.length; i++) {
        if (books[i].title == req.params.title) {
            books[i] = newBook;
            res.redirect('/');
        } else {
            res.redirect('/editBook');
        }
    }
});

module.exports = router;